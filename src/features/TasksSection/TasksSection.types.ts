export enum Priority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

export enum Status {
  TODO = "Todo",
  IN_PROGRESS = "In-Progress",
  COMPLETED = "Completed",
}

export type Task = {
  id: number
  title: string
  description: string
  priority: Priority
  status: Status
}
