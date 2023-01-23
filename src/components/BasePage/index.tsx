import { Typography, Box } from '@mui/material';

export type BasePageProps = { title: string; text: string };

const BasePage = ({ title, text }: BasePageProps) => {
  return (
    <Box
      height={'51vh'}
      width={'100%'}
      display="flex"
      flexDirection="column"
      alignItems={'center'}
    >
      <Box
        width={'70%'}
        display="flex"
        justifyContent={'center'}
        flexDirection="column"
        alignItems={'center'}
      >
        <Typography mt={6} variant="h3">
          {title}
        </Typography>
        <Typography m={5} variant="body2">
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default BasePage;
