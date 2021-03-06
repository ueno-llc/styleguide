/**
 * @fileoverview A rule to ensure blank lines within blocks.
 * @author Ueno. <https://github.com/ueno-llc>
 */

/* eslint-disable func-names, max-len, no-prototype-builtins */

'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'require or disallow padding within blocks',
      category: 'Stylistic Issues',
      recommended: false,
    },

    fixable: 'whitespace',

    schema: [{
      oneOf: [
        {
          enum: ['always', 'never', 'top', 'bottom'],
        },
        {
          type: 'object',
          properties: {
            blocks: {
              enum: ['always', 'never', 'top', 'bottom'],
            },
            switches: {
              enum: ['always', 'never', 'top', 'bottom'],
            },
            classes: {
              enum: ['always', 'never', 'top', 'bottom'],
            },
          },
          additionalProperties: false,
          minProperties: 1,
        },
      ],
    }],
  },

  create(context) {
    const options = {};
    const config = context.options[0] || 'always';

    if (typeof config === 'string') {
      const shouldHavePadding = config === 'always';

      options.blocks = shouldHavePadding;
      options.switches = shouldHavePadding;
      options.classes = shouldHavePadding;
    } else {
      if (config.hasOwnProperty('blocks')) {
        options.blocks = config.blocks === 'always' || config.blocks === 'top' || config.blocks === 'bottom';
      }

      if (config.hasOwnProperty('switches')) {
        options.switches = config.switches === 'always' || config.switches === 'top' || config.switches === 'bottom';
      }

      if (config.hasOwnProperty('classes')) {
        options.classes = config.classes === 'always' || config.classes === 'top' || config.classes === 'bottom';
      }
    }

    const ALWAYS_MESSAGE = 'Block must be padded by blank lines.';
    const NEVER_MESSAGE = 'Block must not be padded by blank lines.';

    const sourceCode = context.getSourceCode();

    /**
     * Gets the open brace token from a given node.
     * @param {ASTNode} node - A BlockStatement or SwitchStatement node from which to get the open brace.
     * @returns {Token} The token of the open brace.
     */
    function getOpenBrace(node) {
      if (node.type === 'SwitchStatement') {
        return sourceCode.getTokenBefore(node.cases[0]);
      }

      return sourceCode.getFirstToken(node);
    }

    /**
     * Checks if the given parameter is a comment node
     * @param {ASTNode|Token} node An AST node or token
     * @returns {boolean} True if node is a comment
     */
    function isComment(node) {
      return node.type === 'Line' || node.type === 'Block';
    }

    /**
     * Checks if there is padding between two tokens
     * @param {Token} first The first token
     * @param {Token} second The second token
     * @returns {boolean} True if there is at least a line between the tokens
     */
    function isPaddingBetweenTokens(first, second) {
      return second.loc.start.line - first.loc.end.line >= 2;
    }

    /**
     * Checks if the given token has a blank line after it.
     * @param {Token} token The token to check.
     * @returns {boolean} Whether or not the token is followed by a blank line.
     */
    function getFirstBlockToken(token) {
      let prev;
      let first = token;

      do {
        prev = first;
        first = sourceCode.getTokenAfter(first, { includeComments: true });
      } while (isComment(first) && first.loc.start.line === prev.loc.end.line);

      return first;
    }

    /**
     * Checks if the given token is preceeded by a blank line.
     * @param {Token} token The token to check
     * @returns {boolean} Whether or not the token is preceeded by a blank line
     */
    function getLastBlockToken(token) {
      let last = token;
      let next;

      do {
        next = last;
        last = sourceCode.getTokenBefore(last, { includeComments: true });
      } while (isComment(last) && last.loc.end.line === next.loc.start.line);

      return last;
    }

    /**
     * Checks if a node should be padded, according to the rule config.
     * @param {ASTNode} node The AST node to check.
     * @returns {boolean} True if the node should be padded, false otherwise.
     */
    function requirePaddingFor(node) {
      switch (node.type) {
        case 'BlockStatement':
          return options.blocks;

        case 'SwitchStatement':
          return options.switches;

        case 'ClassBody':
          return options.classes;

        /* istanbul ignore next */
        default:
          throw new Error('unreachable');
      }
    }

    /**
     * Checks the given BlockStatement node to be padded if the block is not empty.
     * @param {ASTNode} node The AST node of a BlockStatement.
     * @returns {void} undefined.
     */
    function checkPadding(node, type) {
      const openBrace = getOpenBrace(node);
      const firstBlockToken = getFirstBlockToken(openBrace);
      const tokenBeforeFirst = sourceCode.getTokenBefore(firstBlockToken, { includeComments: true });
      const closeBrace = sourceCode.getLastToken(node);
      const lastBlockToken = getLastBlockToken(closeBrace);
      const tokenAfterLast = sourceCode.getTokenAfter(lastBlockToken, { includeComments: true });
      const blockHasTopPadding = isPaddingBetweenTokens(tokenBeforeFirst, firstBlockToken);
      const blockHasBottomPadding = isPaddingBetweenTokens(lastBlockToken, tokenAfterLast);
      const onlyTopPadding = context.options[0][type] === 'top';
      const onlyBottomPadding = context.options[0][type] === 'bottom';

      if (requirePaddingFor(node)) {
        if (!blockHasTopPadding && !onlyBottomPadding) {
          context.report({
            node,
            loc: { line: tokenBeforeFirst.loc.start.line, column: tokenBeforeFirst.loc.start.column },
            fix(fixer) {
              return fixer.insertTextAfter(tokenBeforeFirst, '\n');
            },
            message: ALWAYS_MESSAGE,
          });
        }

        if (!blockHasBottomPadding && !onlyTopPadding) {
          context.report({
            node,
            loc: { line: tokenAfterLast.loc.end.line, column: tokenAfterLast.loc.end.column - 1 },
            fix(fixer) {
              return fixer.insertTextBefore(tokenAfterLast, '\n');
            },
            message: ALWAYS_MESSAGE,
          });
        }
      } else {
        if (blockHasTopPadding && !onlyBottomPadding) {
          context.report({
            node,
            loc: { line: tokenBeforeFirst.loc.start.line, column: tokenBeforeFirst.loc.start.column },
            fix(fixer) {
              return fixer.replaceTextRange([tokenBeforeFirst.range[1], firstBlockToken.range[0] - firstBlockToken.loc.start.column], '\n');
            },
            message: NEVER_MESSAGE,
          });
        }

        if (blockHasBottomPadding && !onlyTopPadding) {
          context.report({
            node,
            loc: { line: tokenAfterLast.loc.end.line, column: tokenAfterLast.loc.end.column - 1 },
            fix(fixer) {
              return fixer.replaceTextRange([lastBlockToken.range[1], tokenAfterLast.range[0] - tokenAfterLast.loc.start.column], '\n');
            },
            message: NEVER_MESSAGE,
          });
        }
      }
    }

    const rule = {};

    if (options.hasOwnProperty('switches')) {
      rule.SwitchStatement = function (node) {
        if (node.cases.length === 0) {
          return;
        }

        checkPadding(node, 'switches');
      };
    }

    if (options.hasOwnProperty('blocks')) {
      rule.BlockStatement = function (node) {
        if (node.body.length === 0) {
          return;
        }

        checkPadding(node, 'blocks');
      };
    }

    if (options.hasOwnProperty('classes')) {
      rule.ClassBody = function (node) {
        if (node.body.length === 0) {
          return;
        }

        checkPadding(node, 'classes');
      };
    }

    return rule;
  },
};
