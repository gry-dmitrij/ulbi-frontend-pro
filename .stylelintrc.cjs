module.exports = {
  "extends": "stylelint-config-standard-scss",
  "rules": {
    "indentation": [2],
    "selector-class-pattern": [
      "^(([a-z][a-z0-9]*)(-[a-z0-9]+)*)|(([a-z][a-zA-Z0-9]*))$",
      {
        message: (selector) => `Expected id selector "${selector}" to be kebab-case or camelCase`,
      },
    ],
  },
}
