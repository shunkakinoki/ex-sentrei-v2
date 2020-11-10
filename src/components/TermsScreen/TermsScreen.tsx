import LegalScreen, {Props as LegalScreenProps} from "@/components/LegalScreen";

export type Props = Pick<LegalScreenProps, "body">;

export default function TermsScreen({body}: Props): JSX.Element {
  return <LegalScreen body={body} title="Terms" />;
}
