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
  let machine: Machine

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

  it("State status return from transition call", () => {
    const machine = new Machine(STATES.INIT, transitions)

    expect(machine.transition(EVENTS.SWITCH)).toBe(STATES.FETCH)
  })

  it("Throws an error for an invalid transition", () => {
    const machine = new Machine(STATES.FAILURE, transitions)

    expect(() => machine.transition(EVENTS.SWITCH)).toThrow("Transition does not exists")
  })

  it("Throws an error for an invalid event", () => {
    const machine = new Machine(STATES.INIT, transitions)

    expect(() => {
      machine.transition("INVALID_EVENT")
    }).toThrow("Event does not exists")
  })
})
