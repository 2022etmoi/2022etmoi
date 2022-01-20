module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "simple-import-sort"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "eol-last": 1,
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
        "space-unary-ops": [
            2, {
                "words": true,
                "nonwords": true,
            }
        ],
        "no-trailing-spaces": "error",
        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": ["error"],
        "object-curly-spacing": ["error", "always"],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error"
    }
};
