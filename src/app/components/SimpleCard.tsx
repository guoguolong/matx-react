import { Card } from '@mui/material';
import { Box, styled } from '@mui/system';

const CardRoot = styled(Card)(() => ({
  height: '100%',
  padding: '20px 24px',
}));

const CardTitle: any = styled('div')(
  ({ subtitle }: any) =>
    ({
      fontSize: '1rem',
      fontWeight: '500',
      textTransform: 'capitalize',
      marginBottom: !subtitle && '16px',
    } as any)
);

const SimpleCard = ({ children, title, subtitle, icon }: any) => {
  return (
    <CardRoot elevation={6}>
      <CardTitle subtitle={subtitle}>{title}</CardTitle>
      {subtitle && <Box sx={{ mb: 2 }}>{subtitle}</Box>}
      {children}
    </CardRoot>
  );
};

export default SimpleCard;
