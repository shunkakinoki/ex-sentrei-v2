import {NextSeo} from "next-seo";

export interface Props {
  description: string;
  title: string;
}

export default function SeoArticle({title, description}: Props): JSX.Element {
  return (
    <NextSeo
      noindex={false}
      nofollow={false}
      description={description}
      title={title}
      titleTemplate="%s"
    />
  );
}
