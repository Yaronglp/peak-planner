import { Machine } from "../machine"

describe("Machine", () => {
  it("should initialize with correct state", () => {
    // Arrange
    const initialState = "ready"

    // Act
    const machine = new Machine(initialState, {})

    // Assert
    expect(machine.getState()).toBe(initialState)
  })
})
