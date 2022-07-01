import { Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getAllNews } from '../../redux/requests';
import { useAppSelector } from '../../redux/store';
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

const LoadingArray = [1,2,3,4,5]

const key = process.env.REACT_APP_NEWS_APIKEY

export const NewsGenerator : React.FC<Props> = ({title,category}) => {

    const { search } = useAppSelector(state => state.persisted)
    const [news,setNews] = useState<StateType[]>([])
    const [filteredNews,setFilteredNews] = useState<StateType[]>([])

    /* искать в новостях */
    useEffect(() => {
      if(!search) {
        setFilteredNews([])
        return;
      }
      setFilteredNews(news.filter(news => news.title.toLowerCase().includes(search)))
    },[search])


    /* получает все новости из API */
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
          
        { /* если есть что-то в отфильтрованных новостях (верно только в том случае, если пользователь что-то ищет), 
            он покажет отфильтрованные новости, и если пользователь что-то не ищет, то покажет все новости, а если он ищет что-то несуществующее, 
            то покажет загрузку или покажет загрузка при загрузке */

          filteredNews?.length !== 0 ?
          filteredNews?.map((article,index) => (
            <News key={index} url={article.link} source={article.rights} publishedDate={article.published_date} title={article.title} Desc={article.summary} ImageSrc={article.media} />
          ))
          :
          news?.length !== 0 && filteredNews?.length === 0 ?
          news?.map((article,index) => (
            <News key={index} url={article.link} source={article.rights} publishedDate={article.published_date} title={article.title} Desc={article.summary} ImageSrc={article.media} />
          ))
          : LoadingArray.map((skeleton,index) => <Skeleton key={index} sx={{borderRadius: "10px", minWidth: "60vw", minHeight: "20vh", lg: {minWidth: "50vw"}}} variant="rectangular" height={"20vh"} />)
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