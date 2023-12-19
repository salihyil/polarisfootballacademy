import clientpage from "../app/i18n/locales/en/client-page.json";
import footer from "../app/i18n/locales/en/footer.json";
import seconclientpage from "../app/i18n/locales/en/second-client-page.json";
import secondpage from "../app/i18n/locales/en/second-page.json";
import translation from "../app/i18n/locales/en/translation.json";

const resources = {
  footer,
  "second-page": secondpage,
  translation,
  "client-page": clientpage,
  "second-client-page": seconclientpage,
} as const;

export default resources;
