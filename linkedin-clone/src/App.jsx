import { useState } from 'react'
import { Header } from './components/header'
import './App.css'
import { Sidebar } from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#f3f2ef] flex flex-col items-center'>
      <Header></Header>
      <div className='flex'>
        <Sidebar></Sidebar>
      </div>
    </div>
  )
}

export default App
