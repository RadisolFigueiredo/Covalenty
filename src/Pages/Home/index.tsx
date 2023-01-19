import { Search, ShoppingBagOutlined } from '@mui/icons-material';
import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <div
        style={{
          width: '10%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h4>Logo</h4>
      </div>

      <div
        style={{
          width: '70%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '40px',
            borderRadius: '5px',
            borderColor: '#ffffff',
            backgroundColor: '#ffffff',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div
            style={{
              borderEndEndRadius: '5px',
              borderStartEndRadius: '5px',
              marginRight: '-1px',
              backgroundColor: '#f4ae3f',
              width: '5%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Search style={{ color: '#ffffff' }} />
          </div>
        </div>
      </div>

      <div
        style={{
          width: '10%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ShoppingBagOutlined />
      </div>
    </S.Container>
  );
};

export default Home;
