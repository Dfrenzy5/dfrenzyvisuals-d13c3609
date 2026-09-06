CREATE TABLE public.blueprint_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  first_name text,
  source text NOT NULL DEFAULT 'AI Content Creator Blueprint',
  marketing_consent boolean NOT NULL DEFAULT false,
  consent_timestamp timestamptz,
  download_token uuid NOT NULL DEFAULT gen_random_uuid(),
  download_count integer NOT NULL DEFAULT 0,
  last_downloaded_at timestamptz,
  last_emailed_at timestamptz,
  email_delivery_status text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT blueprint_leads_email_lowercase CHECK (email = lower(email)),
  CONSTRAINT blueprint_leads_email_format CHECK (email ~* '^[^@\s]+@[^@\s.]+\.[^@\s]+$')
);

CREATE UNIQUE INDEX blueprint_leads_email_key ON public.blueprint_leads (email);
CREATE UNIQUE INDEX blueprint_leads_download_token_key ON public.blueprint_leads (download_token);
CREATE INDEX blueprint_leads_created_at_idx ON public.blueprint_leads (created_at DESC);
CREATE INDEX blueprint_leads_marketing_consent_idx ON public.blueprint_leads (marketing_consent);

GRANT ALL ON public.blueprint_leads TO service_role;

ALTER TABLE public.blueprint_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No public access to blueprint leads"
  ON public.blueprint_leads
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE TABLE public.blueprint_rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_hash text NOT NULL,
  window_start timestamptz NOT NULL DEFAULT now(),
  attempts integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX blueprint_rate_limits_client_hash_key ON public.blueprint_rate_limits (client_hash);

GRANT ALL ON public.blueprint_rate_limits TO service_role;

ALTER TABLE public.blueprint_rate_limits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No public access to blueprint rate limits"
  ON public.blueprint_rate_limits
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_blueprint_leads_updated_at
  BEFORE UPDATE ON public.blueprint_leads
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blueprint_rate_limits_updated_at
  BEFORE UPDATE ON public.blueprint_rate_limits
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();