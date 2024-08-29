import messages from "../locale/en.json";

export const t = (key: string): string => {
  return (messages as Record<string, string>)[key] || key;
};
