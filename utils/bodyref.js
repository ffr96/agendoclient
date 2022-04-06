import { url } from "./url";

export function bodyref(dni,name) {
  return(`<a href=${url}/p/${dni}> ${name} </a>`);
} 