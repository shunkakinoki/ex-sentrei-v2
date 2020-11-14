import clsx from "clsx";
import {useEffect} from "react";
import Editor from "rich-markdown-editor";

import Excerpt from "@/styles/excerpt.module.css";
import Markdown from "@/styles/markdown.module.css";
import Article from "@/types/Article";

export interface Props extends Pick<Article.Get, "body"> {
  excerpt?: boolean;
}

export default function ArticleBody({body, excerpt}: Props): JSX.Element {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(body);
  });

  return (
    <div
      className={clsx(
        "max-w-sm mx-auto my-3 px-1 pb-1 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl sm:mt-8 md:mt-12 lg:mt-24 xl:mt-32",
        excerpt &&
          `overflow-hidden relative block text-gray-900 ${Excerpt.excerpt}`,
      )}
    >
      <div className={Markdown.markdown}>
        <Editor
          readOnly
          defaultValue={body}
          onChange={() => {
            return null;
          }}
        />
      </div>
    </div>
  );
}
