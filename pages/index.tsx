import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {useEffect} from "react";

import BlogScreen, {Props as BlogScreenProps} from "@/components/BlogScreen";
import {totalArticlePages} from "@/const/demo";
import Article from "@/types/Article";
import Blog from "@/types/Blog";
import {createArticles, createBlog} from "@/utils/faker";

export type Props = Omit<BlogScreenProps, "articles" | "blog" | "total"> & {
  articles: string;
  blog: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  res,
  req,
  // eslint-disable-next-line @typescript-eslint/require-await
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1, stale-while-revalidate=59",
  );

  if (
    req.headers.host === "localhost:3000" ||
    req.headers.host === "sentrei.com"
  ) {
    return {
      unstable_redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  const articles = createArticles();
  const blog = createBlog();

  if (req.headers.host === "demo.sentrei.com") {
    return {
      props: {
        articles: JSON.stringify(articles),
        blog: JSON.stringify(blog),
        current: 1,
        namespace: req.headers.host,
      },
    };
  }

  return {
    unstable_notFound: true,
  };
};

const Index = ({
  articles,
  blog,
  current,
  namespace,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`host: ${namespace ?? ""}`);
  });

  return (
    <BlogScreen
      articles={JSON.parse(articles) as Article[]}
      blog={JSON.parse(blog) as Blog}
      current={current}
      total={totalArticlePages}
      namespace={namespace}
    />
  );
};

export default Index;
