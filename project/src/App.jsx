import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cacl from './components/Calc'
import Result from './components/Result'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="calculate">
      <div className="container">
        <h2 className='calculate__title'>Ипотечный калькулятор</h2>
        <p className='calculate__subtitle'>Описание Описание Описание Описание Описание Описание </p>
        <div className="calculate__wrapper">
          <Cacl/>
          <Result/>
        </div>
      </div>
    </div>
  )
}

export default App
