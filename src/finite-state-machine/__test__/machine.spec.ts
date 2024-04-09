import { Machine } from "../machine"
import { Transitions } from "../types"

const STATES = {
  INIT: "init",
  IDLE: "idle",
  FETCH: "fetch",
  FAILURE: "failure",
} as const

const EVENTS = {
  SWITCH: "switch",
  FAILURE: "failure",
} as const

describe("Machine", () => {
  let transitions: Transitions

  beforeAll(() => {
    transitions = {
      [STATES.INIT]: {
        [EVENTS.SWITCH]: {
          target: STATES.FETCH,
        },
        [EVENTS.FAILURE]: {
          target: STATES.FAILURE,
        },
      },
      [STATES.FETCH]: {
        [EVENTS.FAILURE]: {
          target: STATES.FAILURE,
        },
      },
      [STATES.FAILURE]: {
        [EVENTS.SWITCH]: {
          target: STATES.IDLE,
        },
      },
    }
  })

  it("Initialize machine with the correct state", () => {
    const machine = new Machine(STATES.INIT, transitions)

    expect(machine.getState()).toBe(STATES.INIT)
  })

  it("Transitions to the correct state for a valid event", () => {
    const machine = new Machine(STATES.INIT, transitions)

    machine.transition(EVENTS.FAILURE)
    expect(machine.getState()).toBe(STATES.FAILURE)
  })

  it("Throws an error for an invalid transition", () => {
    expect(() => new Machine(STATES.IDLE, transitions)).toThrow("Transition or State does not exists")
  })

  it("Throws an error for an invalid event", () => {
    const machine = new Machine(STATES.INIT, transitions)

    expect(() => {
      machine.transition("INVALID_EVENT")
    }).toThrow("Event does not exists")
  })
})
