/**
 * @fileoverview A rule to ensure a line break after mobx @observable declaration.
 * @author Ueno. <https://github.com/ueno-llc>
 */

/* eslint-disable func-names */

'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'require a line break after mobx @observable',
      category: 'Stylistic Issues',
      recommended: false,
    },

    schema: [{
      oneOf: [{
        enum: ['always', 'never'],
      }],
    }],
  },

  create(context) {
    const config = context.options[0] || 'always';

    const ALWAYS_MESSAGE = '@observable must have a line break after his declaration.';
    const NEVER_MESSAGE = '@observable must be inline with his value.';

    /**
     * Checks the given decorator node to check if a line break is needed.
     * @param {ASTNode} The decorator statement.
     * @param {ASTNode} The value statement.
     * @param {ASTNode} node The AST node of a BlockStatement.
     * @returns {void} undefined.
     */
    function checkObservable(decorator, value, node) {
      const decoratorLine = decorator.loc.start.line;
      const decoratorColumn = decorator.loc.end.column;
      const valueLine = value.loc.start.line;

      if (config === 'always') {
        if (decoratorLine === valueLine) {
          context.report({
            node,
            loc: { line: decoratorLine, column: decoratorColumn },
            message: ALWAYS_MESSAGE,
          });
        }
      } else {
        if (decoratorLine !== valueLine) { // eslint-disable-line
          context.report({
            node,
            loc: { line: decoratorLine, column: decoratorColumn },
            message: NEVER_MESSAGE,
          });
        }
      }
    }

    const rule = {};

    rule.ClassBody = function (node) {
      if (node.body.length === 0) {
        return;
      }

      node.body.forEach((el) => {
        if (el.type === 'ClassProperty') {
          if (el.decorators) {
            checkObservable(el.decorators[0], el.value, node);
          }
        }
      });
    };

    return rule;
  },
};
