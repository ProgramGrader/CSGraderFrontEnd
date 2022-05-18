module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
      "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended", "next",
    "next/core-web-vitals", "prettier",
    "plugin:storybook/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "eslint-plugin-react",
    "eslint-plugin-import",
    "eslint-plugin-prefer-arrow",
    "eslint-plugin-jsdoc",
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "jest",
    "eslint-plugin-eslint-comments",
    "eslint-plugin-jest",
      "eslint-plugin-react",
      "eslint-plugin-react-hooks",
  ],
  "root": true,
  "rules": {
    "@next/next/google-font-display": "warn",
    "@next/next/google-font-preconnect": "warn",
    "@next/next/inline-script-id": "error",
    "@next/next/next-script-for-ga": "warn",
    "@next/next/no-assign-module-variable": "error",
    "@next/next/no-before-interactive-script-outside-document": "warn",
    "@next/next/no-css-tags": "warn",
    "@next/next/no-document-import-in-page": "error",
    "@next/next/no-duplicate-head": "error",
    "@next/next/no-head-element": "warn",
    "@next/next/no-head-import-in-document": "error",
    "@next/next/no-html-link-for-pages": "error",
    "@next/next/no-img-element": "warn",
    "@next/next/no-page-custom-font": "warn",
    "@next/next/no-script-component-in-head": "error",
    "@next/next/no-server-import-in-page": "error",
    "@next/next/no-sync-scripts": "error",
    "@next/next/no-title-in-document-head": "warn",
    "@next/next/no-typos": "warn",
    "@next/next/no-unwanted-polyfillio": "warn",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": ["error", {
      "default": "array"
    }],
    "@typescript-eslint/ban-types": ["error", {
      "types": {
        "Object": {
          "message": "Avoid using the `Object` type. Did you mean `object`?"
        },
        "Function": {
          "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
        },
        "Boolean": {
          "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
        },
        "Number": {
          "message": "Avoid using the `Number` type. Did you mean `number`?"
        },
        "String": {
          "message": "Avoid using the `String` type. Did you mean `string`?"
        },
        "Symbol": {
          "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
        }
      }
    }],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-member-accessibility": ["off", {
      "accessibility": "explicit"
    }],
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
        "delimiter": "semi",
        "requireLast": true
      },
      "singleline": {
        "delimiter": "semi",
        "requireLast": false
      }
    }],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": ["error", {
      "ignoreParameters": true,
      "ignoreProperties": true
    }],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/no-shadow": ["error", {
      "hoist": "all"
    }],
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": ["error", "single"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/triple-slash-reference": ["error", {
      "path": "always",
      "types": "prefer-import",
      "lib": "always"
    }],
    "@typescript-eslint/typedef": ["error", {
      "parameter": true,
      "propertyDeclaration": true
    }],
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": "off",
    "arrow-parens": ["off", "always"],
    "comma-dangle": ["error", {
      "objects": "never",
      "arrays": "never",
      "functions": "never"
    }],
    "complexity": "off",
    "constructor-super": "error",
    "dot-notation": "off",
    "eqeqeq": ["error", "smart"],
    "for-direction": "error",
    "getter-return": "error",
    "guard-for-in": "error",
    "id-denylist": ["error", "any", "Number", "number", "String", "string", "Boolean", "boolean", "Undefined", "undefined"],
    "id-match": "error",
    "import/no-anonymous-default-export": "warn",
    "import/no-internal-modules": "off",
    "import/no-unassigned-import": "error",
    "import/order": "off",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/newline-after-description": "error",
    "jsx-a11y/alt-text": ["warn", {
      "elements": ["img"],
      "img": ["Image"]
    }],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "max-classes-per-file": ["error", 1],
    "max-len": ["error", {
      "ignorePattern": "//",
      "code": 160
    }],
    "new-parens": "error",
    "no-async-promise-executor": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-semi": "error",
    "no-fallthrough": "off",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-null/no-null": "off",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-imports": "error",
    "no-self-assign": "error",
    "no-setter-return": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "off",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-unused-vars": ["warn", {
      "args": "after-used",
      "argsIgnorePattern": "^_"
    }],
    "no-use-before-define": "off",
    "no-useless-backreference": "error",
    "no-useless-catch": "error",
    "no-useless-escape": "error",
    "no-var": "error",
    "no-with": "error",
    "object-shorthand": "off",
    "one-var": ["off", "never"],
    "padding-line-between-statements": ["off", {
      "blankLine": "always",
      "prev": "*",
      "next": "return"
    }],
    "prefer-arrow/prefer-arrow-functions": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "radix": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/display-name": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-key": "error",
    "react/jsx-no-bind": "off",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "off",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "require-yield": "error",
    "semi": "error",
    "spaced-comment": ["error", "always", {
      "markers": ["/"]
    }],
    "use-isnan": "error",
    "valid-typeof": "off",
    "@typescript-eslint/tslint/config": ["error", {
      "rules": {
        "jsx-no-string-ref": true
      }
    }]
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/parsers": {
      "C:\\temp\\nextTest\\next-test\\node_modules\\@typescript-eslint\\parser\\dist\\index.js": [".ts", ".tsx", ".d.ts"]
    },
    "import/resolver": {
      "C:\\temp\\nextTest\\next-test\\node_modules\\eslint-import-resolver-node\\index.js": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      "C:\\temp\\nextTest\\next-test\\node_modules\\eslint-import-resolver-typescript\\lib\\index.cjs": {
        "alwaysTryTypes": true
      }
    }
  },


};