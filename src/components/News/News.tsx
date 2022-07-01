import { Skeleton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import { devices } from '../../MediaQueries';

interface NewsProps {
  title: string,
  Desc: string,
  ImageSrc: string,
  source: string,
  publishedDate: string,
  url: string,
}

export const News : React.FC<NewsProps> = ({title, Desc,ImageSrc,source,publishedDate,url }) => {

  /* преобразует дату выпуска в удобочитаемую дату */
  const CovertTime = (publishedDate : string) => {
    const PublishedDate = publishedDate.split(" ")
    const DateAndTime = PublishedDate[0].split("-")
    const Time = PublishedDate[1]
    const Year = DateAndTime[0]
    const Month = DateAndTime[1]
    const Day = DateAndTime[2]
    return `${Year}/${Month}/${Day}, ${Time}`
  }

  /* сократит слова, если превысит лимит */
  const ShortenWords = (words : string,limit: number) => {
    return words?.length > limit ? `${Desc?.substring(0, limit)}...` : words
  }

  /* перенаправит на источник страницы новостей */
  const handleRedirect = (url : string) => {
    window.open(url)
  }

  return (
    <Container onClick={() => handleRedirect(url)} >
      <About>
        <Title>{title}</Title>
        <Description>{ShortenWords(Desc,200)}</Description>
        <Details>
          <Detail>Источник: {source}</Detail>
          <Detail>Дата публикации: {CovertTime(publishedDate)}</Detail>
        </Details>
      </About>
      {/* если изображение не отображается, оно покажет загружаемое изображение */}
      { ImageSrc ?
        <Image src={ImageSrc} />
        : <Skeleton sx={{borderRadius: "10px"}} variant="rectangular" width={"20vw"} height={"20vh"} />
      }
    </Container>
  )
}


const Image = styled.img`
  min-height: 80%;
  height: 80%;
  min-width: 25%;
  border-radius: 10px;
`

const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  height: 100%;
`

const Detail = styled.p``

const Details = styled.div`
  display: flex;
  gap: 1em;
  font-weight: 600;
  color: #818080ba;
  font-size: clamp(0.8rem, 5vw - 1rem, 1rem);
`

const Description = styled.p`
  color: #636262;
  font-size: clamp(0.65rem, 5vw - 1rem, 1.3rem);
  margin-bottom: auto;
`

const Title = styled.h2`
`

const Container = styled.div`
  width: 60vw;
  height: 260px;
  padding: 1em 2em;
  display: flex;
  text-align: left;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  gap: 3em;
  box-shadow: 0px 0px 10px #0000004c;
  background-color: white;
  transition: 200ms ease;
  &:hover {
    box-shadow: 0px 0px 0px #0000004c;
    cursor: pointer;
  }

  @media only screen and (max-width: ${devices.Desktop}) {
    width: 55vw;
    height: 250px;
    font-size: 13px;
    ${Title} {
      font-size: 1.3rem;
    }
    ${Description} {
      font-size: 1rem;
      margin-bottom: auto;
    }
    ${Image} {
      height: 70%;
    }
    ${Details} {
      font-size: 0.95em;
    }
  }

  @media only screen and (max-width: ${devices.Laptop}) {
    padding: 1em 1em;
    border-radius: 0px;
    width: 100%;
    ${Image} {
      min-width: 35%;
    }
  }

  @media only screen and (max-width: ${devices.Tablet}) {
    height: 300px;
  }

  @media only screen and (max-width: ${devices.Mobile}) {
    height: 100%;
    box-shadow: 0px 0px 0px #0000004c;
    flex-direction: column-reverse;
    ${Image} {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
`
