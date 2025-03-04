import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Snackbar, useTheme } from '@mui/material';
import { useState } from 'react';

export default function SimpleSnackbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  const handleClose: any = (_: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const ButtonComp: any = (
    <Button key="undo" color="secondary" size="small" onClick={handleClose}>
      UNDO
    </Button>
  );
  return (
    <Box>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        message={<span id="message-id">Note archived</span>}
        action={[
          ButtonComp,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
            sx={{ padding: theme.spacing(0.5) }}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Box>
  );
}
