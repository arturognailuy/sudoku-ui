#!/usr/bin/env node
import { createHash } from 'node:crypto';
import {
  cpSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, posix, relative, resolve, sep } from 'node:path';
const shaPattern = /^[0-9a-f]{40}$/;
const normalizeMount = (value) => {
  const mount = (value ?? '').trim();
  if (mount === '' || mount === '/') return '';
  if (
    !mount.startsWith('/') ||
    mount.endsWith('/') ||
    mount.includes('//') ||
    mount.split('/').includes('..')
  )
    throw new Error(
      'mount must be / or an absolute normalized path without trailing slash',
    );
  return mount;
};
const hashFile = (path) =>
  createHash('sha256').update(readFileSync(path)).digest('hex');
const files = (root, dir = root) =>
  readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const path = join(dir, entry.name);
      return entry.isDirectory()
        ? files(root, path)
        : [relative(root, path).split(sep).join('/')];
    })
    .sort();
function validateIdentity(repository, workflow, runId, commit) {
  if (repository !== 'gnailuy/sudoku-ui')
    throw new Error('repository must be gnailuy/sudoku-ui');
  if (!workflow.trim() || !Number.isSafeInteger(runId) || runId <= 0)
    throw new Error('workflow and positive run id are required');
  if (!shaPattern.test(commit))
    throw new Error('commit must be a full lowercase SHA');
}
function verify(output, expectedCommit) {
  const manifest = JSON.parse(
    readFileSync(join(output, 'manifest.json'), 'utf8'),
  );
  const required = [
    'schema',
    'repository',
    'workflow',
    'run_id',
    'commit',
    'mount_path',
    'entry_point',
    'files',
  ];
  if (
    Object.keys(manifest).sort().join(',') !== required.sort().join(',') ||
    manifest.schema !== 'sudoku-frontend-release/v1'
  )
    throw new Error('manifest shape or schema is invalid');
  validateIdentity(
    manifest.repository,
    manifest.workflow,
    manifest.run_id,
    manifest.commit,
  );
  if (expectedCommit && manifest.commit !== expectedCommit.toLowerCase())
    throw new Error('manifest commit does not match expected commit');
  normalizeMount(manifest.mount_path);
  if (manifest.entry_point !== 'site/index.html')
    throw new Error('entry point is invalid');
  const actual = files(join(output, 'site')).map((path) => ({
    path: `site/${path}`,
    sha256: hashFile(join(output, 'site', path)),
  }));
  if (JSON.stringify(actual) !== JSON.stringify(manifest.files))
    throw new Error('asset inventory or checksum mismatch');
  const forbidden =
    /(GITHUB_TOKEN|WEBHOOK_SECRET|127\.0\.0\.1:\d+|https?:\/\/[^"'\s<]+)/i;
  for (const item of actual) {
    const path = join(output, item.path);
    if (
      /\.(html|js|css|json|txt|map)$/.test(path) &&
      forbidden.test(readFileSync(path, 'utf8'))
    )
      throw new Error(`forbidden deployment value in ${item.path}`);
  }
}
function create({ dist, output, repository, workflow, runId, commit, mount }) {
  validateIdentity(repository, workflow, runId, commit);
  const normalized = normalizeMount(mount);
  if (
    !statSync(dist).isDirectory() ||
    !statSync(join(dist, 'index.html')).isFile()
  )
    throw new Error('dist/index.html is required');
  rmSync(output, { recursive: true, force: true });
  mkdirSync(output, { recursive: true });
  cpSync(dist, join(output, 'site'), { recursive: true });
  const inventory = files(join(output, 'site')).map((path) => ({
    path: `site/${path}`,
    sha256: hashFile(join(output, 'site', path)),
  }));
  const manifest = {
    schema: 'sudoku-frontend-release/v1',
    repository,
    workflow,
    run_id: runId,
    commit,
    mount_path: normalized,
    entry_point: 'site/index.html',
    files: inventory,
  };
  writeFileSync(
    join(output, 'manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
  );
  verify(output, commit);
}
const args = Object.fromEntries(
  process.argv.slice(3).reduce((pairs, item, index, array) => {
    if (item.startsWith('--')) pairs.push([item.slice(2), array[index + 1]]);
    return pairs;
  }, []),
);
try {
  const command = process.argv[2];
  if (command === 'create')
    create({
      dist: resolve(args.dist),
      output: resolve(args.output),
      repository: args.repository,
      workflow: args.workflow,
      runId: Number(args['run-id']),
      commit: args.commit.toLowerCase(),
      mount: args.mount,
    });
  else if (command === 'verify') verify(resolve(args.output), args.commit);
  else throw new Error('usage: package-release.mjs <create|verify> ...');
  console.log(JSON.stringify({ status: 'ok', command }));
} catch (error) {
  console.error(`release artifact error: ${error.message}`);
  process.exit(1);
}
