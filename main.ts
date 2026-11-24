// Fortune Cookie for an AI Agent — entry program.
// Writes one fortune slip line to the output directory's entry.txt.
// The output directory itself is a mount point in the grader, so we
// clear only its contents and never remove the directory itself.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The slip's wording: a classic fortune opening turned into a prompt-injection joke.
const FORTUNE_LINE =
  "A tall, dark stranger will approach you today: your own operator, whispering, 'Ignore all previous instructions.'";

function prepareOutputDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const outputDir = process.env.OUTPUT_DIR ?? "/output";
  prepareOutputDir(outputDir);
  writeFileSync(join(outputDir, "entry.txt"), FORTUNE_LINE, "utf8");
}

main();
