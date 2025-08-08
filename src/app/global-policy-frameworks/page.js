import Ethics from "./_components/Ethics";
import GlobalPolicy from "./_components/GlobalPolicy";

export default function page() {
  return <div className="mt-50 overflow-y-hidden px-10">
    <GlobalPolicy />
    <Ethics />
  </div>;
}
