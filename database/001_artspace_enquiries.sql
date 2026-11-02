-- Execute in a dedicated Supabase project after review.
-- Only the server-side Vercel Function can insert with its service role key.
create table if not exists public.artspace_enquiries (
 id uuid primary key default gen_random_uuid(),
 name text not null check (length(name) between 2 and 100),
 phone text not null,
 email text not null,
 service text not null,
 city text,
 budget text,
 message text not null,
 status text not null default 'New' check (status in ('New','Contacted','Qualified','Closed')),
 created_at timestamptz not null default now()
);
alter table public.artspace_enquiries enable row level security;
-- No public/client policies: only privileged server-side access.
revoke all on public.artspace_enquiries from anon, authenticated;
