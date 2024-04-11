/// <reference types="cypress" />

describe("Tasks app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
    cy.wait(3000)
  })

  it("Displays list of items", () => {
    cy.get("[data-test-id=table-tasks]").should("be.visible")
    cy.get(".ant-table-row-level-0").should("have.length", 8)
    cy.get(".ant-table-row-level-0 .ant-table-cell").first().should("have.text", "Complete Project Proposal")
  })

  it("Search for specific task by title", () => {
    cy.get("[data-test-id=search-input]").type("Review Codebase")
    cy.get("[data-test-id=table-tasks] .ant-table-row-level-0 .ant-table-cell")
      .first()
      .should("have.length", 1)
      .should("have.text", "Review Codebase")
  })

  it("Search for specific task that not exists, by description", () => {
    cy.get(".ant-select-selector").click()
    cy.get(".ant-select-dropdown").should("be.visible")
    cy.contains(".ant-select-item-option", "description").click()
    cy.get("[data-test-id=search-input]").type("Review Codebase")
    cy.wait(0)
    cy.get("[data-test-id=table-tasks] .ant-table-row-level-0 .ant-table-cell").should("not.exist")
  })

  it("Add new task", () => {
    cy.contains("Create New Task").click()
    cy.get('[data-test-id="input-title-task"]').type("New task title")
    cy.get('[data-test-id="input-description-task"]').type("New task description")
    cy.get(".ant-modal").contains("Save").click()
    cy.wait(1000)
    cy.get(".ant-pagination-item-2").click()
    cy.get(".ant-table-row-level-0").should("have.length", 1)
    cy.get(".ant-table-row-level-0 .ant-table-cell").first().should("have.text", "New task title")
  })

  it("Edit existing task", () => {
    cy.get(".ant-pagination-item-2").click()
    cy.get(".ant-table-row-level-0 .ant-table-cell").as("tableCells")
    cy.get("@tableCells").last().contains("Edit").click()
    cy.get('[data-test-id="input-title-task"]').as("inputTitle")
    cy.get("@inputTitle").clear()
    cy.get("@inputTitle").type("Edited task title")
    cy.get(".ant-modal").contains("Save").click()
    cy.wait(1000)
    cy.get("@tableCells").first().invoke("text").should("eq", "Edited task title")
  })

  it("Remove existing task", () => {
    cy.get(".ant-pagination-item-2").click()
    cy.get(".ant-table-row-level-0 .ant-table-cell").as("tableCells")
    cy.get("@tableCells").last().contains("Delete").click()
    cy.wait(1000)
    cy.get(".ant-pagination-item-2").should("not.exist")
  })
})
