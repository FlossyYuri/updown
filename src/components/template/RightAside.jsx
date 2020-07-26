import React from 'react';
import styled from 'styled-components';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MessageItem from '../home/MessageItem';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Ads = styled.img`
  background-color: #1c2a48;
  border-radius: 4px;
  box-shadow: var(--shadow-1);
  height: 140px;
  border: none;
`;
const Info = styled.div`
  background-color: white;
  height: 160px;
  padding: 8px;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 300px; */
`;
const InputDiv = styled.div`
  margin-top: 8px;
  display: flex;
  background-color: white;
  padding: 8px;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 16px;
`;

const Input = styled.input`
  border: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;
const RightAside = () => {
  return (
    <Container>
      <Ads />
      <Info>
        <h1>Info</h1>
      </Info>
      <MessagesContainer>
        <MessageItem message='GIroflex ta loko' />
        <MessageItem message='GIroflex ta loko' />
      </MessagesContainer>
      <InputDiv>
        <Input type='text' placeholder='Comentário' />
        <PlayArrowIcon style={{ fontSize: '2rem', marginLeft: -16 }} />
      </InputDiv>
    </Container>
  );
};

export default RightAside;
