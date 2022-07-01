import Menu from '@mui/icons-material/Menu';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { SwipeableDrawer } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { devices } from '../../MediaQueries';
import { AppDispatch, useAppSelector } from '../../redux/store';
import { setSearch } from '../../redux/user';
import { Sidebar } from '../Sidebar/Sidebar';

export const Navbar: React.FC = () => {

  const LoginState = useAppSelector((state) => state.persisted.loggedIn);
  const dispatch = AppDispatch()
  const [mobileState,setMobileState] = useState(false)

  /* отправит действие, если пользователь что-то ищет */
  const handleSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value))
  }

  /* показать/скрыть мобильное меню */
  const handleMobileNav = () => {
    setMobileState(mobileState ? false : true)
  }

  return (
    <Container>
      <MenuIcon onClick={() => handleMobileNav()} />
      <SwipeableDrawer
        anchor={"left"}
        open={mobileState}
        onClose={() => handleMobileNav()}
        onOpen={() => handleMobileNav()}
      >
        <MobileNav  />
      </SwipeableDrawer>
      <Search>
        <SearchBar type="text" onChange={handleSearch} placeholder="Поиск новостей.." />
        <SearchOutlinedIcon />
      </Search>
      <Anchor to={`/${LoginState ? "profile" : "login"}`} >
          <PermIdentityOutlinedIcon />
          <Description>Мой профиль</Description>
      </Anchor>
    </Container>
  );
};

const Description = styled.p`
  font-weight: 500;
`

const Anchor = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1em;
  text-decoration: none;
  color: inherit;
  padding: 1em;
  border-radius: 10px;
  transition: border 200ms ease;
  &:hover {
    cursor: pointer;
    outline: 1px solid black;
  }
`;

const SearchBar = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 30vw;
`;

const Search = styled.div`
  background: rgba(47, 159, 248, 0.04);
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0.7em;
  svg:hover {
    cursor: pointer;
  }
`

const MobileNav = styled(Sidebar)`
  display: flex;
`

const MenuIcon = styled(Menu)`
  display: none !important;
  &:hover {
    cursor: pointer;
  }
`

const Container = styled.div`
  width: 100%;
  gap: 1em;
  height: 7vh;
  display: flex;
  position: relative;
  align-items: center;
  padding-right: 4em;
  justify-content: space-between;

  @media only screen and (max-width: ${devices.Tablet}) {
    justify-content: space-between;
    padding: 0em 2em;
    ${MenuIcon} {
      display: inline-block !important;
    }
    ${SearchBar} {
      width: 50vw;
    }
    ${Anchor} {
      gap: 0em;
    }
    ${Description} {
      display: none;
    }
  }

  @media only screen and (max-width: ${devices.Mobile}) {
    padding: 0em 1em;
    ${Search} {
      display: none;
    }
    ${Anchor} {
      gap: 0em;
      padding: 0em;
    }
  }
`;
