import { Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getAllNews } from '../../redux/requests';
import { News } from '../News/News';

interface StateType {
    title: string,
    summary: string,
    media: string,
    rights: string,
    published_date: string,
    link: string,
}

interface Props {
    title: string,
    category: string,
}

const SkeletonCount = [1,2,3,4,5]

const key = process.env.REACT_APP_NEWS_APIKEY

export const NewsGenerator : React.FC<Props> = ({title,category}) => {

    const [news,setNews] = useState<StateType[]>([])

    useEffect(() => {
      const getNews = async () => {
        try {
          const response = await getAllNews(category,key)
          setNews(response?.data?.articles)
        } catch(err) {
          console.log(err)
        }
      }
      getNews()
    },[category])

    return (
        <NewsContainer>
        <Title>{title}</Title>
        <NewsWrapper>
        {
        news.length !== 0 ?
        news?.map((article,index) => (
          <News key={index} url={article.link} source={article.rights} publishedDate={article.published_date} title={article.title} Desc={article.summary} ImageSrc={article.media} />
        ))
        : SkeletonCount.map((skeleton,index) => <Skeleton key={index} sx={{borderRadius: "10px", minWidth: "60vw", minHeight: "20vh", lg: {minWidth: "50vw"}}} variant="rectangular" height={"20vh"} />)
          }
        </NewsWrapper>
      </NewsContainer>
    )
}

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const Title = styled.h1`
  font-size: 2rem;
`

const NewsContainer = styled.div`
  padding: 1em 0em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  height: 100%;
  max-width: 100%;
`