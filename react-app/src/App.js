import './App.css';
import { useState, useReducer } from 'react';

function App() {
  const [emotion, setEmotion] = useState("Happy");
  const [secondEmotion, setSecondEmotion] = useState("Tired");
  const [buttonName, setButtonName] = useState("Change To Sad");
  const [secondButtonName, setSecondButtonName] = useState("Change To Grateful");

  const [checked, setChecked] = useReducer((checked) => !checked, false);

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

        <br></br>
        <br></br>

        <input type='checkbox' value={checked} onChange={ setChecked }>
        </input>
        <label>
          {
            checked ? "checked" : "not checked"
          }
        </label>

    </div>
  );
}

export default App;
