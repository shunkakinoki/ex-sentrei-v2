export type AlertAction = "error" | "info" | "success" | "warning" | "dismiss";

export type Handler = (event?: string) => void;
export type WildcardHandler = (type: AlertAction, event?: string) => void;

export interface AlertEmitter {
  on(action: AlertAction, handler: Handler): void;
  on(action: "*", handler: WildcardHandler): void;

  off(action: AlertAction, handler: Handler): void;
  off(action: "*", handler: WildcardHandler): void;

  emit(action: AlertAction, msg?: string): void;
}
