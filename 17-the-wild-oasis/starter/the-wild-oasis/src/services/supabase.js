import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://txjiqnknirfizgwtulhb.supabase.co";

//settings
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4amlxbmtuaXJmaXpnd3R1bGhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3OTczMzAsImV4cCI6MjAyNTM3MzMzMH0.xcT_H46RqEDIH69dgh9Iubgi040iqkWVRuIuEuFfob0";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
