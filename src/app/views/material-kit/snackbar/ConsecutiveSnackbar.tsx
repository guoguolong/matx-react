import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Snackbar } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

const StyledIconButton: any = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0.5),
}));

const ConsecutiveSnackbars = () => {
  const [queue, setQueue]: any = useState([]);
  const [open, setOpen]: any = useState(false);
  const [messageInfo, setMessageInfo]: any = useState({});

  const handleClick = (message: any) => () => {
    setQueue((state: any) => [...state, { message, key: new Date().getTime() }]);

    if (open) {
      // immediately begin dismissing current message
      // to start showing new one
      setOpen(false);
    } else {
      processQueue();
    }
  };

  const processQueue = () => {
    if (queue.length > 0) {
      setMessageInfo(queue.shift());
      setOpen(true);
    }
  };

  const handleClose: any = (_: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => processQueue();

  const ButtonComp: any = (
    <Button key="undo" color="secondary" size="small" onClick={handleClose}>
      UNDO
    </Button>
  );
  return (
    <Box>
      <Button onClick={handleClick('Message A')}>Show message A</Button>
      <Button onClick={handleClick('Message B')}>Show message B</Button>
      <Snackbar
        open={open}
        key={messageInfo.key}
        onClose={handleClose}
        autoHideDuration={6000}
        // onExited={handleExited}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        message={<span id="message-id">{messageInfo.message}</span>}
        action={[
          ButtonComp,
          <StyledIconButton key="close" color="inherit" aria-label="Close" onClick={handleClose}>
            <CloseIcon />
          </StyledIconButton>,
        ]}
      />
    </Box>
  );
};

export default ConsecutiveSnackbars;
