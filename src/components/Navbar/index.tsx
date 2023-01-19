import { BottomNavigationAction } from '@mui/material';
import { useState } from 'react';

import * as S from './styles';

const Navbar = ({ options }: any) => {
  const [value, setValue] = useState(0);

  return (
    <S.Container
      style={{ backgroundColor: '#f0e6d7' }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      {options?.map((item: any) => (
        <BottomNavigationAction
          style={{ backgroundColor: '#f0e6d7' }}
          label={item.name}
        />
      ))}
    </S.Container>
  );
};

export default Navbar;
