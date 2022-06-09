import React from 'react';
import styled from 'styled-components';

import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Logo } from '../../components/Logo/Logo';

export const Login : React.FC = () => {

  return (
    <Container>
      <LoginLogo />
      <LoginForm />
    </Container>
  )
}

const LoginLogo = styled(Logo)`
  padding-left: 0em;
`

const Container = styled.div`
  display: flex;
  gap: 2em;
  color: #224957;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  background: #F4F9F8;
`