"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { loginSchema, signupSchema, forgotPasswordSchema, resetPasswordSchema, profileUpdateSchema } from "@/lib/auth";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validation = loginSchema.safeParse({ email, password });
  if (!validation.success) {
    return { error: validation.error.errors[0].message };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // Graceful fallback for mock mode if keys placeholder
    if (process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder")) {
      redirect("/dashboard");
    }
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signupAction(formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validation = signupSchema.safeParse({ fullName, email, password });
  if (!validation.success) {
    return { error: validation.error.errors[0].message };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder")) {
      redirect("/auth/verify-email");
    }
    return { error: error.message };
  }

  if (data.user) {
    // Insert into profiles table
    await supabase.from("profiles").upsert({
      id: data.user.id,
      email: data.user.email,
      full_name: fullName,
      role: "user",
      plan: "free",
    });
  }

  revalidatePath("/", "layout");
  redirect("/auth/verify-email");
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/auth/login");
}

export async function forgotPasswordAction(formData: FormData) {
  const email = formData.get("email") as string;
  const validation = forgotPasswordSchema.safeParse({ email });
  if (!validation.success) {
    return { error: validation.error.errors[0].message };
  }

  const supabase = await createClient();
  const origin = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/reset-password`,
  });

  if (error && !process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder")) {
    return { error: error.message };
  }

  return { success: "Password reset link sent to your email address." };
}

export async function resetPasswordAction(formData: FormData) {
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  const validation = resetPasswordSchema.safeParse({ password, confirmPassword });
  if (!validation.success) {
    return { error: validation.error.errors[0].message };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password });

  if (error && !process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder")) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function updateProfileAction(formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const avatarUrl = formData.get("avatarUrl") as string | undefined;

  const validation = profileUpdateSchema.safeParse({ fullName, avatarUrl });
  if (!validation.success) {
    return { error: validation.error.errors[0].message };
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user && !process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder")) {
    return { error: "Not authenticated" };
  }

  if (user) {
    const { error } = await supabase.from("profiles").update({
      full_name: fullName,
      ...(avatarUrl ? { avatar_url: avatarUrl } : {}),
      updated_at: new Date().toISOString(),
    }).eq("id", user.id);

    if (error) {
      return { error: error.message };
    }
  }

  revalidatePath("/dashboard/settings", "page");
  return { success: "Profile updated successfully!" };
}
