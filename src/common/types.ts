export interface PPCustomAttributes {
  "data-testid"?: string
}

export interface PPAccessibility {
  "aria-label"?: string
  "aria-labelledby"?: string
  "aria-describedby"?: string
}

export type JSONObject<T = any> = {
  [key: string]: T
}
