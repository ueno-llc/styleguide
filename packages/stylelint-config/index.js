'use strict';

module.exports = {
  extends: 'stylelint-config-primer',
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'string-quotes': 'single',
    'max-empty-lines': 5,
    'selector-class-pattern': null,
    'plugin/no-unsupported-browser-features': null,
    'order/properties-order': [
      [
        {
          order: 'flexible',
          properties: [
            'content',
          ],
        },

        {
          order: 'flexible',
          properties: [
            'display',

            // display flex properties
            'flex',
            'flex-grow',
            'flex-shrink',
            'flex-basis',
            'flex-direction',
            'flex-wrap',
            'flex-flow',
            'align-content',
            'align-items',
            'align-self',
            'justify-content',
            'order',

            // Grid properties
            'grid',
            'grid-area',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-auto-rows',
            'grid-column',
            'grid-column-end',
            'grid-column-gap',
            'grid-column-start',
            'grid-gap',
            'grid-row',
            'grid-row-end',
            'grid-row-gap',
            'grid-row-start',
            'grid-template',
            'grid-template-areas',
            'grid-template-columns',
            'grid-template-rows',

            // Old days
            'float',
            'clear',
          ],
        },

        {
          order: 'flexible',
          properties: [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
          ],
        },

        {
          order: 'flexible',
          properties: [
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
          ],
        },

        {
          order: 'flexible',
          properties: [
            'width',
            'max-width',
            'min-width',
            'height',
            'max-height',
            'min-height',
          ],
        },

        {
          order: 'flexible',
          properties: [
            'visibility',
            'overflow',
          ],
        },

        {
          order: 'flexible',
          properties: [
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
          ],
        },

        {
          order: 'flexible',
          properties: [
            'cursor',
            'user-select',
            'pointer-events',
          ],
        },

        {
          order: 'flexible',
          properties: [
            'font',
            'font-family',
            'font-feature-settings',
            'font-kerning',
            'font-size',
            'font-stretch',
            'font-style',
            'font-variant',
            'font-variant-caps',
            'font-variant-east-asian',
            'font-variant-ligatures',
            'font-variant-numeric',
            'font-variation-settings',
            'font-weight',
            '-webkit-font-size-delta',
            '-webkit-font-smoothing',

            'line-break',
            'line-height',

            'text-align',
            'text-align-last',
            'text-combine-upright',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-skip-ink',
            'text-decoration-style',
            'text-indent',
            'text-orientation',
            'text-overflow',
            'text-rendering',
            'text-shadow',
            'text-size-adjust',
            'text-transform',
            'text-underline-position',

            'letter-spacing',
            'white-space',
            'vertical-align',
          ],
        },

        {
          order: 'flexible',
          properties: [
            'background',
            'background-attachment',
            'background-blend-mode',
            'background-clip',
            'background-color',
            'background-image',
            'background-origin',
            'background-position',
            'background-position-x',
            'background-position-y',
            'background-repeat',
            'background-repeat-x',
            'background-repeat-y',
            'background-size',
            'color',
            'opacity',
          ],
        },
      ],

      {
        order: 'flexible',
        properties: [
          'transform',
          'transform-box',
          'transform-origin',
          'transform-style',

          'transition',
          'transition-delay',
          'transition-duration',
          'transition-property',
          'transition-timing-function',
        ],
      },

      {
        unspecified: 'bottom',
      },
    ],
  },
};
