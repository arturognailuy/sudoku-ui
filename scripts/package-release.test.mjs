import assert from 'node:assert/strict';
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
const root = mkdtempSync(join(tmpdir(), 'sudoku-ui-release-'));
const dist = join(root, 'dist');
const output = join(root, 'release');
mkdirSync(join(dist, 'assets'), { recursive: true });
writeFileSync(
  join(dist, 'index.html'),
  '<script src="/sudoku/assets/app.js"></script>',
);
writeFileSync(join(dist, 'assets/app.js'), 'console.log("ok")');
const run = (...args) =>
  spawnSync(process.execPath, ['scripts/package-release.mjs', ...args], {
    encoding: 'utf8',
  });
const base = [
  'create',
  '--dist',
  dist,
  '--output',
  output,
  '--repository',
  'gnailuy/sudoku-ui',
  '--workflow',
  'CI',
  '--run-id',
  '42',
  '--commit',
  'a'.repeat(40),
  '--mount',
  '/sudoku',
];
try {
  let result = run(...base);
  assert.equal(result.status, 0, result.stderr);
  const manifest = JSON.parse(readFileSync(join(output, 'manifest.json')));
  assert.equal(manifest.mount_path, '/sudoku');
  assert.equal(manifest.entry_point, 'site/index.html');
  assert.deepEqual(
    manifest.files.map((entry) => entry.path),
    ['site/assets/app.js', 'site/index.html'],
  );
  writeFileSync(join(output, 'site/assets/app.js'), 'changed');
  result = run('verify', '--output', output, '--commit', 'a'.repeat(40));
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /checksum/);
  result = run(...base.slice(0, -1), '/bad/');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /mount/);
  result = run(...base.slice(0, -5), 'b'.repeat(40), '--mount', '/sudoku');
  assert.notEqual(result.status, 0);
  console.log(JSON.stringify({ status: 'ok', tests: 4 }));
} finally {
  rmSync(root, { recursive: true, force: true });
}
