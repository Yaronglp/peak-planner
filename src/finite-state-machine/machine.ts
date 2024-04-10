import { Transitions } from "./types"

export class Machine {
  #state: string
  #transitions: Transitions

  constructor(initialState: string, transitions: Transitions) {
    this.#transitions = transitions
    this.#state = initialState
  }

  transition(event: string): string {
    const currentTransitionEvent = this.#transitions[this.#state][event]

    if (!currentTransitionEvent) {
      throw new Error("Event does not exists")
    }

    const targetState = currentTransitionEvent.target
    const targetTransition = this.#transitions[targetState]

    if (!targetTransition) {
      throw new Error("Transition does not exists")
    }

    this.#state = targetState

    return this.getState()
  }

  getState(): string {
    return this.#state
  }
}
