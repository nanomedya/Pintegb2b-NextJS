import crypto from "crypto";
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateCsrfToken() {
  return crypto.randomBytes(32).toString("hex"); 
}
