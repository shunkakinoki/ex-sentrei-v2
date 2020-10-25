/* eslint-disable @typescript-eslint/unbound-method */

import {useEffect} from "react";
import {useRecoilState, atom} from "recoil";

import {AlertAction, AlertEmitter} from "@/types/Alert";
import alert from "@/utils/alert";

const alertEmitter = atom<AlertEmitter>({key: "alert", default: alert});

const alertAction = atom<AlertAction>({
  key: "alertMessage",
  default: "dismiss",
});

const alertMessage = atom<string | undefined>({
  key: "alert",
  default: "",
});

export default function useAlert(): {
  alert: (action: AlertAction, msg?: string | undefined) => void;
  action: AlertAction;
  message: string | undefined;
} {
  const [emitter] = useRecoilState(alertEmitter);
  const [action, setAction] = useRecoilState(alertAction);
  const [message, setMessage] = useRecoilState(alertMessage);

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
  }, [setAction, setMessage]);

  return {alert: emitter.emit, action, message};
}
