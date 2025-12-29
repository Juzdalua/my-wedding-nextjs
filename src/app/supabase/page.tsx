import { Metadata } from "next";
import GetAllUsers from "./components/get-all-users";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SUPABASE", 
  };
}
const SupabaseTest = () => {
  return (
    <div className="flex flex-col h-full">
      <GetAllUsers />
    </div>
  );
};

export default SupabaseTest;
