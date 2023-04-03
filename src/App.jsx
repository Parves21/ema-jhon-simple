import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderSection from './Component/Header/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderSection></HeaderSection>
    </div>
  )
}

export default App
