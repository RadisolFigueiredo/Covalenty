import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #28696a;
  justify-content: space-around;
  height: 100px;
`;

export const BoxAlign = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  cursor: pointer;
  text-decoration: none;
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;

export const BoxSearch = styled.form`
  display: flex;
  justify-content: flex-end;
  background-color: #ffffff;
  border-color: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
`;

export const Input = styled.input`
  width: 100%;
  padding-left: 5px;
  font-size: 18px;
  border: none;
  outline: 0;
`;

export const BoxSearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4ae3f;
  margin-right: -1px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  width: 5%;
`;

export const ContainerNavbar = styled(Box)`
  background-color: #f0e6d7;
  height: 60px;
`;

export const ContainerCarousel = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BoxCarousel = styled.div`
  display: flex;
  justify-content: center;
  background-color: #28696a;
  width: 100%;
`;

export const WidthCarousel = styled.div`
  width: 70%;
`;

interface FavoriteProps {
  $hasFavorite: boolean;
}

export const BoxIconFavorites = styled(Link)<FavoriteProps>`
  text-decoration: none;
  color: ${({ $hasFavorite }) => ($hasFavorite ? 'red' : '#f0e6d7')};
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  cursor: pointer;
`;

export const ChipFavoriteLength = styled.div<FavoriteProps>`
  border: 1px solid transparent;
  background-color: #f0e6d7;
  width: 18px;
  height: 20px;
  border-radius: 30px;
  position: absolute;
  top: 50px;
  right: -4px;
  margin-right: 130px;
  display: ${({ $hasFavorite }) => ($hasFavorite ? '' : 'none')}; ;
`;
export const ProductInCartLength = styled.p`
  color: #213058;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  top: -13px;
  right: 5px;
`;
