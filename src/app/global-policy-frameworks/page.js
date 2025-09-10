import Ethics from "./_components/Ethics";
import GlobalPolicy from "./_components/GlobalPolicy";


export const metadata = {
  title: "Global Compliance Frameworks",
  description: "Carlo maps policies to GDPR, EU AI Act, HIPAA, ISO, and more. Automate reporting and ensure continuous AI compliance worldwide.",
  keywords: "GDPR, EU AI Act, HIPAA, ISO, AI governance frameworks",
};

export default function page() {
  return <div className="mt-50 overflow-y-hidden px-10 max-sm:px-5">
    <GlobalPolicy />
    {/* <Ethics /> */}
  </div>;
}
