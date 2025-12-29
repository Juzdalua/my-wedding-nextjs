import { createClient } from "@supabase/supabase-js";

export function createSupabaseClient() {
  const supabaseUrl = process.env.SUPABASE_API_URL!;
  const supabaseKey = process.env.SUPABASE_API_KEY!;

  return createClient(supabaseUrl, supabaseKey);
}
