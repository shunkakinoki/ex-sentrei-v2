import {Switch} from "@headlessui/react";
import clsx from "clsx";
import {useRecoilValue, useSetRecoilState} from "recoil";

import {editorSwitchAtom} from "@/hooks/useEditor";

export default function EditorHeaderSwitch(): JSX.Element {
  const editorSwitch = useRecoilValue(editorSwitchAtom);
  const setEditorSwitch = useSetRecoilState(editorSwitchAtom);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-xs mx-auto">
        <Switch.Group as="div" className="flex items-center space-x-3">
          <Switch.Label
            className={clsx(
              "text-md hidden md:block",
              !editorSwitch && "text-gray-600",
              editorSwitch && "text-gray-300",
            )}
          >
            Draft
          </Switch.Label>
          <Switch
            as="button"
            checked={editorSwitch}
            className={`${
              editorSwitch ? "bg-pink-500" : "bg-gray-200"
            } relative inline-flex flex-shrink-0 border-gray-100 h-6 m-1 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-10 focus:outline-none focus:shadow-outline shadow-md`}
            onChange={setEditorSwitch}
          >
            {({checked}) => (
              <span
                className={`${
                  checked ? "translate-x-5" : "translate-x-0"
                } inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-gray-100 rounded-full`}
              />
            )}
          </Switch>
          <Switch.Label
            className={clsx(
              "text-md hidden md:block",
              editorSwitch && "text-gray-600",
              !editorSwitch && "text-gray-300",
            )}
          >
            Publish
          </Switch.Label>
        </Switch.Group>
      </div>
    </div>
  );
}
