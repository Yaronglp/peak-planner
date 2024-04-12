import { render, fireEvent, screen } from "@testing-library/react"
import Button from "../Button"

describe("Button", () => {
  it("renders with the correct label and type", () => {
    render(<Button label="Click me" type={Button.Type.BUTTON} data-testid="button-click-me" />)
    const button = screen.getByTestId("button-click-me")

    expect(button).toHaveTextContent("Click me")
    expect(button).toHaveAttribute("type", "button")
  })

  it("handles click events", () => {
    const handleClick = jest.fn()

    render(<Button label="Click me" onClick={handleClick} data-testid="button-click-me" />)
    const button = screen.getByTestId("button-click-me")

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("renders as a submit button when type is submit", () => {
    render(<Button label="Submit" type={Button.Type.SUBMIT} data-testid="button-submit" />)
    const button = screen.getByTestId("button-submit")

    expect(button).toHaveAttribute("type", "submit")
  })
})
