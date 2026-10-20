// Compile Tailwind (src/styles.css) et l'injecte dans index.html,
// entre les marqueurs /*tw:start*/ et /*tw:end*/ — le site reste un fichier unique.
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = join(root, 'index.html');
const tmp = mkdtempSync(join(tmpdir(), 'gm95-'));
const out = join(tmp, 'out.css');

try {
  execFileSync(
    process.execPath,
    [
      join(root, 'node_modules', 'tailwindcss', 'lib', 'cli.js'),
      '-c', join(root, 'tailwind.config.js'),
      '-i', join(root, 'src', 'styles.css'),
      '-o', out,
      '--minify',
    ],
    { stdio: 'inherit', cwd: root }
  );

  const css = readFileSync(out, 'utf8').trim();
  const html = readFileSync(htmlPath, 'utf8');
  const marker = /\/\*tw:start\*\/[\s\S]*?\/\*tw:end\*\//;
  if (!marker.test(html)) throw new Error('Marqueurs /*tw:start*/ … /*tw:end*/ introuvables dans index.html');

  writeFileSync(htmlPath, html.replace(marker, () => `/*tw:start*/${css}/*tw:end*/`));
  console.log(`CSS injecté dans index.html (${(css.length / 1024).toFixed(1)} Ko)`);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
