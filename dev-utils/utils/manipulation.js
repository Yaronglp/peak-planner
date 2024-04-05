export function toPascalCase(str) {
  if (!str) {
    return
  }

  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join("")
}
