/* eslint-disable @typescript-eslint/unbound-method */

import mitt from "mitt";
import {useEffect, useState} from "react";
import {useRecoilState, atom} from "recoil";

import {AlertAction, AlertEmitter} from "@/types/Alert";

const emitter = mitt();

const alert: AlertEmitter = {
  off: emitter.off,
  on: emitter.on,
  emit: emitter.emit,
};

const alertAtom = atom<AlertEmitter>({
  key: "alert",
  default: alert,
});

export default function useAlert(): {
  alert: (action: AlertAction, msg?: string | undefined) => void;
  action: AlertAction | undefined;
  message: string | undefined;
} {
  const [alertEmitter] = useRecoilState(alertAtom);

  const [action, setAction] = useState<AlertAction>();
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    const defaultMessage = (type: AlertAction): string | undefined => {
      switch (type) {
        case "dismiss":
          return undefined;
        case "error":
          return "Error";
        case "info":
          return "Loading";
        case "success":
          return "Success";
        case "warning":
          return "Warning";
        default:
          return undefined;
      }
    };

    const handler = (type: AlertAction, msg?: string): void => {
      setAction(type);
      setMessage(msg || defaultMessage(type));
    };

    alert.on("*", handler);
    return (): void => alert.off("*", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert]);

  return {alert: alertEmitter.emit, action, message};
}
