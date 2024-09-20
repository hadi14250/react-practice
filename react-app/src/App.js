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
      height={150}
      >
      </img>
     </div>
  )
}

function App() {

    const userName = "hadi14250"

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);

      fetch(
        `https://api.github.com/users/${userName}`
        ).then((response) => {
            response.json().then(setData).then(
              () => {
                setLoading(false);
              }
            ).catch (
              setError // .catch function will automatically pass the error as a first argument to setError
            );
        }
        ,
        );
  }, []
  )

  if (loading) return(<h1>Loading...</h1>);
  if (error)
    return(<pre>{JSON.stringify(error)}</pre>)
  if (!data)
    return(<h1>failed to fetch {userName} info</h1>)

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
}

export default App;
