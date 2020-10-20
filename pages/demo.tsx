import {GetStaticProps, InferGetStaticPropsType} from "next";
import DemoScreen, {Props as DemoScreenProps} from "@/components/DemoScreen";
import faker from "faker";
import Article from "@/types/Article";
import Blog from "@/types/Blog";
import Author from "@/types/Author";

export type Props = Omit<DemoScreenProps, "articles"> & {
  articles: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const createArticle = (): Article => {
    return {
      date: faker.date.past(3),
      image: `${faker.image.image()}?random=${Date.now()}`,
      slug: faker.lorem.slug(),
      time: Math.floor(Math.random() * 10 + 3),
      title: faker.lorem.lines(Math.floor(Math.random() * 3 + 1)),
      subtitle: faker.lorem.sentences(Math.floor(Math.random() * 11)),
    };
  };
  const createAuthor = (): Author => {
    return {
      image: faker.image.avatar(),
      bio: faker.lorem.sentences(3),
      name: faker.name.title(),
    };
  };
  const createBlog = (): Blog => {
    return {
      title: "My awesome newsletter",
      subtitle: faker.lorem.sentence(),
    };
  };

  const createArticles = (numUsers = 6) => {
    return new Array(numUsers).fill(undefined).map(createArticle);
  };

  const articles = createArticles();
  const author = createAuthor();
  const blog = createBlog();

  return {
    props: {
      articles: JSON.stringify(articles),
      author,
      blog,
    },
  };
};

const Demo = ({
  articles,
  author,
  blog,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoScreen
      articles={JSON.parse(articles) as Article[]}
      author={author}
      blog={blog}
    />
  );
};

export default Demo;
