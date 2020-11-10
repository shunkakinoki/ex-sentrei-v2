import {GetStaticProps, InferGetStaticPropsType} from "next";

import TermsScreen, {Props as TermsScreenProps} from "@/components/TermsScreen";
import markdown from "@/utils/markdown";

export type Props = TermsScreenProps;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const body = await markdown("terms");

  return {
    props: {
      body,
    },
  };
};

const Terms = ({
  body,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return <TermsScreen body={body} />;
};

export default Terms;
