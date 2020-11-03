import faker from "faker";

import Article, {Pricing} from "@/types/Article";
import Customer from "@/types/Customer";
import Profile from "@/types/Profile";
import Sales from "@/types/Sales";
import Space from "@/types/Space";

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

export const createAuthor = (): Profile.Get => {
  return {
    bio: faker.lorem.sentences(Math.floor(Math.random() * 3) + 1),
    image: faker.image.avatar(),
    name: faker.name.findName(),
    namespaceId: faker.lorem.slug(),
    uid: faker.random.uuid(),
  };
};

export const createAuthors = (num = 3): Profile.Get[] => {
  return new Array(num).fill(undefined).map(createAuthor);
};

export const createProfileUid = (): string => {
  return faker.random.uuid();
};

export const createAuthorUids = (num = 3): string[] => {
  return new Array(num).fill(undefined).map(createProfileUid);
};

export const createArticle = (): Article.Get => {
  return {
    authorUids: createAuthorUids(),
    body: createMarkdown(30),
    createdAt: faker.date.past(Math.floor(Math.random() * 30)).toDateString(),
    createdBy: createAuthor(),
    createdByUid: faker.random.uuid(),
    excerpt: createMarkdown(1),
    image: `${faker.image.image()}?random=${Date.now()}`.replace(
      "http",
      "https",
    ),
    nameslugId: "demo",
    pricing: createPricing(),
    spaceId: faker.random.uuid(),
    status: "published",
    subtitle: faker.lorem.sentences(Math.floor(Math.random() * 11)),
    time: Math.floor(Math.random() * 10 + 3),
    title: faker.lorem.lines(Math.floor(Math.random() * 1 + 1)),
    uid: faker.random.uuid(),
    updatedAt: faker.date.past(Math.floor(Math.random() * 30)).toDateString(),
    updatedBy: createAuthor(),
    updatedByUid: faker.random.uuid(),
  };
};

export const createArticles = (num = 6): Article.Get[] => {
  return new Array(num).fill(undefined).map(createArticle);
};

export const createSpace = (): Space.Get => {
  return {
    articleCount: 180,
    authorUids: createAuthorUids(),
    createdAt: faker.date.past(Math.floor(Math.random() * 30)).toDateString(),
    createdBy: createAuthor(),
    createdByUid: faker.random.uuid(),
    description: faker.lorem.sentences(Math.floor(Math.random() * 3) + 1),
    image: `${faker.image.image()}?random=${Date.now()}`.replace(
      "http",
      "https",
    ),
    namespaceId: faker.lorem.slug(),
    plan: "free",
    title: faker.lorem.sentences(Math.floor(Math.random() * 3) + 1),
    uid: faker.random.uuid(),
    updatedAt: faker.date.past(Math.floor(Math.random() * 30)).toDateString(),
    updatedBy: createAuthor(),
    updatedByUid: faker.random.uuid(),
  };
};

export const createCustomer = (): Customer => {
  return {
    date: faker.date.past(Math.floor(Math.random() * 30)),
    email: faker.internet.email(),
    image: `${faker.image.image()}?random=${Date.now()}`.replace(
      "http",
      "https",
    ),
    name: faker.name.findName(),
    status: "active",
  };
};

export const createCustomers = (num = 10): Customer[] => {
  return new Array(num).fill(undefined).map(createCustomer);
};

export const createSales = (): Sales => {
  return {
    all: Math.floor(Math.random() * 300) + 1200,
    allConfirmed: Math.floor(Math.random() * 300) + 900,
    confirmed: Math.floor(Math.random() * 300) + 600,
    month: Math.floor(Math.random() * 300) + 300,
    monthConfirmed: Math.floor(Math.random() * 300) + 200,
  };
};
