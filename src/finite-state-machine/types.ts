export type JSONObject<T = any> = {
  [key: string]: T
}

export type Transitions<S = any, T = JSONObject> = {
  [key in keyof S]: JSONObject<T>
}
