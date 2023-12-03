module.exports = {
  parser: "@typescript-eslint/parser",
  extends:  [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      "plugin:react-hooks/recommended",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },

  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/dot-notation': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "indent": ["error", 4],
    "linebreak-style": ["error", "unix"],
    "no-empty": "warn",
    "no-console": "error",
    "curly": "error",
    "max-lines" : ["error", {"max": 500,"skipBlankLines": true, "skipComments": true}],
    "max-depth": ["error", 4],
    //"sort-imports": ["error"],
  }
}
