import Article from "@/types/Article";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {ReactNode, useEffect} from "react";
import dracula from "react-syntax-highlighter/dist/esm/styles/prism/dracula";
import Markdown from "@/styles/markdown.module.css";
import Excerpt from "@/styles/excerpt.module.css";
import clsx from "clsx";

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
        "max-w-sm mx-auto mt-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl sm:mt-8 md:mt-12 lg:mt-24 xl:mt-32",
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
