<h1>Forked from <a href="https://github.com/uilibrary/matx-react">uilibrary/matx-react</a></h1>

## Improvments

- Add TypeScript support
- Replace `redux` with `recoil` (On going)
- Upgrade to webpack 5
- Upgrade to react 18
- Upgrade to MUI 5.10+
- Replace `react-scripts` with `react-app-rewired`
- Add `pnpm` support

## Upgrading log

- Problems while upgrading to webpack 5

  - webpack 5 removed won't include polyfill for `node.js`. But `jsonwebtoken` depend on some of them. So add `alias`, `fallback` to webpack configuration(See [config-overrides.js](config-overrides.js)).

  - Certain packages in node_modules (still be `jsonwebtoken`) may use `process` without `require`. So the prevous rule won't work. You need clearly define global variable named `process` to fix it(See  
    [src/globalData.js](src/globalData.js)).

- `process` in source code.
  - Change `process` check wot `typeof process === 'string'`
  - Add global variable name `process`
- Change `const axios = require('axios');` to `import axios from 'axios';`
- Add TypeScript Support
  - Add tsconfig.json - define alias `@`;
  - Replace `app/` with `@/app/`;
- comments `textTransformStyle`
- replace `shortid` with `nanoid`
- upgrade `axios` to 1.x

## Commented unsupported properties with MUI 5.10+

- Box.sx
- TextField.rowsMax
- Menu.getContentAnchorEl
- Drawer.width
- Autocomplete.disableOpenOnFocus
- Snackbar.onExited
- Slider.ValueLabelComponent
- Grid.justify
- ConfirmationDialogRaw.keepMounted
- ConfirmationDialogRaw.className

`2022/11/15 By Allen Guo`
