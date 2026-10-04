import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

const build = (mountPath) => {
  execFileSync('npm', ['run', 'build'], {
    env: { ...process.env, SUDOKU_MOUNT_PATH: mountPath },
    stdio: 'inherit',
  });
  const html = readFileSync('dist/index.html', 'utf8');
  const script = html.match(/<script[^>]+src="([^"]+)"/)?.[1];
  if (!script)
    throw new Error(`missing built script for mount ${mountPath || '/'}`);
  const expectedPrefix = mountPath || '';
  if (!script.startsWith(`${expectedPrefix}/assets/`)) {
    throw new Error(
      `built script ${script} is outside ${expectedPrefix || '/'} mount`,
    );
  }
  const javascript = readFileSync(
    `dist${script.slice(expectedPrefix.length)}`,
    'utf8',
  );
  const expectedBase = expectedPrefix === '' ? '/' : `${expectedPrefix}/`;
  if (
    !javascript.includes(`baseUrl??"${expectedBase}"`) ||
    !javascript.includes('/api/v1/sessions')
  ) {
    throw new Error(`API base does not use ${expectedPrefix || '/'} mount`);
  }
  for (const legalPage of ['privacy', 'terms']) {
    const path = `dist/${legalPage}/index.html`;
    if (!existsSync(path)) {
      throw new Error(
        `missing ${legalPage} page for mount ${mountPath || '/'}`,
      );
    }
    const legalHtml = readFileSync(path, 'utf8');
    if (!legalHtml.includes('href="../legal.css"')) {
      throw new Error(
        `${legalPage} page does not use mount-relative assets for ${mountPath || '/'}`,
      );
    }
  }
};

build('');
build('/sudoku');
console.log(JSON.stringify({ status: 'ok', mounts: ['/', '/sudoku/'] }));
