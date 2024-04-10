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
      console.warn(`Event '${event}' does not exists on State '${this.#state}'`)
      return this.getState()
    }

    const targetState = currentTransitionEvent.target
    const targetTransition = this.#transitions[targetState]

    if (!targetTransition) {
      console.warn(`Transition '${targetState}' does not exists on State '${this.#state}'`)
      return this.getState()
    }

    this.#state = targetState

    return this.getState()
  }

  getState(): string {
    return this.#state
  }
}
