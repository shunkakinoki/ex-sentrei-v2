import Article from "@/types/Article";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {ReactNode, useEffect} from "react";
import dracula from "react-syntax-highlighter/dist/esm/styles/prism/dracula";
import Markdown from "./markdown.module.css";

export type Props = Pick<Article, "body">;
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

export default function ArticleBody({body}: Props): JSX.Element {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(body);
  });

  return (
    <div className="mx-auto">
      <div className={Markdown.markdown}>
        <ReactMarkdown renderers={renderers} plugins={[gfm]}>
          {body}
        </ReactMarkdown>
      </div>
    </div>
  );
}
