import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Contextapp} from './context/Contextapp'

import Header from "./components/Header"
import Feed from "./components/Feed"
import SearchResult from "./components/SearchResult"
import VideoDetails from "./components/VideoDetails"

function App() {
  return (
    <Contextapp>
    <BrowserRouter>
    <div className='flex flex-col h-full'>
    <Header/>
      <Routes>
        <Route path='/' element={<Feed/>} />
        <Route path='/searchResult/:searchQuery' element={<SearchResult/>} />
        <Route path='/video/:id' element={<VideoDetails/>} />
      </Routes>

    </div>

    </BrowserRouter>
    </Contextapp>
  )
}

export default App