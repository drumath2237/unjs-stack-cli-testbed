import { defineCommand, runMain as _runMain } from "citty";
import { consola } from "consola";

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
  },
});

export const runMain = () => _runMain(command);

