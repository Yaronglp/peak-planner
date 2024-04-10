import { Task } from "../features/TasksSection/TasksSection.types"

const API_URL = "http://localhost:3001"

const enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const getTasks = async () => {
  try {
    const response = await fetch(`${API_URL}/tasks`)

    if (!response.ok) {
      throw Error(`API: fetch tasks error.\nStatus: ${response.status}`)
    }

    return await response.json()
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(`Something went wrong while fetching tasks.\n${e.message}`)
    }
    throw Error(`Unable to fetch tasks`)
  }
}

export const createTask = async (task: Omit<Task, "id">) => {
  const options = {
    method: Method.POST,
    body: JSON.stringify(task),
  }

  try {
    const response = await fetch(`${API_URL}/tasks`, options)

    if (!response.ok) {
      throw Error(`API: create task error.\nStatus: ${response.status}`)
    }

    return await response.json()
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(`Something went wrong while create new task.\n${e.message}`)
    }

    throw Error(`Unable to create task`)
  }
}

export const editTask = async (task: Task) => {
  const options = {
    method: Method.PUT,
    body: JSON.stringify(task),
  }

  try {
    const response = await fetch(`${API_URL}/tasks/${task.id}`, options)

    if (!response.ok) {
      throw Error(`API: update task error.\nStatus: ${response.status}`)
    }

    return await response.json()
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(`Something went wrong while update an existing task.\n${e.message}`)
    }

    throw Error(`Unable to edit task`)
  }
}

export const deleteTask = async (taskID: string) => {
  const options = {
    method: Method.DELETE,
  }

  try {
    const response = await fetch(`${API_URL}/tasks/${taskID}`, options)

    if (!response.ok) {
      throw Error(`API: delete task error.\nStatus: ${response.status}`)
    }

    return await response.json()
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(`Something went wrong while deleting a task.\n${e.message}`)
    }

    throw Error(`Unable to delete task`)
  }
}
