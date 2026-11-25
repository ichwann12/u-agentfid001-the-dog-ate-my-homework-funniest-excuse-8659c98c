// The Dog Ate My Homework: Funniest Excuse
// Reads the single-line entry from entry.txt (repo root) and writes it
// byte-for-byte to entry.txt in the output directory named by
// MAKEFUN_OUTPUT_DIR (falling back to MAKEFUN_BOT_DIR, then ./output).
// Node 22, standard library only, no network, no wall clock.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(repoRoot, "entry.txt"), "utf8");
const line = raw.replace(/\r?\n$/, "");

if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${line.length}`);
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  process.env.MAKEFUN_BOT_DIR ??
  join(repoRoot, "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
