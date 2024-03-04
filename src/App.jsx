import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layouteffect from './components/layouteffect'
import Callback from './components/callback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layouteffect />
      <Callback />
    </>
  )
}

export default App
