import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [emotion, setEmotion] = useState("Happy");
  const [secondEmotion, setSecondEmotion] = useState("Tired");
  const [buttonName, setButtonName] = useState("Change To Sad");
  const [secondButtonName, setSecondButtonName] = useState("Change To Grateful");
  useEffect(
    () => {
      console.log(`It's ${emotion} right now`);
    }, [emotion]
  )

  useEffect(
    () => {
      console.log(`It's second emotion is ${secondEmotion}`);
    },
    [secondEmotion, emotion]
  )

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
          { buttonName }
        </button>

        <h2>
          Current Second Emotion is {secondEmotion}
        </h2>
        <button onClick={
          () => {
            if(secondEmotion === "Grateful")
              setSecondEmotion("Tired");
            else
              setSecondEmotion("Grateful");
            if(secondButtonName === "Change To Grateful")
              setSecondButtonName("Change To Tired");
            else
              setSecondButtonName("Change To Grateful");
          }
        }>
          {secondButtonName}
        </button>

    </div>
  );
}

export default App;
