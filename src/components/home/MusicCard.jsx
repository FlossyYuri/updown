import React from 'react';
import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CoverImage from '../../assets/images/travis.jpg';
const Container = styled.div`
  display: flex;
`;
const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 4px;
  border: 1 solid #0002;
  margin-right: 8px;
`;
const ArtistName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: var(--main-color);
`;
const MusicTitle = styled.span`
  font-size: 1rem;
  font-weight: lighter;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px;
  padding-left: 0;
`;
const Row = styled.div`
  display: flex;
`;
const MusicCard = () => {
  return (
    <Container>
      <Image src={CoverImage} />
      <Column>
        <ArtistName>Giroflex</ArtistName>
        <MusicTitle>Girofle Girofla</MusicTitle>
        <Row>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderIcon />
        </Row>
      </Column>
    </Container>
  );
};

export default MusicCard;
