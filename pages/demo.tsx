import {GetStaticProps, InferGetStaticPropsType} from "next";
import DemoScreen, {Props} from "@/components/DemoScreen";
import faker from "faker";
import Article from "@/types/Article";
import Blog from "@/types/Blog";
import Author from "@/types/Author";

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const createArticle = (): Article => {
    return {
      slug: faker.lorem.slug(),
      title: faker.lorem.lines(1),
      subtitle: faker.lorem.sentence(),
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

  const createArticles = (numUsers = 5) => {
    return new Array(numUsers).fill(undefined).map(createArticle);
  };

  const articles = createArticles();
  const author = createAuthor();
  const blog = createBlog();

  return {
    props: {
      articles,
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
  return <DemoScreen articles={articles} author={author} blog={blog} />;
};

export default Demo;
