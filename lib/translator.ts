import { get } from "lodash";
import messages from "../locale/en.json";

export const t = (key: string): string => {
  return get(messages, key)
};
