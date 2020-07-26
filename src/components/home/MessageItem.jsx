import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
const Container = styled.div`
  margin-top: 8px;
  border-radius: 8px;
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr 40px 40px;
  box-sizing: content-box;
  background-color: white;
`;

const MessageText = styled.span`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px solid #0002;
  justify-content: center;
  align-items: center;
`;
const MessageItem = (props) => {
  return (
    <Container>
      <MessageText>{props.message}</MessageText>
      <Column>
        <FavoriteIcon style={{ fontSize: 20 }} />
        <ShareIcon style={{ fontSize: 20 }} />
      </Column>
      <PersonIcon style={{ fontSize: 40 }} />
    </Container>
  );
};

export default MessageItem;
