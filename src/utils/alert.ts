/* eslint-disable @typescript-eslint/unbound-method */

import mitt from "mitt";

import {AlertEmitter} from "@/types/Alert";

const emitter = mitt();

const alert: AlertEmitter = {
  off: emitter.off,
  on: emitter.on,
  emit: emitter.emit,
};

export default alert;
