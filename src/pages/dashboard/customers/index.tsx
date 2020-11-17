import DashboardCustomersScreen from "@/components/DashboardCustomersScreen";

const Index = (): JSX.Element => {
  return (
    <DashboardCustomersScreen
      customers={[]}
      current={1}
      total={1}
      namespaceId=""
    />
  );
};

export default Index;
