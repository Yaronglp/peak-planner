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
  SUCCESS: "success",
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

  it("State status return from transition call", () => {
    const machine = new Machine(STATES.INIT, transitions)

    expect(machine.transition(EVENTS.SWITCH)).toBe(STATES.FETCH)
  })

  it("Log a warning about an invalid transition and return prev state", () => {
    const machine = new Machine(STATES.FAILURE, transitions)
    const warnSpy = jest.spyOn(console, "warn")
    const result = machine.transition(EVENTS.SWITCH)

    expect(warnSpy).toHaveBeenCalledWith(`Transition '${STATES.IDLE}' does not exists on State '${machine.getState()}'`)

    expect(result).toEqual(STATES.FAILURE)
  })

  it("Log a warning for an invalid event and return prev state", () => {
    const machine = new Machine(STATES.FAILURE, transitions)
    const warnSpy = jest.spyOn(console, "warn")
    const result = machine.transition("INVALID_EVENT")

    expect(warnSpy).toHaveBeenCalledWith(`Event '${"INVALID_EVENT"}' does not exists on State '${machine.getState()}'`)

    expect(result).toEqual(STATES.FAILURE)
  })
})
