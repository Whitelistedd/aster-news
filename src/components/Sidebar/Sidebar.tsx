import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { devices } from '../../MediaQueries';
import { Logo } from '../Logo/Logo';

export const Sidebar : React.FC<{mobileState?: boolean,className?: string}> = ({className,mobileState}) => {
  return (
    <Container className={className} mobileState={mobileState} >
        <Logo />
        <List>
            <Anchor className={(isActive) => isActive ? "active" : "" } to="/" ><ListItem><HomeOutlinedIcon />Общие новости</ListItem></Anchor>
            <Anchor className={(isActive) => isActive ? "active" : "" } to="/business"  ><ListItem><BusinessCenterOutlinedIcon />Бизнес</ListItem></Anchor>
            <Anchor className={(isActive) => isActive ? "active" : "" } to="/gaming" ><ListItem><SportsEsportsIcon />Игры</ListItem></Anchor>
            <Anchor className={(isActive) => isActive ? "active" : "" } to="/technology" ><ListItem><PhoneIphoneIcon />Технологии</ListItem></Anchor>
        </List>
    </Container>
  )
}

const Anchor = styled(NavLink)`
    color: inherit;
    text-decoration: none;
`

const ListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 1em;
    padding-left: 2em;
    height: 50px;
    font-weight: 700;
    border-radius: 0px 30px 30px 0px;
    transition: 200ms ease;
    &:Hover {
        cursor: pointer;
        background-color: #E1F0F9;
    }
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    .active {
        li {
            background-color: #E1F0F9;
        }
    }
`

const Container = styled.nav<{mobileState?: boolean}>`
    display: flex;
    flex-direction: column;

    min-width: 300px;
    padding: 1em 1em 0em 0em;
    height: 100%;
    gap: 3em;

    svg {
        width: 40px;
        height: 30px;
    }

    @media only screen and (max-width: ${devices.Tablet}) {
        display: none;
    }
`
