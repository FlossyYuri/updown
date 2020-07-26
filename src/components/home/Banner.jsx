import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-1);
  height: 240px;
  background-color: #7283a7;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 8px;
`;
const Banner = () => {
  return <Container>Banner</Container>;
};

export default Banner;
