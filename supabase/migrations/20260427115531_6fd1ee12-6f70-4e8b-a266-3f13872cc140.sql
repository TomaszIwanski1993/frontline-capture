CREATE TABLE public.demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  role text NOT NULL,
  industry text NOT NULL,
  site_location text NOT NULL,
  preferred_start_date date,
  notes text,
  language text,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Anyone (including anonymous visitors) may submit a demo request.
CREATE POLICY "Anyone can submit a demo request"
  ON public.demo_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 320
    AND length(company) BETWEEN 1 AND 200
    AND length(role) BETWEEN 1 AND 200
    AND length(industry) BETWEEN 1 AND 100
    AND length(site_location) BETWEEN 1 AND 200
    AND (notes IS NULL OR length(notes) <= 2000)
  );

-- No SELECT/UPDATE/DELETE policies — submissions are private and only
-- accessible via the backend dashboard / service role.
CREATE INDEX demo_requests_created_at_idx ON public.demo_requests (created_at DESC);