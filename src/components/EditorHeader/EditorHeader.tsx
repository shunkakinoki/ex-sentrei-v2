import dynamic from "next/dynamic";
import Link from "next/link";
import {useState} from "react";
import {useResetRecoilState} from "recoil";

import EditorHeaderSwitch from "@/components/EditorHeaderSwitch";
import {Props as EditorHeaderTitleProps} from "@/components/EditorHeaderTitle";
import {editorTitleAtom, editorBodyAtom} from "@/hooks/useEditor";

const EditorHeaderButton = dynamic(
  () => import("@/components/EditorHeaderButton"),
  {
    ssr: false,
  },
);

const EditorHeaderTitle = dynamic(
  () => import("@/components/EditorHeaderTitle"),
  {
    ssr: false,
  },
);

export interface Props extends EditorHeaderTitleProps {
  namespaceId: string;
}

export default function EditorHeader({
  title,
  slug,
  namespaceId,
}: Props): JSX.Element {
  const [switchValue, setSwitchValue] = useState(false);
  const resetEditorTitle = useResetRecoilState(editorTitleAtom);
  const resetEditorBody = useResetRecoilState(editorBodyAtom);

  const handleClick = () => {
    resetEditorBody();
    resetEditorTitle();
  };

  return (
    <div className="relative z-20">
      <div className="px-4 mx-auto sm:px-6">
        <div className="flex justify-between py-6 border-b-2 border-gray-100 i item-center md:justify-start md:space-x-10">
          <Link
            href={`${namespaceId !== "" ? "/" : ""}${namespaceId}/dashboard`}
          >
            <a
              role="button"
              tabIndex={0}
              className="inline-flex items-center p-2 text-gray-500 rounded-full md:p-3 hover:bg-pink-50"
              onKeyPress={handleClick}
              onClick={handleClick}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </a>
          </Link>
          <div className="lg:w-0 lg:flex-1">
            <EditorHeaderTitle
              slug={slug}
              title={title}
              namespaceId={namespaceId}
            />
          </div>
          <EditorHeaderSwitch
            switchValue={switchValue}
            setSwitchValue={setSwitchValue}
          />
          <EditorHeaderButton switchValue={switchValue} />
        </div>
      </div>
    </div>
  );
}
