<h1>Forked from <a href="https://github.com/uilibrary/matx-react">uilibrary/matx-react</a></h1>

## Improvment

- Add TypeScript support(On going)
- Replace redux with recoil (On going)
- Upgrade to webpack 5
- Upgarde to react 18
- Replace react-scripts with react-app-rewired

## Upgrading log

- Problmes while upgarding to webpack 5

  - webpack 5 removed won't include polyfill for `node.js`. But `jsonwebtoken` depend on some of them. So add `alias`, `fallback` to webpack configuration(See [config-overrides.js](config-overrides.js)).

  - Some packages in node_modules (still be `jsonwebtoken`) may use `process` without `require`. So the prevous rule won't work. You need clearly define global variable named `process` to fix it(See  
    [src/globalData.js](src/globalData.js)).

- `process` in source code.
  Change `process` check wot `typeof process === 'string'`
- Change `const axios = require('axios');` to `import axios from 'axios';`
- Add TypeScript Support
  - Add tsconfig.json - define alias `@`;
  - Replace `app/` with `@/app/`;

`2022/11/15 By Allen Guo`
