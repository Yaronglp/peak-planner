import { Machine, Transitions } from "../finite-state-machine"

export const STATES = {
  INIT: "init",
  FETCH: "fetch",
  SUCCESS_VIEW: "success_view",
  FAILURE_VIEW: "failure_view",
  TRIGGER_ACTION_TASK: "trigger_action_task",
  FAILURE_ACTION_TASK: "failure_action_task",
} as const

export const EVENTS = {
  SWITCH: "switch",
  RESOLVE: "resolve",
  REJECT: "reject",
  CREATE: "create",
  DELETE: "delete",
  EDIT: "edit",
  RETRY: "retry",
  CANCEL: "cancel",
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
      target: STATES.TRIGGER_ACTION_TASK,
    },
    [EVENTS.EDIT]: {
      target: STATES.TRIGGER_ACTION_TASK,
    },
    [EVENTS.DELETE]: {
      target: STATES.TRIGGER_ACTION_TASK,
    },
  },
  [STATES.FAILURE_VIEW]: {},
  [STATES.TRIGGER_ACTION_TASK]: {
    [EVENTS.RESOLVE]: {
      target: STATES.SUCCESS_VIEW,
    },
    [EVENTS.REJECT]: {
      target: STATES.FAILURE_ACTION_TASK,
    },
  },
  [STATES.FAILURE_ACTION_TASK]: {
    [EVENTS.RETRY]: {
      target: STATES.TRIGGER_ACTION_TASK,
    },
    [EVENTS.CANCEL]: {
      target: STATES.SUCCESS_VIEW,
    },
  },
}

export const FSMachine = new Machine(STATES.INIT, transitions)
