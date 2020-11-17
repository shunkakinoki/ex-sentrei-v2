import dynamic from "next/dynamic";
import {useState, useEffect} from "react";
import {toast} from "react-toastify";
import {useSetRecoilState} from "recoil";

import db from "@/firebase/db";
import {storySwitchAtom} from "@/hooks/useStory";
import {getArticlesSnapshot} from "@/services/Article";
import Article from "@/types/Article";
import {createArticles} from "@/utils/faker";

export interface Props {
  articleCount: number;
  articles: Article.Get[];
  namespaceId: string;
  spaceId: string;
}

const SpaceStoryCard = dynamic(() => import("@/components/SpaceStoryCard"), {
  ssr: false,
});

export default function SpaceStoryGrid({
  articles: initialArticles,
  articleCount,
  namespaceId,
  spaceId,
}: Props): JSX.Element {
  const setStorySwitch = useSetRecoilState(storySwitchAtom);

  const [articles, setArticles] = useState<Article.Get[]>(initialArticles);
  const [isPageBottom, setIsPageBottom] = useState(false);
  const [lastPath] = useState<string | null>(() => {
    if (articles && articles.length > 0) {
      return `articles/${articles[articles.length - 1].id}`;
    }
    return null;
  });

  const [lastItem, setLastItem] = useState<
    firebase.default.firestore.DocumentSnapshot
  >();
  const [loading, setLoading] = useState<boolean>(false);

  const shouldLoadMore = articles.length > 0 && articles.length % 6 === 0;

  useEffect(() => {
    if (articleCount < 3) {
      setStorySwitch(false);
    }
  }, [articleCount, setStorySwitch]);

  useEffect(() => {
    function handleScroll() {
      const isWindowBottom =
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight;
      setIsPageBottom(isWindowBottom);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (lastPath) {
      // eslint-disable-next-line no-void
      void db.doc(lastPath).get().then(setLastItem);
    }
  }, [lastPath]);

  useEffect(() => {
    if (isPageBottom && !loading) {
      setLoading(true);

      if (namespaceId === "demo") {
        const newArticles = createArticles();
        setArticles([...articles, ...newArticles]);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
        return;
      }

      if (!lastItem) {
        setLoading(false);
        return;
      }

      if (!shouldLoadMore) {
        setLoading(false);
        return;
      }

      if (spaceId && lastItem) {
        // eslint-disable-next-line no-void
        void getArticlesSnapshot({
          limit: 6,
          spaceId,
          startAfter: lastItem,
          status: "published",
        })
          .then(res => {
            const last = res[res.length - 1];
            setArticles([...articles, ...res]);
            setLastItem(last.snap);
          })
          .catch(err => {
            toast.error(err);
          });
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    }
  }, [
    isPageBottom,
    loading,
    articles,
    lastItem,
    shouldLoadMore,
    namespaceId,
    spaceId,
  ]);

  return (
    <section className="container mx-auto mt-8 mb-16 section sm:mt-16 md:mb-12 lg:mb-20">
      <div className="flex flex-wrap mb-8 -mx-2">
        {articles &&
          articles.map((article, index) => {
            return (
              <SpaceStoryCard
                key={article.id}
                updatedAt={article.updatedAt}
                image={article.image}
                pricing={article.pricing}
                time={article.time}
                title={article.title}
                subtitle={article.subtitle}
                status={article.status}
                namespaceId={namespaceId}
                id={article.id}
                variant={
                  index % 4 === 0 || index % 4 === 3 ? "small" : "medium"
                }
              />
            );
          })}
      </div>
      {loading && (
        <div className="relative flex items-center justify-center h-32">
          <div className="inline-block w-5 h-5 mx-2 duration-300 bg-red-300 animate-spin ease" />
          <div className="inline-block w-5 h-5 mx-2 duration-300 bg-red-400 animate-ping ease" />
          <div className="inline-block w-5 h-5 mx-2 duration-300 bg-red-600 animate-pulse ease" />
        </div>
      )}
    </section>
  );
}
