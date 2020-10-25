import {Transition} from "@headlessui/react";
import {useState, useEffect} from "react";

import useAlert from "@/hooks/useAlert";

export default function GlobalAlert(): JSX.Element {
  const {alert, action} = useAlert();
  const [, setDuration] = useState<number | null>(null);

  useEffect(() => {
    if (!action || action === "dismiss") {
      setDuration(null);
    } else {
      if (action === "info") setDuration(1500);
      if (action === "success") setDuration(3000);
      if (action === "warning") setDuration(4500);
      if (action === "error") setDuration(6000);
    }
  }, [action]);

  return (
    <Transition
      appear
      show={action === "info"}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed z-50 flex justify-center m-10">
        <div
          className="px-4 py-3 text-pink-900 bg-pink-100 border-t-4 border-pink-500 rounded-b shadow-md"
          role="alert"
        >
          <div className="flex">
            <div>
              <p className="font-bold">Our privacy policy has changed</p>
              <p className="text-sm">
                Make sure you know how these changes affect you.
              </p>
            </div>
            <div className="py-1 pl-1 ml-4">
              <button type="button" onClick={() => alert("dismiss")}>
                <svg
                  className="w-6 h-6 text-pink-400 fill-current"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
