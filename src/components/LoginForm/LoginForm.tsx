import { Alert } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { loginRequest } from '../../redux/requests';
import { AppDispatch, useAppSelector } from '../../redux/store';

export const LoginForm = () => {

    const { register, handleSubmit } = useForm();
    const dispatch = AppDispatch()
    const errorState = useAppSelector((state) => state.persisted.error);
    const SuccessState = useAppSelector((state) => state.persisted.Success);
    const Loading = useAppSelector((state) => state.persisted.Loading);
    const navigate = useNavigate()
  
    /* отправит запрос на вход, если пользователь нажмет кнопку отправки */
    const onSubmit = ({Username, Password} : ({Username: string, Password: string})) => {
      loginRequest({dispatch,Username,Password})
    }
  
    /* если процесс входа был успешным, он перенаправит пользователя на страницу профиля */
    useEffect(() => {
  
      if(SuccessState) {
        navigate("/profile", {replace: true})
      }
  
    }, [SuccessState])

    return (
        <Form onSubmit={handleSubmit(onSubmit)} >
            <Title>Войти</Title>
            <Desc>Войдите, чтобы управлять своими новостями</Desc>
            <Input type="text" {...register("Username")} placeholder="Имя пользователя" />
            <Input type="password" {...register("Password")} placeholder="Пароль" />
            {errorState ? <Alert severity="warning">Имя пользователя или пароль введены не верно</Alert> : <></>}
            {SuccessState ? <Alert severity="success">Успешно вошли</Alert> : <></>}
            <SubmitButton Loading={Loading ? true : false} >Войти</SubmitButton>
        </Form>
    )
}

const SubmitButton = styled.button<{Loading : boolean}>`
  padding: 0.8em;
  background-color: #c4dfd9;
  border: none;
  color: inherit;
  font-size: 1.3rem;
  box-shadow: 0px 5px 10px black;
  border-radius: 10px;
  transition: 100ms ease;
  cursor: ${props => props.Loading ? "no-drop" : ""};
  &:hover {
    cursor: pointer;
    background-color: #bcd4cf;
  }
  &:active {
    box-shadow: 0px 0px 0px black;
  }
`

const Input = styled.input`
  padding: 1.3em 1.3em;
  background: #224957;
  border: none;
  width: 100%;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 10px;
  color: white;
  &::placeholder {
    color: white;
  }
`

const Desc = styled.p`
  font-weight: 600;
`

const Title = styled.h1`
  font-size: 4rem;
`

const Form = styled.form`
  display: flex;
  gap: 2em;
  width: 350px;
  flex-direction: column;
`
