import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const functionsDirectory = ".vercel/output/functions";
const targetRuntime = "nodejs26.x";

if (!existsSync(functionsDirectory)) {
  console.log("No Vercel functions directory found; skipping runtime patch.");
  process.exit(0);
}

const patchFunctionConfigs = (directoryPath) => {
  for (const directoryEntry of readdirSync(directoryPath, { withFileTypes: true })) {
    const entryPath = join(directoryPath, directoryEntry.name);

    if (!directoryEntry.isDirectory()) {
      continue;
    }

    if (directoryEntry.name.endsWith(".func")) {
      const configPath = join(entryPath, ".vc-config.json");
      if (!existsSync(configPath)) {
        continue;
      }

      const config = JSON.parse(readFileSync(configPath, "utf8"));
      if (config.runtime === targetRuntime) {
        continue;
      }

      const previousRuntime = config.runtime;
      config.runtime = targetRuntime;
      writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
      console.log(`Patched ${configPath}: ${previousRuntime} -> ${targetRuntime}`);
      continue;
    }

    patchFunctionConfigs(entryPath);
  }
};

patchFunctionConfigs(functionsDirectory);
