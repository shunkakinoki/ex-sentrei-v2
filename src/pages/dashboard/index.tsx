import DashboardScreen from "@/components/DashboardScreen";
import Article from "@/types/Article";

const Dashboard = (): JSX.Element => {
  return (
    <DashboardScreen
      articles={[] as Article[]}
      current={1}
      total={1}
      namespaceId=""
    />
  );
};

export default Dashboard;
