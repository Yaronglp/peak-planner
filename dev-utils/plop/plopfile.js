import { getBasePath, toPascalCase } from "../utils/manipulation.js"

const basePath = getBasePath()

export default function (plop) {
  plop.setHelper("PascalCase", function (text) {
    return toPascalCase(text)
  }),
    plop.setGenerator("component (basic)", {
      description: "Creating a new react basic Component. example: Button",
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
          path: `${basePath}/common/components/{{PascalCase name}}/{{PascalCase name}}.tsx`,
          templateFile: "templates/components.hbs",
        },
        {
          type: "add",
          path: `${basePath}/common/components/{{PascalCase name}}/styles.tsx`,
          templateFile: "templates/styles.hbs",
        },
        {
          type: "add",
          path: `${basePath}/common/components/{{PascalCase name}}/__test__/{{PascalCase name}}.spec.ts`,
          templateFile: "templates/tests.hbs",
        },
      ],
    }),
    plop.setGenerator("component (feature)", {
      description: "Creating a new react feature Component. example: Profile",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What is the feature's name?",
        },
      ],
      actions: [
        {
          type: "add",
          path: `${basePath}/features/{{PascalCase name}}/{{PascalCase name}}.tsx`,
          templateFile: "templates/components.hbs",
        },
        {
          type: "add",
          path: `${basePath}/features/{{PascalCase name}}/styles.tsx`,
          templateFile: "templates/styles.hbs",
        },
        {
          type: "add",
          path: `${basePath}/features/{{PascalCase name}}/__test__/{{PascalCase name}}.spec.ts`,
          templateFile: "templates/tests.hbs",
        },
      ],
    })
}
