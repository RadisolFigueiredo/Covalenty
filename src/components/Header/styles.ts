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

export const BoxSearch = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #ffffff;
  border-color: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
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
