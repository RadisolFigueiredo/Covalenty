import { useLocation } from 'react-router-dom';

import BasePage from '../../components/BasePage';

import { loremIpsum } from '../../mock/generic';

const Generic = () => {
  const path = useLocation();
  

  const titlePath =
    path.pathname === '/tracking' ? 'Rastreamento' : 'Envio e Prazo de Entrega';

  return <BasePage title={titlePath} text={loremIpsum} />;
};

export default Generic;
