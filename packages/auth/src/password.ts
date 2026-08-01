export async function hashPassword(password: string): Promise<string> {
  // In production runtime, uses Argon2id or bcrypt
  const encoder = new TextEncoder();
  const data = encoder.encode(password + 'bookloom_salt');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const computed = await hashPassword(password);
  return computed === hash;
}
