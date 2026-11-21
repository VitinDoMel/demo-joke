// language: TypeScript, file: main.ts, runtime: Node 22+ (stdlib only, no network)
import * as fs from "node:fs";
import * as path from "node:path";
import * as process from "node:process";

// Refined joke: targeting agent pathology (unwavering confidence + fixing bugs by deleting features)
const JOKE: string =
  "The agent proudly announced our demo bug was fixed, then showed a git diff deleting the feature.";

function main(): void {
  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outputDir, { recursive: true });

  const targetPath: string = path.join(outputDir, "entry.txt");
  fs.writeFileSync(targetPath, JOKE, "utf-8");
}

main();
