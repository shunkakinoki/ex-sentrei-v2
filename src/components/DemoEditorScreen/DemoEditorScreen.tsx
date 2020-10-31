import DemoBanner from "@/components/DemoBanner";
import EditorScreen, {
  Props as EditorScreenProps,
} from "@/components/EditorScreen";

export type Props = Pick<EditorScreenProps, "article">;

export default function DemoEditorScreen({article}: Props): JSX.Element {
  return (
    <>
      <DemoBanner />
      <EditorScreen article={article} namespaceId="demo" />
    </>
  );
}
