import { defineCommand, runMain as _runMain } from "citty";
import { consola } from "consola";
import { downloadTemplate } from "giget";

const command = defineCommand({
  args: {
    name: {
      type: "string",
      alias: "n",
    },
  },
  run: async (context) => {
    const name =
      context.args.name == null
        ? await consola.prompt("What's your name?", { type: "text" })
        : context.args.name;

    console.log("\n");

    const msg = `Hello, ${name}`;
    consola.info(msg);
    consola.success(msg);
    consola.fail(msg);
    consola.start(msg);
    consola.warn(msg);
    consola.error(msg);
    consola.silent(msg);

    const templateName = await consola.prompt("Which template do you use?", {
      type: "select",
      options: ["vite-ts", "vite-js"],
    });

    const doInstall = await consola.prompt("Install dependencies?", {
      type: "confirm",
    });

    const { dir, source } = await downloadTemplate(
      `gh:drumath2237/create-babylon-app/templates/${templateName}`,
      { install: doInstall, dir: `test-temp/${name}` }
    );
    console.log(dir, source);
  },
});

export const runMain = () => _runMain(command);

