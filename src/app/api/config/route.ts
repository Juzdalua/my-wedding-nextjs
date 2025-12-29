import { createSupabaseClient } from "@/src/utils/supabase/server";
import { NextResponse } from "next/server";

export interface IConfig{
    DDAY_DATE: string;
    DDAY_TIME: string;
}

export async function GET() {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase.from("config").select("*");
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  const config = Object.fromEntries(data.map(item => [item.key, item.value])) as IConfig
  return NextResponse.json({config})
}
