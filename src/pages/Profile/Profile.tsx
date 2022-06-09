import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Navbar } from '../../components/Navbar/Navbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { AppDispatchType, RootState } from '../../redux/store';
import { logOut } from '../../redux/user';


export const Profile = () => {

    const dispatch = useDispatch<AppDispatchType>()
    const loggedInState = useSelector<RootState>((state) => state.loggedIn);
    const username = useSelector<RootState>((state) => state.username);
    const navigate = useNavigate()

    const handleLogOut = () => {
        dispatch(logOut())
    }

    useEffect(() => {
        if(!loggedInState) {
            navigate("/login", {replace: true})
        }
    },[loggedInState])

    return (
        <>
        <Container>
            <Sidebar />
            <Header>
            <Navbar />
                <ProfileContainer>
                    <Title>Здравствуйте, {`${username}`}</Title>
                    <SubmitButton onClick={() => handleLogOut()} >Выйти</SubmitButton>
                </ProfileContainer>
            </Header>
        </Container>
        </>
    )
}

const SubmitButton = styled.button`
    padding: 1em 3em;
    background-color: #c4dfd9;
    border: none;
    color: inherit;
    font-size: 1.3rem;
    box-shadow: 0px 5px 10px black;
    border-radius: 10px;
    transition: 100ms ease;
    &:hover {
        cursor: pointer;
        background-color: #bcd4cf;
    }
    &:focus {
        box-shadow: 0px 0px 0px black;
    }
`

const Title = styled.h5`
    font-size: 20px;
`

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1em;
    height: 100%;
`

const Header = styled.header`
  width: 100%;
`

const Container = styled.div`
    display: flex;
    height: 100vh;
    background: #F4F9F8;
`
