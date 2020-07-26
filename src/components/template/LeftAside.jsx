import React from 'react';
import styled from 'styled-components';
import CoverImage from '../../assets/images/travis.jpg';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const GenreList = styled.ul`
  list-style-type: none;
  background-color: white;
  border-radius: 8px;
  padding: 8px;
`;
const GenreItem = styled.li`
  padding: 8px;
  color: black;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #0002;
`;

const WeekArtist = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  padding: 8px;
`;

const ArtistImage = styled.img`
  max-height: 200px;
  margin-top: 4px;
  border-radius: 8px;
`;

const ArtistName = styled.span`
  font-size: 1.2rem;
  color: var(--main-color);
  font-weight: bold;
`;
const LeftAside = () => {
  return (
    <Container>
      <GenreList>
        <GenreItem>Marabenta</GenreItem>
        <GenreItem>Pandza</GenreItem>
        <GenreItem>Dzukuta</GenreItem>
        <GenreItem>Trap</GenreItem>
        <GenreItem>Hiphop</GenreItem>
        <GenreItem>Marabenta</GenreItem>
        <GenreItem>Trap</GenreItem>
        <GenreItem>Hiphop</GenreItem>
        <GenreItem>Marabenta</GenreItem>
        <GenreItem style={{ borderBottom: 'none' }}>Mais...</GenreItem>
      </GenreList>
      <WeekArtist>
        <span>Artista da semana</span>
        <ArtistImage src={CoverImage} />
        <ArtistName>Travis Scott</ArtistName>
      </WeekArtist>
    </Container>
  );
};

export default LeftAside;
