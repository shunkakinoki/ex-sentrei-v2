import UpgradeTableCard from "@/components/UpgradeTableCard";

export default function UpgradeTable(): JSX.Element {
  return (
    <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
      <div className="relative space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-0 lg:gap-x-3 lg:grid lg:grid-cols-10">
        <UpgradeTableCard plan="free" />
        <UpgradeTableCard plan="pro" />
        <UpgradeTableCard plan="premium" />
      </div>
    </div>
  );
}
