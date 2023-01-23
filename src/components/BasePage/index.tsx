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
        <Typography mt={6} variant="h3" color="#213058" fontWeight={700}>
          {title}
        </Typography>
        <Typography m={5} variant="subtitle1" color="#213058" textAlign='justify'>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default BasePage;
