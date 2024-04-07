export function toPascalCase(txt: string): string {
  if (typeof txt !== "string") {
    return txt
  }

  return txt
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join("")
}
