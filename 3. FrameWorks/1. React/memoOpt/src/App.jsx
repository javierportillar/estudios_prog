import { useState, memo } from 'react'
import { UseMemo } from './components/use-memo.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UseMemo></UseMemo>
    </>
  )
}

export default App
