import type { HintPreview, HintStep, HintTarget } from '../api/types';

interface HintPanelProps {
  preview: HintPreview;
  stepIndex: number;
  setStepIndex: (index: number) => void;
  apply: () => void;
  close: () => void;
  busy: boolean;
}

const targetLabels = (target: HintTarget) => {
  if (target.row && target.column) {
    const coordinate = `r${target.row}c${target.column}`;
    if (target.kind === 'candidate' && target.value) {
      return {
        visible: 'this highlighted candidate',
        locator: `${target.value} · ${coordinate}`,
        accessible: `candidate ${target.value} at row ${target.row}, column ${target.column}`,
      };
    }
    return {
      visible: 'this highlighted cell',
      locator: coordinate,
      accessible: `row ${target.row}, column ${target.column}`,
    };
  }
  const index = target.index ?? 0;
  return {
    visible: `this highlighted ${target.kind}`,
    locator: `${target.kind} ${index}`,
    accessible: `${target.kind} ${index}`,
  };
};

const HintNarration = ({ step }: { step: HintStep }) => {
  if (!step.narration?.length) {
    return <>{step.message}</>;
  }
  return (
    <>
      {step.narration.map((chunk, index) => {
        if (chunk.kind === 'text') return chunk.text ?? '';
        if (chunk.kind === 'digit') {
          return (
            <span className="hint-narration__digit" key={index}>
              {chunk.value}
            </span>
          );
        }
        if (!chunk.target) return null;
        const labels = targetLabels(chunk.target);
        return (
          <span className="hint-narration__target" key={index}>
            <span aria-hidden="true">
              {labels.visible}{' '}
              <span className="hint-narration__locator">{labels.locator}</span>
            </span>
            <span className="hint-narration__accessible">
              {labels.accessible}
            </span>
          </span>
        );
      })}
    </>
  );
};

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
          <p className="eyebrow">Hint</p>
          <h2 id="hint-title" className="hint-strategy-name">
            {hint.strategy.display_name}
          </h2>
          <div
            className="hint-strategy-reveal"
            role="group"
            aria-labelledby="hint-title"
          >
            <p className="hint-strategy-grade">
              {hint.strategy.grade} strategy
            </p>
          </div>
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
        <p>
          <HintNarration step={step} />
        </p>
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
