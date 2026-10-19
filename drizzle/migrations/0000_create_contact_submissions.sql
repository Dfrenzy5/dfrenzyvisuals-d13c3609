CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  project_type TEXT NOT NULL,
  message TEXT NOT NULL,
  email_delivery_status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX contact_submissions_created_at_idx ON public.contact_submissions (created_at DESC);

GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- No public access: submissions are inserted and read only by server code (service role).
CREATE POLICY "Deny public read of contact submissions"
  ON public.contact_submissions FOR SELECT TO anon, authenticated USING (false);
CREATE POLICY "Deny public insert into contact submissions"
  ON public.contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (false);