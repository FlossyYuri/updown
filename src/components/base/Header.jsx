import React from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
const Container = styled.header`
  background-color: var(--main-color);
  color: #fff;
  padding: 16px;
  display: grid;
  grid-template-columns: 240px 2fr 340px;
  margin-bottom: 8px;
  position: fixed;
  top:0;
  left:0;
  right:0;
`;

const Logo = styled.div`
  font-size: 32px;
  width: 100%;
  color: white;
  text-align: center;
  font-weight: bolder;
`;

const Center = styled.div`
  display: flex;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
`;
const MenuItem = styled.li`
  text-decoration: none;
  padding-left: 16px;
  padding-right: 16px;
`;

const UserArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 20px;
  padding: 4px;
  padding-left: 16px;
  padding-right: 16px;
`;
const SearchInput = styled.input`
  margin: 0;
  padding: 0;
  border: none;
`;
const Header = () => {
  return (
    <Container>
      <Logo>LOGO</Logo>
      <Center>
        <Menu>
          <MenuItem>Novidades</MenuItem>
          <MenuItem>Top</MenuItem>
          <MenuItem>Biblioteca</MenuItem>
        </Menu>
      </Center>
      <UserArea>
        <SearchContainer>
          <SearchInput type='text' />
          <SearchIcon style={{ color: 'black' }} />
        </SearchContainer>
        <AccountBoxIcon style={{ marginLeft: 16, fontSize: 42 }} />
      </UserArea>
    </Container>
  );
};

export default Header;
