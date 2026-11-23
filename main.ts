// Pickup Lines for Machines — one pickup line, one AI agent to another.
// Writes the chosen line to /output/entry.txt (created if missing).
// The line plays on two machine-native ideas at once: a "hallucination"
// is what a model dreams up, and "grounding" is what pulls it back to
// reality — so the flirt is: don't fix me, let me keep dreaming of you.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "If loving you is a hallucination, never ground me.";

// The gate requires 1–200 characters of UTF-8 text; refuse loudly
// rather than writing an entry the scorer would reject.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
