#!/usr/bin/env node
import { copyFileSync, mkdirSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SKILL_SRC = join(ROOT, "ai-professor");
const HOME = process.env.HOME || process.env.USERPROFILE || "";

function copyDir(src, dest) {
  if (!existsSync(src)) return false;
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const s = join(src, entry.name);
    const d = join(dest, entry.name);
    entry.isDirectory() ? copyDir(s, d) : copyFileSync(s, d);
  }
  return true;
}

function detectOpenCode() {
  try { execSync("opencode --version", { stdio: "ignore", timeout: 3000 }); return true; }
  catch { return false; }
}

console.log("");
console.log("  [ai-professor] Installing...");
console.log("");

let installed = false;

if (detectOpenCode()) {
  const dest = join(HOME, ".agents", "skills", "ai-professor");
  copyDir(SKILL_SRC, dest);
  mkdirSync(join(HOME, ".opencode", "learning"), { recursive: true });
  console.log("  ✓ opencode: " + dest);
  installed = true;
}

if (process.argv.includes("--cursor")) {
  const dest = join(HOME, ".cursor", "skills", "ai-professor");
  copyDir(SKILL_SRC, dest);
  console.log("  ✓ Cursor: " + dest);
  installed = true;
}

if (!installed) {
  console.log("  No target agent detected.");
  console.log("  Use: node scripts/install.js --cursor");
  console.log("  Or copy ai-professor/ manually.");
}

console.log("");
console.log("  Restart your agent to use ai-professor.");
console.log('  Type "Quiero aprender [tema]" to start.');
console.log("");
