import {GetStaticProps, InferGetStaticPropsType} from "next";

import PrivacyScreen, {
  Props as PrivacyScreenProps,
} from "@/components/PrivacyScreen";
import markdown from "@/utils/markdown";

export type Props = PrivacyScreenProps;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const body = await markdown("privacy");

  return {
    props: {
      body,
    },
  };
};

const Privacy = ({
  body,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return <PrivacyScreen body={body} />;
};

export default Privacy;
