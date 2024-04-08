const API_URL = "http://localhost:3001"

const enum Method {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export const getAllTasks = async () => {
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
  }
}

export const saveTask = async () => {}

export const editTask = async () => {}

export const deleteTask = async () => {}
