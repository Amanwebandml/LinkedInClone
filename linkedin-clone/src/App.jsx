import { useState } from 'react'
import { Header } from './components/header'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Feed } from './components/Feed'

function App() {

  return (
    <div className='bg-[#f3f2ef] flex flex-col items-center'>
      <Header></Header>
      <div className='flex'>
        <Sidebar className></Sidebar>
        <Feed></Feed>
      </div>
    </div>
  )
}

export default App
