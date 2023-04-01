import { useState } from 'react'
import snailLogo from './assets/images/snail.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
          <img src={snailLogo} className="logo" alt="Snail Logo" />
      </div>
      <h1>Snail Cancel</h1>
      <p className="read-the-docs">
        Lorem Ipsum sit dolor amet avec qua.
      </p>
    </div>
  )
}

export default App
