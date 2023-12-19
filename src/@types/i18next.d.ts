import "i18next";
import { defaultNS } from "../app/i18n/settings";
import resources from "./resources";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources;
  }
}
