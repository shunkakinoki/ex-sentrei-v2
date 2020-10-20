import Blog from "@/types/Blog";
import Author from "@/types/Author";
import faker from "faker";
import Article from "@/types/Article";

export const createArticle = (): Article => {
  return {
    date: faker.date.past(3),
    image: `${faker.image.image()}?random=${Date.now()}`,
    slug: faker.lorem.slug(),
    time: Math.floor(Math.random() * 10 + 3),
    title: faker.lorem.lines(Math.floor(Math.random() * 3 + 1)),
    subtitle: faker.lorem.sentences(Math.floor(Math.random() * 11)),
  };
};

export const createAuthor = (): Author => {
  return {
    image: faker.image.avatar(),
    bio: faker.lorem.sentences(3),
    name: faker.name.title(),
  };
};

export const createBlog = (): Blog => {
  return {
    title: "My awesome newsletter",
    subtitle: faker.lorem.sentence(),
  };
};

export const createArticles = (num = 6): Article[] => {
  return new Array(num).fill(undefined).map(createArticle);
};

export const createAuthors = (num = 3): Author[] => {
  return new Array(num).fill(undefined).map(createAuthor);
};
