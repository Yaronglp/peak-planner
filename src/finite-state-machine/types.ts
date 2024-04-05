export type JSONObject<T = any> = {
  [key: string]: T
}

export type ActionFN<TPayload = JSONObject> = (payload: TPayload) => void

export type Transitions<S = any, T = JSONObject> = {
  [stateName in keyof S]: {
    [actionName: string]: ActionFN<T>
  }
}
