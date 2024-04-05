import { JSONObject } from "./types"

class Machine<S, Transitions> {
  #state: S
  #transitions: Transitions

  constructor(initialState: S, transitions: Transitions) {
    this.#state = initialState
    this.#transitions = transitions
  }

  #changeState(newState: S): void {
    this.#state = newState
  }

  dispatch(actionName: string, payload: JSONObject) {
    //const action = this.#transitions['checl']
    // if (action) {
    //   action.call(this,...payload)
    // }
  }

  getState(): S {
    return this.#state
  }
}
