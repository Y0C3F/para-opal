-- Parapharmacie Opal — Supabase schema starter
-- À exécuter dans Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.admin_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text,
  role text not null check (role in ('super_admin','admin')) default 'admin',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name jsonb not null,
  description jsonb not null,
  icon text default 'sparkles',
  active boolean not null default true,
  sort_order int not null default 100,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name jsonb not null,
  description jsonb not null,
  price numeric(10,2) not null,
  old_price numeric(10,2),
  images text[] not null default '{}',
  category_id uuid references public.categories(id) on delete set null,
  brand text default 'Opal',
  badge text check (badge in ('new','bestseller','promo','expert')),
  stock_quantity int default 0,
  show_stock boolean default false,
  active boolean default true,
  featured boolean default false,
  created_at timestamptz not null default now()
);

create table if not exists public.settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean language sql security definer set search_path = public as $$
  select exists(select 1 from public.admin_profiles where id = auth.uid() and active = true);
$$;

create or replace function public.is_super_admin()
returns boolean language sql security definer set search_path = public as $$
  select exists(select 1 from public.admin_profiles where id = auth.uid() and active = true and role = 'super_admin');
$$;

alter table public.admin_profiles enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.settings enable row level security;

create policy "public read active categories" on public.categories for select using (active = true);
create policy "public read active products" on public.products for select using (active = true);
create policy "public read settings" on public.settings for select using (key in ('pharmacy','branding','translations'));

create policy "admins manage categories" on public.categories for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage products" on public.products for all using (public.is_admin()) with check (public.is_admin());
create policy "super admins manage settings" on public.settings for all using (public.is_super_admin()) with check (public.is_super_admin());
create policy "super admins manage admins" on public.admin_profiles for all using (public.is_super_admin()) with check (public.is_super_admin());

insert into public.settings(key, value) values
('pharmacy', '{
  "name":"Parapharmacie Opal",
  "phone":"+212 600 000 000",
  "email":"contact@opal.ma",
  "whatsappNumber":"+212600000000",
  "address":{"fr":"Mohammedia, Maroc","ar":"المحمدية، المغرب","en":"Mohammedia, Morocco"},
  "mapsEmbed":"https://www.google.com/maps?q=Mohammedia%2C%20Morocco&output=embed",
  "hours":{"monday":{"closed":false,"open":"09:00","close":"20:00"},"tuesday":{"closed":false,"open":"09:00","close":"20:00"},"wednesday":{"closed":false,"open":"09:00","close":"20:00"},"thursday":{"closed":false,"open":"09:00","close":"20:00"},"friday":{"closed":false,"open":"09:00","close":"20:00"},"saturday":{"closed":false,"open":"10:00","close":"18:00"},"sunday":{"closed":true,"open":"00:00","close":"00:00"}}
}'::jsonb),
('branding', '{"logo":"","accent":"#C9A96E","favicon":""}'::jsonb)
on conflict (key) do update set value = excluded.value;
