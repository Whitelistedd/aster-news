import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = ({className} : {className?: string}) => {
  return (
    <Anchor to="/" >
        <LogoWrap className={className} >
            <CameraOutlinedIcon />
            <Title>Aster News</Title>
        </LogoWrap>
    </Anchor>
  )
}

const Title = styled.h1``

const LogoWrap = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2em;
`

const Anchor = styled(NavLink)`
    color: inherit;
    text-decoration: none;
`
