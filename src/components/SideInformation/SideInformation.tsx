import React from 'react';
import styled from 'styled-components';

import sun from '../../assets/images/sun.svg';
import { devices } from '../../MediaQueries';

export const SideInformation = () => {
  return (
    <Container>
      <Weather>
        <Location>Россия, Москва</Location>
        <Information>
          <TextWrap>
            <Type>Солнечно</Type>
            <Degrees>31°c</Degrees>
          </TextWrap>
          <Image src={sun} />
        </Information>
      </Weather>
    </Container>
  )
}

const Image = styled.img`
  height: 60px;
  width: 60px;
`

const Degrees = styled.h5`
  font-size: 30px;
`

const Type = styled.h4`
  font-size: 20px;
`

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0em;
  align-items: center;
`

const Location = styled.h3`
  border-bottom: 1px solid grey;
  padding-bottom: 0.5em;
`

const Weather = styled.div`
  background-color: white;
  padding: 1em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  width: 100%;
  max-height: 30%;
  font-size: 1.5em;
  padding: 3.7em 1em;

  @media only screen and (max-width: ${devices.Desktop}) {
    width: 40%;
    font-size: 1.1em;
    padding: 5em 1em;
    max-height: 25%;
  }
  @media only screen and (max-width: ${devices.Laptop}) {
    display: none;
  }
`
