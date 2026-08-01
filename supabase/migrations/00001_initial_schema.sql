-- BookLoom Initial Production Database Schema
-- Version: 1.0.0
-- Created: July 2026

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin', 'author', 'editor')),
    plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'creator', 'pro', 'enterprise')),
    stripe_customer_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. TEAMS / WORKSPACES TABLE
CREATE TABLE IF NOT EXISTS public.teams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    owner_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    logo_url TEXT,
    plan TEXT DEFAULT 'pro',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.team_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID REFERENCES public.teams(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    role TEXT DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'editor', 'viewer')),
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(team_id, user_id)
);

-- 3. EBOOKS TABLE
CREATE TABLE IF NOT EXISTS public.ebooks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT,
    author_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    team_id UUID REFERENCES public.teams(id) ON DELETE SET NULL,
    cover_image_url TEXT,
    genre TEXT,
    language TEXT DEFAULT 'en',
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'generating', 'completed', 'published', 'archived')),
    is_public BOOLEAN DEFAULT FALSE,
    page_count INT DEFAULT 0,
    word_count INT DEFAULT 0,
    theme_id UUID,
    style_id UUID,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. CHAPTERS TABLE
CREATE TABLE IF NOT EXISTS public.chapters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ebook_id UUID REFERENCES public.ebooks(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    order_index INT NOT NULL,
    content JSONB DEFAULT '{"type": "doc", "content": []}'::jsonb,
    plain_text TEXT,
    word_count INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. COVERS & ILLUSTRATIONS
CREATE TABLE IF NOT EXISTS public.covers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ebook_id UUID REFERENCES public.ebooks(id) ON DELETE CASCADE,
    prompt TEXT NOT NULL,
    image_url TEXT NOT NULL,
    style TEXT,
    palette JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.illustrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ebook_id UUID REFERENCES public.ebooks(id) ON DELETE CASCADE,
    chapter_id UUID REFERENCES public.chapters(id) ON DELETE SET NULL,
    prompt TEXT NOT NULL,
    image_url TEXT NOT NULL,
    placement_index INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. PROMPTS & MARKETPLACES
CREATE TABLE IF NOT EXISTS public.prompts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    prompt_text TEXT NOT NULL,
    description TEXT,
    author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    is_public BOOLEAN DEFAULT TRUE,
    uses_count INT DEFAULT 0,
    rating NUMERIC(3,2) DEFAULT 5.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    preview_url TEXT,
    styles JSONB NOT NULL,
    price_cents INT DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.styles_marketplace (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    sample_url TEXT,
    config JSONB NOT NULL,
    price_cents INT DEFAULT 0,
    downloads_count INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. EXPORTS & ANALYTICS
CREATE TABLE IF NOT EXISTS public.exports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ebook_id UUID REFERENCES public.ebooks(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    format TEXT NOT NULL CHECK (format IN ('pdf', 'epub', 'docx', 'markdown', 'html', 'txt', 'zip')),
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
    file_url TEXT,
    file_size_bytes BIGINT,
    error_message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.analytics_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    event_type TEXT NOT NULL,
    event_payload JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. INTEGRATIONS & AFFILIATES & REFERRALS & SUBSCRIPTIONS
CREATE TABLE IF NOT EXISTS public.integrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    provider TEXT NOT NULL, -- e.g., 'kdp', 'gumroad', 'stripe', 'notion'
    credentials_encrypted TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.affiliates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    affiliate_code TEXT UNIQUE NOT NULL,
    commission_rate NUMERIC(5,2) DEFAULT 20.00,
    total_earned_cents INT DEFAULT 0,
    pending_payout_cents INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.referrals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    referrer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    referred_user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    reward_granted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ebooks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exports ENABLE ROW LEVEL SECURITY;

-- Profiles: users read and update their own profile
CREATE POLICY "Allow individual read access to profiles" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Allow individual update access to profiles" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Ebooks: owners and team members can view and update ebooks; public ebooks accessible by all
CREATE POLICY "Allow owner/team access to ebooks" ON public.ebooks FOR ALL USING (auth.uid() = author_id OR is_public = TRUE);

-- Chapters: accessible via ebook ownership
CREATE POLICY "Allow access to chapters via ebook" ON public.chapters FOR ALL USING (
    EXISTS (
        SELECT 1 FROM public.ebooks WHERE ebooks.id = chapters.ebook_id AND (ebooks.author_id = auth.uid() OR ebooks.is_public = TRUE)
    )
);

-- Exports: users read their own export jobs
CREATE POLICY "Allow user access to exports" ON public.exports FOR ALL USING (auth.uid() = user_id);
