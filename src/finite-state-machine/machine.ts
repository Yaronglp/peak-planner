import { Transitions } from "./types"

export class Machine {
  #state: string
  #transitions: Transitions

  constructor(initialState: string, transitions: Transitions) {
    this.#transitions = transitions
    this.#setState(initialState)
  }

  #setState(state: string) {
    const currentTransition = this.#transitions[state]

    if (!currentTransition) {
      throw new Error("Transition or State does not exists")
    }

    this.#state = state
  }

  transition(event: string) {
    const currentTransitionEvent = this.#transitions[this.#state][event]

    if (!currentTransitionEvent) {
      throw new Error("Event does not exists")
    }

    const targetState = currentTransitionEvent.target

    if (!targetState) {
      return
    }

    this.#setState(targetState)
  }

  getState(): string {
    return this.#state
  }
}
