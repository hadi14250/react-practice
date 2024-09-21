import './App.css';
import { Link } from "react-router-dom";

function Navbar()
{
  return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
  )
}

export function Home() {
  return (
    <div>
      < Navbar />
      <h1>
        Home
      </h1>
    </div>
  )
}

export function About () {
    return(
      <div>
        < Navbar />
        <h1>
          About Us
        </h1>
      </div>
    )
}

export function Contact() {
  return (
    <div>
      < Navbar />
      <h1>
        Contact Us
      </h1>
    </div>
  )
}

export function App() {

  return (
    <Home />
  )
}