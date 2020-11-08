import {NextSeo} from "next-seo";

export interface Props {
  title: string;
}

export default function SeoApp({title}: Props): JSX.Element {
  return <NextSeo nofollow noindex title={title} titleTemplate="%s" />;
}
