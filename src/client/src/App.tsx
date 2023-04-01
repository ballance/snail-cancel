import { useState } from 'react'
import snailLogo from './assets/images/snail.png'
import './assets/css/App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Navbar";
import Form from "./components/Form";

function App() {
  const [showResults, setShowResults] = useState(0)

  function greeter(displayText: string) {

    alert(displayText);
  }

  return (
    <div className="App">
      {/* <Nav /> */}
      <div className="introLogo">
          <img src={snailLogo} className="logo" alt="Snail Logo" />
      </div>
      <div className="Landing">
      <h1>Snail Cancel</h1>
      <p className="read-the-docs">
        Let the snail cancel with mail.
      </p>
      <Button as="a" variant="primary"
       onClick={() => greeter("Let\'s Cancel a service with a Snail!")}
      >Get Started</Button>
      </div>
      <div className="SnailCancelForm">
        <Form />
      </div>
    </div>
  )
}

export default App
