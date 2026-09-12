#!/usr/bin/env node
// Loads .env.local into process.env (if present) before running the given
// command. Needed locally because @tinacms/cli, unlike `next dev`/`next build`,
// doesn't read .env.local on its own. On Vercel .env.local doesn't exist —
// the platform injects the same variables directly, so this is a no-op there.
import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const envFile = '.env.local';
if (existsSync(envFile)) {
  for (const line of readFileSync(envFile, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

const [, , ...cmdParts] = process.argv;
const cmd = cmdParts.map((part) => (part.includes(' ') ? `"${part}"` : part)).join(' ');
const result = spawnSync(cmd, { stdio: 'inherit', shell: true, env: process.env });
process.exit(result.status ?? 1);
