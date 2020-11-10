import LegalScreen, {Props as LegalScreenProps} from "@/components/LegalScreen";

export type Props = Pick<LegalScreenProps, "body">;

export default function PrivacyScreen({body}: Props): JSX.Element {
  return <LegalScreen body={body} title="Privacy" />;
}
