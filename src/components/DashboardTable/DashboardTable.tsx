import dynamic from "next/dynamic";

import PaginationBase, {
  Props as PaginationBaseProps,
} from "@/components/PaginationBase";
import useArticles from "@/hooks/useArticles";
import useAuth from "@/hooks/useAuth";
import useSpace from "@/hooks/useSpace";
import Article from "@/types/Article";

const DashboardTableItem = dynamic(
  () => import("@/components/DashboardTableItem"),
  {
    ssr: false,
  },
);

export interface Props extends Omit<PaginationBaseProps, "pathname"> {
  articles: Article.Get[];
  namespaceId: string;
}

export default function DashboardTable({
  articles,
  current,
  total,
  namespaceId,
}: Props): JSX.Element {
  const {authState} = useAuth();
  const {space} = useSpace(namespaceId);
  const {articles: swrArticles} = useArticles(
    namespaceId,
    {
      end:
        space?.articleCount && space?.articleCount > 0
          ? (space?.articleCount + 1 ?? 10) - current * 10
          : 0,
      spaceId: authState?.uid ?? "",
      start: space?.articleCount
        ? (space?.articleCount + 1 ?? 10) - (current - 1) * 10
        : 10,
    },
    articles,
  );

  return (
    <>
      {swrArticles &&
        swrArticles.map((article, index) => (
          <>
            <DashboardTableItem
              key={article.uid}
              title={article.title}
              subtitle={article.subtitle}
              pricing={article.pricing}
              status={article.status}
              namespaceId={namespaceId}
              uid={article.uid}
              updatedAt={article.updatedAt}
            />
            {index !== articles.length - 1 && (
              <div className="flex my-3 border-t border-gray-300 sm:my-6 lg:my-8" />
            )}
          </>
        ))}
      {space?.articleCount && space.articleCount > 10 && (
        <PaginationBase
          current={current}
          pathname={`/dashboard${namespaceId === "" ? "" : "/"}${namespaceId}`}
          total={Math.floor(space.articleCount / 10) + 1}
        />
      )}
      {namespaceId === "demo" && total > 1 && (
        <PaginationBase
          current={current}
          pathname="/dashboard/demo"
          total={total}
        />
      )}
    </>
  );
}
