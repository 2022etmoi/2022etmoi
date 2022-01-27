module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-sass-guidelines"
    ],
    defaultSeverity: "warning",
    rules: {
        "at-rule-no-unknown": null,
        "indentation": 4,
        "max-nesting-depth": 5,
        "scss/at-rule-no-unknown": null,
        "selector-class-pattern": "^[a-z][a-z0-9\\-_]*[a-z0-9]$",
        "selector-max-compound-selectors": 5,
        "no-invalid-position-at-import-rule": null,
    }
}
