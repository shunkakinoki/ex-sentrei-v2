import clsx from "clsx";
import {ReactNode, useEffect} from "react";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/esm/styles/prism/dracula";
import gfm from "remark-gfm";

import Excerpt from "@/styles/excerpt.module.css";
import Markdown from "@/styles/markdown.module.css";
import Article from "@/types/Article";

export interface Props extends Pick<Article, "body"> {
  excerpt?: boolean;
}

const renderers = {
  // eslint-disable-next-line react/display-name
  code: ({
    language,
    value,
  }: {
    language: string | undefined;
    value: ReactNode;
  }) => {
    return (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      <SyntaxHighlighter style={dracula} lnguage={language}>
        {value}
      </SyntaxHighlighter>
    );
  },
};

export default function ArticleBody({body, excerpt}: Props): JSX.Element {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(body);
  });

  return (
    <div
      className={clsx(
        "max-w-sm mx-auto mt-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl sm:mt-8 md:mt-12 lg:mt-24 xl:mt-32",
        excerpt &&
          `overflow-hidden relative block text-gray-900 ${Excerpt.excerpt}`,
      )}
    >
      <div className={Markdown.markdown}>
        <ReactMarkdown renderers={renderers} plugins={[gfm]}>
          {body}
        </ReactMarkdown>
      </div>
    </div>
  );
}
