import { useState } from 'react'
import { Header } from './components/header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
    </div>
  )
}

export default App
