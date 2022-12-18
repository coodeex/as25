import { redLog } from "./util/colorLog";

export const error = (message: string, log?: string|undefined) => {
  redLog(`${message} ${log && log}`);
  throw new Error(message);
};

const a = { joo:"joo" };

export const errors = {
  noMessage: "no message"
};