/**
 * Shared terminal helpers.
 */

/**
 * Return keyboard focus to the terminal's hidden textarea after a
 * command-panel / palette action, so the user can keep typing.
 * Matches the xterm `helper-textarea` selector used across the app.
 */
export function refocusTerminal(delayMs = 50): void {
  setTimeout(() => {
    document.querySelector<HTMLElement>(".xterm-helper-textarea")?.focus();
  }, delayMs);
}
