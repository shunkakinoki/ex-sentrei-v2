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
    name: faker.name.findName(),
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

// Inspired by: https://github.com/Marak/faker.js/blob/4bd0935460ab62b72593b42471699d2044c7a53a/lib/markdown.js
export const createMdHeader = (num = 3): string => {
  const head = new Array(num).join("#");
  return [head, faker.lorem.word()].join(" ");
};

export const createMdEmphasis = (num = 3): string => {
  const types = ["_", "~", "*", "**"];
  const sentence = faker.lorem.sentence(num);
  const type = types[Math.floor(Math.random() * types.length + 1)];
  return type + sentence + type;
};

export const createMdTable = (num = 3): string => {
  const table = [
    "| header1 | header2 | header3 |",
    "|:-----:|:-----:|:-----:|",
  ];
  for (let i = 0; num > i; i += 1) {
    const line = ["|", faker.lorem.words(num).split(" ").join("|"), "|"].join(
      "",
    );
    table.push(line);
  }
  return table.join("\n");
};

export const createMdList = (num = 3): string => {
  const sentences = new Array(num).fill(undefined).map(() => {
    return faker.lorem.sentence();
  });
  let list: string[] | undefined;
  if (Math.random() > 0.5) {
    sentences.forEach(sentence => {
      list?.push(`* ${sentence}`);
    });
  } else {
    sentences.forEach((sentence, index) => {
      list?.push([index + 1, ". ", sentence].join(""));
    });
  }
  return list?.join("\n") || "";
};

export const createMdBlock = (num = 3): string => {
  if (Math.random() > 0.5) {
    return ["`", faker.lorem.lines(num), "`"].join();
  }
  return ["```javascript", faker.lorem.lines(num), "```"].join();
};

export const createMarkdown = (num = 3): string => {
  let blocks: string[] | undefined;
  for (let i = 0; num > i; i += 1) {
    const flag = Math.floor(Math.random() * 6);
    switch (flag) {
      case 0:
        blocks?.push(faker.lorem.paragraphs(Math.floor(Math.random() * 3)));
        break;
      case 1:
        blocks?.push(createMdEmphasis(Math.floor(Math.random() * 3)));
        break;
      case 2:
        blocks?.push(createMdHeader(Math.floor(Math.random() * 3)));
        break;
      case 3:
        blocks?.push(createMdTable(Math.floor(Math.random() * 3)));
        break;
      case 4:
        blocks?.push(createMdList(Math.floor(Math.random() * 3)));
        break;
      case 5:
        blocks?.push(createMdBlock(Math.floor(Math.random() * 3)));
        break;
      default: {
        blocks?.push(faker.lorem.paragraph());
      }
    }
  }
  return blocks?.join("\n") || faker.lorem.paragraph();
};
