export interface Transition {
  [key: string]: {
    target: string
  }
}

export interface Transitions {
  [key: string]: Transition
}
