import type { IntlShape } from 'react-intl';
import type { MessageId } from './catalogs';
import { sourceMessages } from './catalogs';

const exactMessages: Record<string, MessageId> = {
  'Saving your local game to your account…': 'status.savingAccount',
  'Game saved to your account.': 'status.accountSaved',
  'Try saving again': 'retry.saving',
  'Your local game is safe, but it could not be saved to your account.':
    'error.accountSave',
  'Restoring your puzzle…': 'status.restoring',
  'Your local puzzle was restored.': 'status.restored',
  'Try restoring again': 'retry.restoring',
  'Your puzzle could not be restored.': 'error.restoring',
  'Check connection': 'retry.connection',
  'The game service could not be reached. Check your connection and try again.':
    'error.connection',
  'The game service is temporarily unavailable. Your board is safe; try again.':
    'error.unavailable',
  'Wait for pending moves before starting another puzzle.':
    'status.waitBeforeStarting',
  'Try starting again': 'retry.starting',
  'The game could not be started.': 'error.starting',
  'Sign in again to save moves.': 'error.signInAgain',
  'The local game is unavailable.': 'error.localUnavailable',
  'Puzzle solved. Beautiful work!': 'status.solved',
  'Move saved.': 'status.moveSaved',
  'Retry move': 'retry.move',
  'The move could not be saved.': 'error.move',
  'Applying hint…': 'hint.applying',
  'Restarting this puzzle…': 'loading.restart.title',
  'Undoing…': 'controls.undoing',
  'Redoing…': 'controls.redoing',
  'Wait for pending moves before opening a hint.': 'status.waitBeforeHint',
  'Refreshing hint…': 'hint.refreshing',
  'Preparing hint…': 'controls.hint.preparing',
  'The current game is unavailable.': 'error.currentUnavailable',
  'The puzzle changed while the hint was prepared.': 'error.hintChanged',
  'Hint ready. Start with step 1.': 'status.hintReady',
  'Try hint again': 'retry.hint',
  'The hint could not be prepared.': 'error.hint',
  'Retry saving time': 'retry.time',
  'The latest game time could not be saved.': 'error.time',
  'Retry saving progress': 'retry.progress',
  'The latest timer state could not be saved.': 'error.timer',
  'Wait for pending moves before leaving this puzzle.':
    'status.waitBeforeLeaving',
  'Try leaving again': 'retry.leaving',
  'The local puzzle could not be cleared.': 'error.leaving',
  'Opening your saved game…': 'status.openingSaved',
  'Try opening again': 'retry.opening',
  'That saved game could not be opened.': 'error.opening',
  'Deleting saved game…': 'account.confirm.deleteGame.pending',
  'Saved game deleted.': 'status.savedDeleted',
  'Try deleting again': 'retry.deleting',
  'The saved game could not be deleted.': 'error.deleteGame',
  'Deleting all saved games…': 'account.confirm.deleteAll.pending',
  'All saved games deleted.': 'status.allDeleted',
  'The saved games could not be deleted.': 'error.deleteAll',
  'Signing out…': 'account.signingOut',
  'Signed out. Your account games remain saved.': 'status.signedOut',
  'Try signing out again': 'retry.signOut',
  'You could not be signed out.': 'error.signOut',
  'Revoking all sessions…': 'account.confirm.revoke.pending',
  'All sessions revoked. Sign in again to continue.': 'status.revoked',
  'Try revoking again': 'retry.revoke',
  'Sessions could not be revoked.': 'error.revoke',
  'Deleting your account…': 'account.confirm.deleteAccount.pending',
  'Account and saved games deleted.': 'status.accountDeleted',
  'Try deleting the account again': 'retry.deleteAccount',
  'The account could not be deleted.': 'error.deleteAccount',
};

export function localizeClientText(intl: IntlShape, text: string): string {
  const id = exactMessages[text];
  if (id) return intl.formatMessage({ id, defaultMessage: sourceMessages[id] });
  const starting =
    /^Starting your (Easy|Medium|Hard|Expert|Evil) puzzle…$/.exec(text);
  if (starting) {
    const difficultyId =
      `common.difficulty.${starting[1].toLowerCase()}` as MessageId;
    const difficulty = intl.formatMessage({
      id: difficultyId,
      defaultMessage: sourceMessages[difficultyId],
    });
    return intl.formatMessage(
      {
        id: 'welcome.starting',
        defaultMessage: sourceMessages['welcome.starting'],
      },
      { difficulty },
    );
  }
  return text;
}
