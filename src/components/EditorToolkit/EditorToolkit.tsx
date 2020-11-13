import dynamic from "next/dynamic";
import Modal from "react-modal";

import {Props as EditorToolkitSectionProps} from "@/components/EditorToolkitSection";
import useEditor from "@/hooks/useEditor";

const EditorToolkitDelete = dynamic(
  () => import("@/components/EditorToolkitDelete"),
  {
    ssr: false,
  },
);

const EditorToolkitSection = dynamic(
  () => import("@/components/EditorToolkitSection"),
  {
    ssr: false,
  },
);

export type Props = EditorToolkitSectionProps;

export default function EditorToolkit({image, pricing}: Props): JSX.Element {
  const {editorDelete, editorToolkit} = useEditor();

  const customStyles = {
    content: {
      bottom: "auto",
      left: "50%",
      marginRight: "-50%",
      right: "auto",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={editorToolkit}
      className="absolute bottom-auto right-auto overflow-auto transform bg-white rounded shadow-lg left-1/2"
      ariaHideApp={false}
      style={customStyles}
    >
      <div className="flex items-end justify-center text-center sm:block sm:p-0">
        <div
          className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        />
        {!editorDelete ? (
          <EditorToolkitSection image={image} pricing={pricing} />
        ) : (
          <EditorToolkitDelete />
        )}
      </div>
    </Modal>
  );
}
