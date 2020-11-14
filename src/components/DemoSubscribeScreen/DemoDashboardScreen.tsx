import DemoBanner from "@/components/DemoBanner";
import SubscribeScreen, {
  Props as SubscribeScreenProps,
} from "@/components/SubscribeScreen";

export type Props = Pick<SubscribeScreenProps, "space">;

export default function DemoSubscribeScreen({space}: Props): JSX.Element {
  return (
    <>
      <DemoBanner />
      <SubscribeScreen space={space} spaceId="demo" namespaceId="demo" />
    </>
  );
}
