/**
 * @see {@link https://pipedrive.readme.io/docs/leadbooster-browser-api events} for more information
 */
type LeadBoosterEvents =
  | 'initialized'
  | 'opened'
  | 'closed'
  | 'greetingOpened'
  | 'greetingClosed'
  | 'conversationEnded';

interface LeadBooster {
  on: (event: LeadBoosterEvents, callback: () => void) => void;
}

interface Window {
  LeadBooster?: LeadBooster;
}
