import './App.css';
import { useState, useEffect } from 'react';

function GithubUser(
  {
    name, login, followers, following, avatar, location
  }
  )
  {
  return (
     <div>
      <h1>
      {name}
      </h1>
      <p>User Name: {login}</p>

      <p>Location: {location}</p>
      <p>Followers: {followers}</p>
      <p>following: {following}</p>
      <p>profile picture:</p>
      <img
      src={avatar}
      alt={name + " Profile Picture"}
      height={200}
      >
      </img>
     </div>
  )
}

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
        <GithubUser
        name={data.name}
        location={data.location}
        login={data.login}
        followers={data.followers}
        following={data.following}
        avatar={data.avatar_url}
        />
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
