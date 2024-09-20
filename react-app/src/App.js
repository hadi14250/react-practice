import './App.css';
import { useState } from 'react';

function App() {
  const [emotion, setEmotion] = useState("Happy");
  const [buttonName, setButtonName] = useState("Change To Sad");
  return (
    <div className="App">
        <h1>
          Current Emotion is {emotion}
        </h1>

        <button onClick={
          () => {
            if (emotion === "Happy")
              setEmotion("Sad");
            else
              setEmotion("Happy");
            
            if (buttonName === "Change To Sad")
              setButtonName("Change To Happy");
            else
              setButtonName("Change To Sad");
          }
        }>
          {buttonName}
        </button>

    </div>
  );
}

export default App;
