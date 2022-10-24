/**
 * Transitions available for the UI.
 *
 * @type {Object.<string>}
 * @returns Selected transition.
 */
export const transitions = {
  'transition-none': 'none',
  'transition-all': 'all 150ms cubic-bezier(0.4, 0, 0.2, 1) 150ms 0s',
  transition:
    'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter 150ms cubic-bezier(0.4, 0, 0.2, 1) 150ms 0s',
  'transition-colors': 'colors 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s',
  'transition-opacity': 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s',
  'transition-shadow': 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s',
  'transition-transform': 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s',
}
