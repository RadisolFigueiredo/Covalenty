import { Box, Typography, Link, Divider } from '@mui/material';

const Footer = () => {
  const menuFooter = [
    {
      id: 1,
      text: 'Sobre Nós',
      link: 'about-us',
    },
    {
      id: 2,
      text: 'Perguntas Frequentes',
      link: 'commom-questions',
    },
    {
      id: 3,
      text: 'Fale Conosco',
      link: 'contact-us',
    },
    {
      id: 4,
      text: 'Envio e Prazo de Entrega',
      link: 'shipping-services',
    },
    {
      id: 5,
      text: 'Rastreamento',
      link: 'tracking',
    },
    {
      id: 6,
      text: 'Trocas e Devoluções',
      link: 'exchanges-returns',
    },
    {
      id: 7,
      text: 'Termos de serviço',
      link: 'service-terms',
    },
  ];
  const politicasFooter = [
    {
      id: 1,
      text: 'Políticas de Pagamento',
      link: 'payment-policies',
    },
    {
      id: 2,
      text: 'Termos de Uso',
      link: 'terms-of-use',
    },
    {
      id: 3,
      text: 'Política de cookies',
      link: 'cookie-policy',
    },
    {
      id: 4,
      text: 'Política de Reembolso',
      link: 'refund-policy',
    },
    {
      id: 5,
      text: 'Política de Privacidade',
      link: 'privacy-policy',
    },
  ];
  return (
    <Box
      sx={{
        height: '300px',
        backgroundColor: '#28696a',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: '80%',
            marginTop: '30px',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography color="#ffffff" mb={2} variant="body1">
              Menu
            </Typography>
            {menuFooter.map((item) => (
              <Link key={item.id} href="#" variant="body2" underline="none" color="#ffffff">
                {item.text}
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '200px',
            }}
          >
            <Typography color="#ffffff" mb={2} variant="body1">
              Políticas
            </Typography>
            {politicasFooter.map((item) => (
              <Link key={item.id} href="#" variant="body2" underline="none" color="#ffffff">
                {item.text}
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              height: '200px',

              flexDirection: 'column',
            }}
          >
            <Typography color="#ffffff" mb={2} variant="body1">
              Fale Conosco
            </Typography>
            <Typography color="#ffffff" variant="body2">
              Horário de Atendimento:
            </Typography>
            <Typography color="#ffffff" variant="body2">
              Seg. à Sab. 9:00h às 18:00h
            </Typography>
            <Typography color="#ffffff" variant="body2">
              E-mail: sac@lorenipsum.com.br
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            height: '20%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
          }}
        >
          <Typography paddingRight={5} color={'#ffffff'}>
            Copyright © 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
