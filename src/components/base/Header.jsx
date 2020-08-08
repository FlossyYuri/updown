import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { ClickAwayListener, IconButton } from "@material-ui/core";

const Container = styled.header`
  background-color: var(--main-color);
  color: #fff;
  display: grid;
  grid-template-columns: 240px 2fr 340px;
  margin-bottom: 8px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
const CustomMenuItem = styled.li`
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
  
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Container>
      <Logo>LOGO</Logo>
      <Center>
        <Menu>
          <CustomMenuItem>Novidades</CustomMenuItem>
          <CustomMenuItem>Top</CustomMenuItem>
          <CustomMenuItem>Biblioteca</CustomMenuItem>
        </Menu>
      </Center>
      <UserArea>
        <SearchContainer>
          <SearchInput type="text" />
          <SearchIcon style={{ color: "black" }} />
        </SearchContainer>
        <IconButton ref={anchorRef} onClick={handleToggle} style={{ color: 'white' }} aria-label="delete">
          <AccountBoxIcon style={{ fontSize: 42 }} />
        </IconButton>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </UserArea>
    </Container>
  );
};

export default Header;
