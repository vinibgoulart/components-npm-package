# components-package-template

It's a npm package template build from scratch using React, Typescript, Eslint, Prettier and Jest.

## scripts

_build_: will build dist folder with compiled commonjs and modules code
_lint_: will run eslint in the code
_prettier_: will run prettier --write in the code
_test_: will run code tests
_prepublishOnly_: will run lint, prettier and test (automatic before **prepare**)
_prepare_: will run the build (automatic before **npm publish**)
