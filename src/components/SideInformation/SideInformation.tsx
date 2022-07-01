import React, { useEffect } from 'react';
import styled from 'styled-components';

import { devices } from '../../MediaQueries';
import { getLocationAndWeather } from '../../redux/requests';
import { AppDispatch, useAppSelector } from '../../redux/store';

const key = process.env.REACT_APP_WEATHER_APIKEY

export const SideInformation = () => {

  const {temp,weather,icon} = useAppSelector(state => state.weather)
  const dispatch = AppDispatch()

  useEffect(() => {
    const weather = async () => {
      const response = await getLocationAndWeather({key,dispatch})      
    }
    weather()
  },[])

  return (
    <Container>
      <Weather>
        <Information>
          <TextWrap>
            <Type>{weather}</Type>
            <Degrees>{temp}°F</Degrees>
          </TextWrap>
          <Image src={`http://openweathermap.org/img/w/${icon}.png`} />
        </Information>
      </Weather>
    </Container>
  )
}

const Image = styled.img`
  height: 80px;
  width: 80px;
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
