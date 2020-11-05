import DemoBanner from "@/components/DemoBanner";
import SpaceScreen, {Props as SpaceScreenProps} from "@/components/SpaceScreen";

export type Props = Omit<SpaceScreenProps, "namespaceId">;

export default function DemoSpaceScreen({articles, space}: Props): JSX.Element {
  return (
    <>
      <DemoBanner />
      <SpaceScreen articles={articles} space={space} namespaceId="demo" />
    </>
  );
}
