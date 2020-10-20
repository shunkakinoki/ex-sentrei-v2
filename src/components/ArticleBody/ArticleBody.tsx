import Article from "@/types/Article";
import Markdown from "./markdown.module.css";

export type Props = Pick<Article, "body">;

export default function ArticleBody({body}: Props): JSX.Element {
  return (
    <div className="mx-auto">
      <div
        className={Markdown.markdown}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: body}}
      />
    </div>
  );
}
