import React from 'react';
import styled from 'styled-components';
import LeftAside from '../template/LeftAside';
import RightAside from '../template/RightAside';
import Banner from '../home/Banner';
import MusicCard from '../home/MusicCard';
import Footer from './Footer';
const MainBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const MusicsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
`;
const Main = () => {
  return (
    <React.Fragment>
      <main>
        <LeftAside />
        <MainBox>
          <Banner />
          <MusicsList>
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
          </MusicsList>
        </MainBox>
        <RightAside />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
