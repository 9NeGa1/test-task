import React from 'react'
import Container from './components/container'
import CardList from './components/card-list.tsx'
import Filter from './components/filter'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ItemPage from './pages/ItemPage'

const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/item/:id" element={<ItemPage/>}/>
        
      </Route>
   
    </Routes>

  )
}

export default App
