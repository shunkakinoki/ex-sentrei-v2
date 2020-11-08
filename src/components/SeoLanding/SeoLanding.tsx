import {NextSeo} from "next-seo";

export interface Props {
  title: string;
}

export default function SeoLanding({title}: Props): JSX.Element {
  return (
    <NextSeo
      noindex={false}
      nofollow={false}
      title={title}
      titleTemplate="%s"
    />
  );
}
