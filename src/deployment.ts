const moduleSources = (root: ParentNode, baseUrl: string) =>
  Array.from(
    root.querySelectorAll<HTMLScriptElement>('script[type="module"][src]'),
  ).map((script) => new URL(script.getAttribute('src') ?? '', baseUrl).href);

export const reloadForNewDeployment = async () => {
  try {
    const response = await fetch(
      new URL(import.meta.env.BASE_URL, window.location.origin),
      {
        cache: 'no-store',
        headers: { 'X-Sudoku-Deployment-Check': '1' },
      },
    );
    if (!response.ok) return false;

    const currentSources = moduleSources(document, window.location.href);
    const nextDocument = new DOMParser().parseFromString(
      await response.text(),
      'text/html',
    );
    const nextSources = moduleSources(nextDocument, response.url);
    if (
      currentSources.length === 0 ||
      nextSources.length === 0 ||
      currentSources.join('\n') === nextSources.join('\n')
    ) {
      return false;
    }

    window.location.reload();
    return true;
  } catch {
    return false;
  }
};
