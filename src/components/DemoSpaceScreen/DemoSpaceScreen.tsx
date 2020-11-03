import DemoBanner from "@/components/DemoBanner";
import SpaceScreen, {Props as SpaceScreenProps} from "@/components/SpaceScreen";

export type Props = Omit<SpaceScreenProps, "namespaceId">;

export default function DemoSpaceScreen({
  author,
  articles,
  space,
  current,
  total,
}: Props): JSX.Element {
  return (
    <>
      <DemoBanner />
      <SpaceScreen
        author={author}
        articles={articles}
        space={space}
        current={current}
        total={total}
        namespaceId="demo"
      />
    </>
  );
}
