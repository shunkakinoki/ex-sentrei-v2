import dynamic from "next/dynamic";

import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import SeoLanding from "@/components/SeoLanding";

const ArticleBody = dynamic(() => import("@/components/ArticleBody"), {
  // eslint-disable-next-line react/display-name
  loading: () => <div className="p-8 md:p-12 lg:p-16" />,
  ssr: false,
});

export interface Props {
  body: string;
  title: string;
}

export default function LegalScreen({body, title}: Props): JSX.Element {
  return (
    <>
      <SeoLanding title={title} />
      <HeaderRoot />
      <ArticleBody body={body} />
      <FooterRoot />
    </>
  );
}
