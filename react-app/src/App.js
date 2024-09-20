import './App.css';

const tahoe_peaks = [
  { name: "Feel", elevaion: 10891},
  { name: "Monument Peak", elevaion: 10067},
  { name: "Pyramid", elevaion: 9983},
  { name: "Tallac", elevaion: 9735},
]

function List({data, renderItem, renderEmpty}) {
    return (!data.length ? (
      renderEmpty
      ) : (
      <ul>{data.map( (item) => (
      <li key={item.name}>
        {renderItem(item)}
      </li>
      )
    )}</ul>)
    );
}

function App() {

  return (
      <List
      data={tahoe_peaks}
      renderEmpty={<p>This list is empty</p>}
      renderItem={
        (item) => {
          return (
          <>
          {item.name} - {item.elevaion} ft.
          </>
          )
        }
      }
      />
  )
}

export default App;
