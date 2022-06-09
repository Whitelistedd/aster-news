import React from 'react';
import styled from 'styled-components';

import { devices } from '../../MediaQueries';
import { Navbar } from '../Navbar/Navbar';
import { NewsGenerator } from '../NewsGenerator/NewsGenerator';
import { Sidebar } from '../Sidebar/Sidebar';
import { SideInformation } from '../SideInformation/SideInformation';

export const NewsHeader = ({title,category} : {title : string, category: string}) => {
  return (
    <Container>
        <Sidebar />
        <Header>
            <Navbar />
            <Information>
                <NewsGenerator title={title} category={category} />
                <SideInformation />
            </Information>
        </Header>
    </Container>
  )
}

const Information = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  width: 100%;
`

const Header = styled.header`
  width: 100%;
`

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #F4F9F8;

  @media only screen and (max-width: ${devices.Laptop}) {
    ${Information} {
      padding: 2em;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}) {
    ${Information} {
      padding: 0em;
      text-align: center;
    }
  }
`