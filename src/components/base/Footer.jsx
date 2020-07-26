import React from 'react';
import styled from 'styled-components';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
const Margins = styled.div`
  margin-top: 8px;
  margin-bottom: 67px;
`;
const Container = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: white;
  padding: 8px;
`;
const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #000e;
  padding: 8px;
  color: white;
`;
const AlignCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 4px;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 14px;
  margin-bottom: 8px;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <Margins>
      <Container>
        <AlignCenter>
          <div>
            <Title>Endereço</Title>
            <Paragraph>
              Av. Vladmir Lenine, no 0000
              <br />
              Maputo - Mocambique
            </Paragraph>
          </div>
          <div>
            <Title>Contacto</Title>
            <Paragraph>
              (+258) 84 000 0000
              <br />
              (+258) 84 000 0000
            </Paragraph>
          </div>
        </AlignCenter>
        <AlignCenter>
          <Title>Sobre Nos</Title>
          <div style={{ height: 10 }}></div>
          <Title>Contacte-Nos</Title>
        </AlignCenter>
        <AlignCenter>
          <Paragraph>Siga-nos:</Paragraph>
          <Row>
            <WhatsAppIcon style={{ fontSize: '2.8rem' }} />
            <FacebookIcon style={{ fontSize: '2.8rem' }} />
            <YouTubeIcon style={{ fontSize: '2.8rem' }} />
            <InstagramIcon style={{ fontSize: '2.8rem' }} />
            <TwitterIcon style={{ fontSize: '2.8rem' }} />
          </Row>
        </AlignCenter>
      </Container>
      <Copyright>All Rights reserved to UpDown TEAM</Copyright>
    </Margins>
  );
};

export default Footer;
