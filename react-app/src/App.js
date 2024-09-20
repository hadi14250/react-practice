import './App.css';
import { useState } from 'react';

function App() {
  const [emotion, setEmotion] = useState("Happy");
  let [buttonName, setButtonName] = useState("Sad");
  return (
    <div className="App">
        <h1>
          Current Emotion is {emotion}
        </h1>

        <button onClick={
          () => {
            if (buttonName === "Sad")
              setButtonName("Happy");
            else
              setButtonName("Sad");
            if (emotion === "Happy")
              setEmotion("Sad");
            else
              setEmotion("Happy");
          }
          } >
          {buttonName}
        </button>
    </div>
  );
}

export default App;
