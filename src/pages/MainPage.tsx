import React from 'react'
import Container from '../components/container'
import Filter from '../components/filter'
import CardList from '../components/card-list.tsx'

const MainPage = () => {
  return (
    <>
     <Container>
      <Filter/>
      <CardList/>
    </Container> 
    </>
  )
}

export default MainPage
