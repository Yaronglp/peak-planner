import { Machine, Transitions } from "./finite-state-machine"

export const STATES = {
  INIT: "init",
  FETCH: "fetch",
  SUCCESS_VIEW: "success_view",
  FAILURE_VIEW: "failure_view",
  CREATE_TASK: "create_task",
  EDIT_TASK: "edit_task",
  DELETE_TASK: "delete_task",
  FAILURE_ACTION: "failure_action",
} as const

export const EVENTS = {
  SWITCH: "switch",
  RESOLVE: "resolve",
  REJECT: "reject",
  CREATE: "create",
  DELETE: "delete",
  EDIT: "edit",
} as const

const transitions: Transitions = {
  [STATES.INIT]: {
    [EVENTS.SWITCH]: {
      target: STATES.FETCH,
    },
  },
  [STATES.FETCH]: {
    [EVENTS.RESOLVE]: {
      target: STATES.SUCCESS_VIEW,
    },
    [EVENTS.REJECT]: {
      target: STATES.FAILURE_VIEW,
    },
  },
  [STATES.SUCCESS_VIEW]: {
    [EVENTS.SWITCH]: {
      target: STATES.SUCCESS_VIEW,
    },
    [EVENTS.CREATE]: {
      target: STATES.CREATE_TASK,
    },
    [EVENTS.EDIT]: {
      target: STATES.EDIT_TASK,
    },
    [EVENTS.DELETE]: {
      target: STATES.DELETE_TASK,
    },
  },
  [STATES.FAILURE_VIEW]: {},
  [STATES.CREATE_TASK]: {
    [EVENTS.RESOLVE]: {
      target: STATES.SUCCESS_VIEW,
    },
    [EVENTS.REJECT]: {
      target: STATES.FAILURE_ACTION,
    },
  },
  [STATES.EDIT_TASK]: {
    [EVENTS.RESOLVE]: {
      target: STATES.SUCCESS_VIEW,
    },
    [EVENTS.REJECT]: {
      target: STATES.FAILURE_ACTION,
    },
  },
  [STATES.DELETE_TASK]: {
    [EVENTS.RESOLVE]: {
      target: STATES.SUCCESS_VIEW,
    },
    [EVENTS.REJECT]: {
      target: STATES.FAILURE_ACTION,
    },
  },
  [STATES.FAILURE_ACTION]: {},
}

export const FSMachine = new Machine(STATES.INIT, transitions)
