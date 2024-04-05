import { JSONObject, Transitions } from "./types"
import { isEmptyObject } from "./utils"

export class Machine<S, TransitionsType extends Transitions<S>> {
  #state: keyof S
  #transitions: TransitionsType

  constructor(initialState: keyof S, transitions: TransitionsType) {
    this.#state = initialState
    this.#transitions = transitions
  }

  changeState(newState: keyof S): void {
    if (isEmptyObject(this.#transitions)) {
      return
    }

    // We are assuming the feature allows to assign new state only if the state exists on the transitions
    if (this.#transitions[newState]) {
      this.#state = newState
    }
  }

  dispatch(actionName: keyof TransitionsType[keyof S], payload: JSONObject): void {
    const transitionActions = this.#transitions[this.getState()]
    const stateInStr = this.getState().toString()

    if (isEmptyObject(transitionActions as unknown as JSONObject)) {
      console.warn(`No actions defined for '${stateInStr}'-state`)
      return
    }

    const actionFN = transitionActions![actionName]

    if (typeof actionFN === "function") {
      actionFN(payload)
    } else {
      console.warn(`Action '${actionName.toString()}' was not found in '${stateInStr}'-state`)
      return
    }
  }

  getState(): keyof S {
    return this.#state
  }
}
