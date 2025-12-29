import { Metadata } from "next";
import PayLetterCallbackComponent from "./components/callback";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Callback", 
  };
}

const PayLetterCallbackPage = () => {
  return (
    <div>
      <PayLetterCallbackComponent />
    </div>
  );
};

export default PayLetterCallbackPage;
