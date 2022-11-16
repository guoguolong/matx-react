<h1>Forked from <a href="https://github.com/uilibrary/matx-react">uilibrary/matx-react</a></h1>

## Improvment - Compared with `master` branch

- Based on vitejs to build.

## Upgrading log

- How to tream `process`

  As we know that certain packages is using `process` without `require('process')`. You have to define the global variale `process` in your codes. 

  It only work on dev mode if you defined it in `vite.config.js`

`2022/11/16 By Allen Guo`
