import PricingTableCard from "@/components/PricingTableCard";

export default function PricingTable(): JSX.Element {
  return (
    <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
      <div className="relative space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-0 lg:gap-x-3 lg:grid lg:grid-cols-10">
        <PricingTableCard plan="free" />
        <PricingTableCard plan="pro" />
        <PricingTableCard plan="premium" />
      </div>
    </div>
  );
}
