import './App.css';

export function Home() {
  return (
    <div>
      <h1>
        Home
      </h1>
    </div>
  )
}

export function About () {
    return(
      <div>
        <h1>
          About Us
        </h1>
      </div>
    )
}

export function Contact() {
  return (
    <div>
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