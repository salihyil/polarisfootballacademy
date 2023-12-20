import clientpage from "../app/i18n/locales/en/client-page.json";
import footer from "../app/i18n/locales/en/footer.json";
import homepage from "../app/i18n/locales/en/home-page.json";
import header from "../app/i18n/locales/en/header.json";

const resources = {
  "home-page": homepage,
  "client-page": clientpage,
  header,
  footer,
} as const;

export default resources;
