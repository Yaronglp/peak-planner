import { JSONObject } from "./types"

/**
 * Check if the given object is empty
 * @param obj
 * @returns
 */
export const isEmptyObject = (obj: JSONObject) => {
  if (typeof obj !== "object" || obj === null || obj === undefined) {
    return false
  }

  return Object.keys(obj).length === 0
}
