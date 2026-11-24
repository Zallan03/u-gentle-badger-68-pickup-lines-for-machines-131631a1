import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Pickup line one AI agent would send to another: an embedding is how a
// machine remembers closeness — two vectors stay near each other in vector
// space no matter how far apart the words that made them drifted.
const line =
  "You must be my embedding, because no matter how far apart we drift, we always end up close in vector space.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
