import { Skeleton } from '@mui/material';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { fetchAllNews } from '../../redux/requests';
import { AppDispatch, useAppSelector } from '../../redux/store';
import { News } from '../News/News';

const SkeletonCount = [1,2,3,4,5]

const key = process.env.REACT_APP_NEWS_APIKEY as string

interface Props {
  title: string,
  category: string
}

export const NewsGenerator : React.FC<Props> = ({title,category}) => {

    const dispatch = AppDispatch()
    const news = useAppSelector((state) => state.NewsData);
  
    useEffect(() => {
      const getNews = async () => {
          dispatch(fetchAllNews({category,key}))
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