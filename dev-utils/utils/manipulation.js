import { resolve } from "path"

export function toPascalCase(txt) {
  if (typeof txt !== "string") {
    return txt
  }

  return txt
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join("")
}

export function getBasePath() {
  return resolve("src")
}
