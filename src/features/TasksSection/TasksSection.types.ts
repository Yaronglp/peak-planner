export enum Priority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

export type Task = {
  id: number
  title: string
  description: string
  priority: Priority
}
