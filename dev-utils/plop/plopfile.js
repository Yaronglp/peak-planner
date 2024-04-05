import { toPascalCase } from "../utils/manipulation.js"

export default function (plop) {
  plop.setHelper("PascalCase", function (text) {
    return toPascalCase(text)
  }),
    plop.setGenerator("component", {
      description: "Creating a new react Component",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What is the component's name?",
        },
      ],
      actions: [
        {
          type: "add",
          path: "src/components/{{PascalCase name}}/{{PascalCase name}}.tsx",
          templateFile: "templates/components.hbs",
        },
        {
          type: "add",
          path: "src/components/{{PascalCase name}}/styles.tsx",
          templateFile: "templates/styles.hbs",
        },
        {
          type: "add",
          path: "src/components/{{PascalCase name}}/__test__/{{PascalCase name}}.spec.ts",
          templateFile: "templates/tests.hbs",
        },
      ],
    })
}
