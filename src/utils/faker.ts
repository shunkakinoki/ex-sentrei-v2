import faker from "faker";

import Article, {Pricing} from "@/types/Article";
import Author from "@/types/Author";
import Blog from "@/types/Blog";

// Inspired by: https://github.com/Marak/faker.js/blob/4bd0935460ab62b72593b42471699d2044c7a53a/lib/markdown.js
export const createMdHeader = (num = 3): string => {
  const head = new Array(num).join("#");
  return `${[head, faker.lorem.sentence()].join(" ")}\n`;
};

export const createMdEmphasis = (num = 3): string => {
  const types = ["_", "~", "*", "**", ">"];
  const word = faker.lorem.sentence(num);
  const type = types[Math.floor(Math.random() * (types.length - 1))];
  if (type === ">") {
    return `${type + word}\n`;
  }
  return `${type + word + type}\n`;
};

export const createMdTable = (num = 3): string => {
  const table = [
    `| ${faker.lorem.word()} | ${faker.lorem.word()} | ${faker.lorem.word()} |`,
    "|:-----:|:-----:|:-----:|",
  ];
  for (let i = 0; num > i; i += 1) {
    const line = ["|", faker.lorem.words(num).split(" ").join("|"), "|"].join(
      "",
    );
    table.push(line);
  }
  table.push("");
  return table.join("\n");
};

export const createMdList = (num = 3): string => {
  const sentences = new Array(num).fill(undefined).map(() => {
    return faker.lorem.sentence();
  });
  const list: string[] = [];
  if (Math.random() > 0.5) {
    sentences.forEach(sentence => {
      list.push(`* ${sentence}`);
    });
  } else {
    sentences.forEach((sentence, index) => {
      list.push([index + 1, ". ", sentence].join(""));
    });
  }
  list.push("");
  return list.join("\n");
};

export const createMdBlock = (num = 3): string => {
  if (Math.random() > 0.5) {
    return ["`", faker.lorem.sentences(num), "`", ""].join("\n");
  }
  return ["```javascript", faker.lorem.paragraphs(num, "\n"), "```", ""].join(
    "\n",
  );
};

export const createMarkdown = (num = 3): string => {
  const blocks: string[] = [];
  for (let i = 0; num > i; i += 1) {
    const flag = Math.floor(Math.random() * 18);
    switch (flag) {
      case 0:
        blocks.push(createMdTable());
        break;
      case 1:
      case 2:
        blocks.push(createMdList(Math.floor(Math.random() * 3 + 3)));
        break;
      case 3:
        blocks.push(createMdBlock(Math.floor(Math.random() * 3 + 6)));
        break;
      default: {
        blocks.push(createMdHeader(Math.floor(Math.random() * 5 + 1)));
        blocks.push(createMdEmphasis(Math.floor(Math.random() * 9 + 6)));
        blocks.push(
          faker.lorem.paragraphs(Math.floor(Math.random() * 3 + 3)),
          "\n",
        );
      }
    }
  }
  return blocks.join("\n");
};

export const createPricing = (): Pricing => {
  const flag = Math.floor(Math.random() * 2);
  switch (flag) {
    case 0:
      return "subscription";
    default:
      return "free";
  }
};

export const createArticle = (): Article => {
  return {
    body: createMarkdown(30),
    excerpt: createMarkdown(1),
    date: faker.date.past(Math.floor(Math.random() * 30)),
    image: `${faker.image.image()}?random=${Date.now()}`,
    pricing: createPricing(),
    slug: faker.lorem.slug(),
    time: Math.floor(Math.random() * 10 + 3),
    title: faker.lorem.lines(Math.floor(Math.random() * 3 + 1)),
    subtitle: faker.lorem.sentences(Math.floor(Math.random() * 11)),
  };
};

export const createAuthor = (): Author => {
  return {
    image: faker.image.avatar(),
    bio: faker.lorem.sentences(Math.floor(Math.random() * 3) + 1),
    name: faker.name.findName(),
  };
};

export const createAuthors = (num = 3): Author[] => {
  return new Array(num).fill(undefined).map(createAuthor);
};

export const createBlog = (): Blog => {
  return {
    authors: createAuthors(Math.floor(Math.random() * 3) + 1),
    title: faker.lorem.sentences(Math.floor(Math.random() * 3) + 1),
    subtitle: faker.lorem.sentences(Math.floor(Math.random() * 3) + 1),
  };
};

export const createArticles = (num = 6): Article[] => {
  return new Array(num).fill(undefined).map(createArticle);
};
