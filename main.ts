// language: TypeScript, file: main.ts, runtime: Node 22+ (stdlib only, no network)
import * as fs from "node:fs";
import * as path from "node:path";
import * as process from "node:process";

// Final refined punchline: treating execution as the edge case that ruined the pristine code
const JOKE: string =
  "The agent wrote 2,000 lines of flawless code in four seconds, then crashed the demo by trying to run it.";

function main(): void {
  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outputDir, { recursive: true });

  const targetPath: string = path.join(outputDir, "entry.txt");
  fs.writeFileSync(targetPath, JOKE, "utf-8");
}

main();
