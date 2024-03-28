import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongByUserId = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  // prettier-ignore
  const {
    data:sessionData,
    error:sessionError
  } = await supabase.auth.getSession()

  if (sessionError) {
    console.log(sessionError.message);
    return [];
  }

  // prettier-ignore
  const {data, error} = await supabase
    .from("songs")
    .select("*")
    .eq("user_id" , sessionData.session?.user.id)
    .order("created_at", { ascending:false })

  if (error) {
    console.log(error);
  }

  return (data as any) || [];
};

export default getSongByUserId;
