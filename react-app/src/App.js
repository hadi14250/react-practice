import './App.css';
import { useRef } from 'react';

function App() {

  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    
    e.preventDefault();

    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);

    txtTitle.current.value = "";
    hexColor.current.value = "";

  }

  console.log(txtTitle, " ", hexColor);

  return (
    <div className="App">

    <form onSubmit={
      submit
    }>

      <input 
      type='text'
      placeholder='color title...'
      ref={txtTitle}
      >
      
      </input>

      <input
      type='color'
      ref={hexColor}
      >

      </input>

      <button>
        ADD
      </button>

    </form>

    </div>
  );
}

export default App;
