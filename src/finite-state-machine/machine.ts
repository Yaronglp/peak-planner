import { JSONObject, Transitions } from "./types"

class Machine<S, TransitionsType extends Transitions<S>> {
  #state: keyof S
  #transitions: TransitionsType

  constructor(initialState: keyof S, transitions: TransitionsType) {
    this.#state = initialState
    this.#transitions = transitions
  }

  changeState(newState: keyof S): void {
    // We are assuming the feature allows to assign new state only if the state exists on the transitions
    if (this.#transitions[newState]) {
      this.#state = newState
    }
  }

  dispatch(actionName: keyof TransitionsType[keyof S], payload: JSONObject) {
    const transitionActions = this.#transitions[this.getState()]
    const actionFN = transitionActions && transitionActions[actionName]

    if (actionFN) {
      actionFN(payload)
    } else {
      //TODO: What should I do in case no action exists
    }
  }

  getState(): keyof S {
    return this.#state
  }
}
