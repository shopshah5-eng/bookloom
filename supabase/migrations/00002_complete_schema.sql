-- BookLoom Complete Production Schema & Relational Architecture
-- Version: 2.0.0
-- Created: July 2026

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-------------------------------------------------------
-- 1. USERS & PROFILES & SETTINGS
-------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_settings (
    user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
    email_notifications BOOLEAN DEFAULT TRUE,
    auto_save BOOLEAN DEFAULT TRUE,
    editor_font_family TEXT DEFAULT 'Playfair Display',
    editor_font_size INT DEFAULT 16,
    theme_preference TEXT DEFAULT 'dark',
    byok_enabled BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-------------------------------------------------------
-- 2. WORKSPACES, TEAMS & PROJECTS
-------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID REFERENCES public.teams(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-------------------------------------------------------
-- 3. EBOOKS, CHAPTERS, OUTLINES, DRAFTS & VERSION HISTORY
-------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.outlines (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ebook_id UUID REFERENCES public.ebooks(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    summary TEXT,
    sections JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.drafts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    chapter_id UUID REFERENCES public.chapters(id) ON DELETE CASCADE,
    version_number INT NOT NULL,
    content JSONB NOT NULL,
    word_count INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.version_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ebook_id UUID REFERENCES public.ebooks(id) ON DELETE CASCADE,
    created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    commit_message TEXT NOT NULL,
    snapshot_data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-------------------------------------------------------
-- 4. AI ENGINE, CONVERSATIONS & GENERATION HISTORY
-------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.ai_providers (
    id TEXT PRIMARY KEY, -- 'openai', 'anthropic', 'gemini'
    name TEXT NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    default_model TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS public.ai_conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    ebook_id UUID REFERENCES public.ebooks(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.ai_generation_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    ebook_id UUID REFERENCES public.ebooks(id) ON DELETE SET NULL,
    provider TEXT NOT NULL,
    model TEXT NOT NULL,
    prompt_tokens INT DEFAULT 0,
    completion_tokens INT DEFAULT 0,
    credits_deducted INT DEFAULT 1,
    request_type TEXT NOT NULL, -- 'chapter', 'outline', 'cover', 'illustration'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-------------------------------------------------------
-- 5. GENERATED MEDIA & UPLOADED ASSETS
-------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.generated_covers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ebook_id UUID REFERENCES public.ebooks(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    prompt TEXT NOT NULL,
    image_url TEXT NOT NULL,
    resolution TEXT DEFAULT '3840x2160',
    aspect_ratio TEXT DEFAULT '16:9',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.generated_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ebook_id UUID REFERENCES public.ebooks(id) ON DELETE CASCADE,
    chapter_id UUID REFERENCES public.chapters(id) ON DELETE SET NULL,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    prompt TEXT NOT NULL,
    image_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.uploaded_assets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    file_name TEXT NOT NULL,
    file_path TEXT NOT NULL,
    file_size_bytes BIGINT NOT NULL,
    mime_type TEXT NOT NULL,
    public_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-------------------------------------------------------
-- 6. EXPORT JOBS
-------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.export_jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    export_id UUID REFERENCES public.exports(id) ON DELETE CASCADE,
    ebook_id UUID REFERENCES public.ebooks(id) ON DELETE CASCADE,
    format TEXT NOT NULL,
    progress_percent INT DEFAULT 0,
    status TEXT DEFAULT 'processing',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE
);

-------------------------------------------------------
-- 7. USER API KEYS
-------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_api_keys (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    key_name TEXT NOT NULL,
    key_prefix TEXT NOT NULL,
    hashed_key TEXT NOT NULL,
    last_used_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-------------------------------------------------------
-- 8. BILLING, CREDITS & SUBSCRIPTIONS
-------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    stripe_subscription_id TEXT UNIQUE,
    stripe_price_id TEXT,
    plan TEXT DEFAULT 'pro',
    status TEXT DEFAULT 'active',
    current_period_start TIMESTAMP WITH TIME ZONE,
    current_period_end TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.credit_balances (
    user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
    balance INT DEFAULT 500,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.credit_transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    amount INT NOT NULL, -- positive for purchase/topup, negative for deduction
    description TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    stripe_payment_intent_id TEXT UNIQUE,
    amount_cents INT NOT NULL,
    currency TEXT DEFAULT 'usd',
    status TEXT DEFAULT 'succeeded',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-------------------------------------------------------
-- 9. AFFILIATES & REFERRAL EARNINGS
-------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.referral_earnings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    affiliate_id UUID REFERENCES public.affiliates(id) ON DELETE CASCADE,
    referred_user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    amount_cents INT NOT NULL,
    status TEXT DEFAULT 'pending', -- 'pending', 'paid'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-------------------------------------------------------
-- 10. MARKETPLACE, PURCHASES & FAVORITES
-------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.marketplace_assets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    category TEXT NOT NULL, -- 'illustration', 'cover_preset', 'prompt_pack'
    description TEXT,
    asset_url TEXT NOT NULL,
    price_cents INT DEFAULT 0,
    author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.marketplace_purchases (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    buyer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    asset_id UUID REFERENCES public.marketplace_assets(id) ON DELETE CASCADE,
    price_paid_cents INT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.favorites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    target_type TEXT NOT NULL, -- 'ebook', 'prompt', 'theme', 'asset'
    target_id UUID NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, target_type, target_id)
);

CREATE TABLE IF NOT EXISTS public.collections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ebook_id UUID REFERENCES public.ebooks(id) ON DELETE CASCADE,
    chapter_id UUID REFERENCES public.chapters(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-------------------------------------------------------
-- 11. AUDIT & TELEMETRY LOGS
-------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.activity_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    action TEXT NOT NULL,
    details JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    admin_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    target_user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    action TEXT NOT NULL,
    ip_address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    link TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-------------------------------------------------------
-- 12. CONTENT & SUPPORT (Blog, Docs, Roadmap, Tickets)
-------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    category TEXT NOT NULL,
    author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.documentation (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    content TEXT NOT NULL,
    order_index INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS public.changelog (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    version TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    changes JSONB DEFAULT '[]'::jsonb,
    released_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.roadmap (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    status TEXT DEFAULT 'planned' CHECK (status IN ('planned', 'in_progress', 'completed')),
    target_quarter TEXT,
    votes_count INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS public.feature_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    votes_count INT DEFAULT 1,
    status TEXT DEFAULT 'under_review',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.support_tickets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
    priority TEXT DEFAULT 'normal',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-------------------------------------------------------
-- INDEXES FOR HIGH-PERFORMANCE QUERIES
-------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_ebooks_author_id ON public.ebooks(author_id);
CREATE INDEX IF NOT EXISTS idx_ebooks_team_id ON public.ebooks(team_id);
CREATE INDEX IF NOT EXISTS idx_chapters_ebook_id ON public.chapters(ebook_id);
CREATE INDEX IF NOT EXISTS idx_exports_user_id ON public.exports(user_id);
CREATE INDEX IF NOT EXISTS idx_ai_history_user_id ON public.ai_generation_history(user_id);
CREATE INDEX IF NOT EXISTS idx_activity_user_id ON public.activity_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON public.notifications(user_id);

-------------------------------------------------------
-- SQL TRIGGERS & REUSABLE FUNCTIONS
-------------------------------------------------------
-- Function to auto-update timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply timestamp triggers
DROP TRIGGER IF EXISTS trigger_set_timestamp_profiles ON public.profiles;
CREATE TRIGGER trigger_set_timestamp_profiles BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS trigger_set_timestamp_ebooks ON public.ebooks;
CREATE TRIGGER trigger_set_timestamp_ebooks BEFORE UPDATE ON public.ebooks FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ROW LEVEL SECURITY FOR ALL NEW TABLES
ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.outlines ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.drafts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.generated_covers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.uploaded_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.credit_balances ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own settings" ON public.user_settings FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users read own covers" ON public.generated_covers FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users read own assets" ON public.uploaded_assets FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users read own notifications" ON public.notifications FOR ALL USING (auth.uid() = user_id);
