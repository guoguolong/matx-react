import { CssBaseline, ThemeProvider } from '@mui/material';
import useSettings from '@/app/hooks/useSettings';

const MatxTheme = ({ children }: any) => {
  const { settings }: any = useSettings();
  let activeTheme = { ...settings.themes[settings.activeTheme] };

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MatxTheme;
