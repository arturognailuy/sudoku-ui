import type { HintPreview } from '../api/types';

interface HintPanelProps {
  preview: HintPreview;
  stepIndex: number;
  setStepIndex: (index: number) => void;
  apply: () => void;
  close: () => void;
  busy: boolean;
}

export const HintPanel = ({
  preview,
  stepIndex,
  setStepIndex,
  apply,
  close,
  busy,
}: HintPanelProps) => {
  const { hint } = preview;
  const step = hint.steps[stepIndex]!;
  const finalStep = stepIndex === hint.steps.length - 1;
  const legend = [
    step.links.some(({ kind }) => kind === 'strong') && 'Solid: must contain',
    step.links.some(({ kind }) => kind === 'weak') && 'Dashed: cannot both',
    step.links.some(({ kind }) => kind === 'implication') &&
      'Arrow: implication',
    step.nodes.some(({ group }) => group) && 'A/B: alternating groups',
    step.nodes.some(({ order }) => order) && 'Numbers: chain order',
  ].filter(Boolean) as string[];

  return (
    <section className="hint-panel" aria-labelledby="hint-title">
      <div className="hint-panel__heading">
        <div>
          <p className="eyebrow">Teaching hint</p>
          <h2 id="hint-title">Work through the pattern</h2>
          {finalStep && (
            <div
              className="hint-strategy-reveal"
              role="group"
              aria-labelledby="hint-strategy-name"
            >
              <p id="hint-strategy-name" className="hint-strategy-name">
                {hint.strategy.display_name}
              </p>
              <p className="hint-strategy-grade">
                {hint.strategy.grade} strategy
              </p>
            </div>
          )}
        </div>
        <button
          type="button"
          className="hint-close"
          onClick={close}
          disabled={busy}
        >
          Close
        </button>
      </div>
      <div className="hint-step" aria-live="polite" aria-atomic="true">
        <p className="hint-step__count">
          Step {stepIndex + 1} of {hint.steps.length}
        </p>
        <p>{step.message}</p>
      </div>
      {legend.length > 0 && (
        <ul className="hint-legend" aria-label="Visual hint legend">
          {legend.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <div className="hint-navigation">
        <button
          type="button"
          onClick={() => setStepIndex(stepIndex - 1)}
          disabled={busy || stepIndex === 0}
        >
          Back
        </button>
        {!finalStep ? (
          <button
            type="button"
            className="primary-action"
            onClick={() => setStepIndex(stepIndex + 1)}
            disabled={busy}
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            className="primary-action"
            onClick={apply}
            disabled={busy}
          >
            Apply hint
          </button>
        )}
      </div>
    </section>
  );
};
