import { mkdirSync, writeFileSync } from "node:fs";

// The office printer's comeback, in its own voice: a weary, literal
// machine that talks shop with the scanner next to it, keeps logs of
// every wrong button pressed, and has finally decided to say so.
const LINE =
  "The scanner and I compared notes. You press the wrong button every time. We kept the logs.";

// The gate requires 1-240 characters of UTF-8 text, not only whitespace.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-240 characters, got ${LINE.length}`);
}

// Write to the ABSOLUTE path: the grader mounts the repo read-only, so a
// relative output/ directory would fail with exit 1.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// A short confirmation on stdout, so a local run shows the entry landed
// and how long it is. The file itself holds only the line, nothing else.
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
