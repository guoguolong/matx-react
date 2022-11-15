import { createTheme } from '@mui/material';
import { forEach, merge } from 'lodash';
import { themeColors } from './themeColors';
import themeOptions from './themeOptions';

function createMatxThemes() {
  const themes: any = {};

  forEach(themeColors, (value: any, key) => {
    themes[key] = createTheme(merge({}, themeOptions, value));
  });

  return themes;
}
export const themes = createMatxThemes();
