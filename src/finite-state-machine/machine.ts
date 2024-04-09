import { Transitions } from "./types"

export class Machine {
  #state: string
  #transitions: Transitions

  constructor(initialState: string, transitions: Transitions) {
    this.#state = initialState
    this.#transitions = transitions
  }

  transition(event: string) {
    const currentTransition = this.#transitions[event]

    if (!currentTransition) {
      throw new Error("Event doe's not exists")
    }

    const targetState = currentTransition[event].target

    if (!targetState) {
      return
    }

    this.#state = targetState
  }

  getState(): string {
    return this.#state
  }
}
