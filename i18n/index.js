import en from "./en.json"
import th from "./th.json"

const language = {
  "en-US": en,
  th: th,
};

export const LanguageManager = (locale) => {
  return language[locale];
}