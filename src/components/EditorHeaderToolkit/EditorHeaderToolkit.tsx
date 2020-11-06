import {useSetRecoilState} from "recoil";

import useEditor, {editorToolkitAtom} from "@/hooks/useEditor";

export default function EditorHeaderToolkit(): JSX.Element {
  const {editorToolkit} = useEditor();

  const setEditorToolkit = useSetRecoilState(editorToolkitAtom);

  const handleClick = () => {
    setEditorToolkit(!editorToolkit);
  };

  return (
    <button
      type="button"
      className="inline-flex items-center p-1 text-gray-500 rounded-full md:p-3 hover:bg-pink-50"
      onClick={handleClick}
    >
      <svg
        className="w-6 h-6 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    </button>
  );
}
