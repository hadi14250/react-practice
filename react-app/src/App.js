import './App.css';
import { useState, useEffect } from 'react';

function App() {

    const userName = "hadi14250"

  const [data, setData] = useState(null);
  useEffect(
    () => {
      fetch(
        `https://api.github.com/users/${userName}`
        ).then((response) => {
            response.json().then(setData);
        }
        , []
        );
  }
  )
    if (data)
      return (
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      )

  return (
    <div className="App">

    <h1>
      Data
    </h1>

    </div>
  );
}

export default App;
