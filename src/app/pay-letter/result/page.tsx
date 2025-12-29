import { Metadata } from "next";
import PayLetterResultComponent from "./components/result";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Result", 
  };
}

const PayLetterResultPage = () => {
  return (
    <div>
      <PayLetterResultComponent />
    </div>
  );
};

export default PayLetterResultPage;
