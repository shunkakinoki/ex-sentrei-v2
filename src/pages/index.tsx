import {GetServerSideProps, InferGetServerSidePropsType} from "next";

import BlogScreen, {Props as BlogScreenProps} from "@/components/BlogScreen";
import {totalArticlePages} from "@/const/demo";
import Article from "@/types/Article";
import Profile from "@/types/Profile";
import Space from "@/types/Space";
import {createAuthor, createArticles, createBlog} from "@/utils/faker";

export type Props = Omit<
  BlogScreenProps,
  "author" | "articles" | "blog" | "total"
> & {
  author: string;
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
    req.headers.host?.endsWith(".vercel.app") ||
    req.headers.host === "localhost:3000" ||
    req.headers.host === "sentrei.com"
  ) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  const author = createAuthor();
  const articles = createArticles();
  const blog = createBlog();

  if (req.headers.host === "demo.sentrei.com") {
    return {
      props: {
        author: JSON.stringify(author),
        articles: JSON.stringify(articles),
        blog: JSON.stringify(blog),
        current: 1,
        namespaceId: req.headers.host.split(".")[0],
      },
    };
  }

  return {
    redirect: {
      destination: "https://sentrei.com",
      permanent: false,
    },
  };
};

const Index = ({
  author,
  articles,
  blog,
  current,
  namespaceId,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  return (
    <BlogScreen
      author={JSON.parse(author) as Profile.Get}
      articles={JSON.parse(articles) as Article.Get[]}
      blog={JSON.parse(blog) as Space.Get}
      current={current}
      total={totalArticlePages}
      namespaceId={namespaceId}
    />
  );
};

export default Index;
