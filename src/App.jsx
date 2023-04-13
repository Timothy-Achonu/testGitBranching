import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>In main branch</h1>
        <h1>another line in main</h1>
    </div>
  )
}

export default App
