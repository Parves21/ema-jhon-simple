import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderSection from './Component/Header/Header'
import Products from './Component/Products/shop'
import Cards from './Component/Products/products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderSection></HeaderSection>
      <Products></Products>
    </div>
  )
}

export default App
