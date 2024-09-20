import './App.css';

const [firstCity, secondCity] = ["Tokyo", "Dubai", "Abu Dhabi", "Paris"];

console.log(secondCity)

function App({ library }) {
  return (
    <div className="App">
        <h1>
          Hello From {library}
        </h1>
    </div>
  );
}

export default App;
