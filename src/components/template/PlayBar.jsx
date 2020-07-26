import React from 'react';
import styled from 'styled-components';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Cover from '../../assets/images/astroworld.jpg';
const Container = styled.div`
  background-color: white;
  box-shadow: var(--shadow-1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const MusicInfo = styled.div`
  display: flex;
  align-items: center;
`;
const DisplayButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;
`;
const MusicCover = styled.img`
  height: 40px;
  box-shadow: var(--shadow-1);
  border-radius: 8px;
  border: 1px solid #0005;
  margin-right: 8px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const BoldText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: var(--main-color);
`;
const MusicTitle = styled.span`
  font-size: 1rem;
  font-weight: lighter;
`;

const PlayDisplay = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Interactions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`;
const PlayBar = () => {
  return (
    <Container>
      <MusicInfo>
        <MusicCover src={Cover} />
        <Column>
          <BoldText>Artista</BoldText>
          <MusicTitle>Titulo da musica (ft. Artista)</MusicTitle>
        </Column>
      </MusicInfo>
      <PlayDisplay>
        <BoldText>00:00 / 04:26</BoldText>
        <DisplayButtons>
          <FastRewindIcon style={{ fontSize: '2rem' }} />
          <PlayArrowIcon
            style={{ fontSize: '2rem', color: 'var(--main-color)' }}
          />
          <FastForwardIcon
            style={{ fontSize: '2rem', color: 'var(--main-color)' }}
          />
        </DisplayButtons>
      </PlayDisplay>
      <Interactions>
        <FavoriteIcon style={{ fontSize: '2.2rem', color: 'red' }} />
        <ShareIcon style={{ fontSize: '2.2rem', color: 'var(--main-color)' }} />
        <GetAppIcon
          style={{ fontSize: '2.2rem', color: 'var(--main-color)' }}
        />
        <MonetizationOnIcon
          style={{ fontSize: '2.2rem', color: 'var(--main-color)' }}
        />
      </Interactions>
    </Container>
  );
};

export default PlayBar;
