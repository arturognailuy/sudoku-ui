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

  return (
    <section className="hint-panel" aria-labelledby="hint-title">
      <div className="hint-panel__heading">
        <div>
          <p className="eyebrow">Teaching hint</p>
          <h2 id="hint-title">{hint.strategy.display_name}</h2>
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
      <p className="hint-summary">{hint.summary}</p>
      <div className="hint-step" aria-live="polite" aria-atomic="true">
        <p className="hint-step__count">
          Step {stepIndex + 1} of {hint.steps.length}
        </p>
        <p>{step.message}</p>
      </div>
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
