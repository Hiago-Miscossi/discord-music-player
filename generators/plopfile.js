export default function (plop) {
  plop.setGenerator("command", {
    description: "Create a command",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your command name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/commands/{{name}}.ts",
        templateFile: "templates/command.ts.hbs",
      },
      {
        path: "../src/commands/index.ts",
        pattern: /(\/\/ COMPONENT IMPORTS)/g,
        template: 'import {{pascalCase name}}Command from "./{{name}}";\n$1',
        type: "modify",
      },
      {
        path: "../src/commands/index.ts",
        pattern: /(\/\/ COMPONENT EXPORTS)/g,
        template: "\t{{pascalCase name}}Command,\n$1",
        type: "modify",
      },
    ],
  });
}
