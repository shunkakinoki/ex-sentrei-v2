import {Transition} from "@headlessui/react";
import {useState, useEffect} from "react";

import useAlert from "@/hooks/useAlert";

export default function GlobalAlert(): JSX.Element {
  const {action} = useAlert();
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
      <div>This is global alert</div>
    </Transition>
  );
}
