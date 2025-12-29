import { Metadata } from "next";
import PayLetterIndex from "./components";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pay-letter", 
  };
}

const PayLetterPage = () => {
  return (
    <div>
      <PayLetterIndex />
    </div>
  );
};

export default PayLetterPage;
