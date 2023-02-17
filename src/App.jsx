import React, { useState, useEffect } from "react";
//import axios from "axios";
import { jokeOptions } from "./api";

const apiUrl = "https://jokeapi-v2.p.rapidapi.com/joke/";

const App = () => {
  const [data, setData] = useState("");
  
  

  const getRandomJoke = () => {
    const jokeDataFetch = fetch(`${apiUrl}Any?type=twopart&format=json&idRange=0-150&blacklistFlags=nsfw%2Cracist`,jokeOptions);
    Promise.all([jokeDataFetch])
  .then(async(response) => {
    const jokeResponse = await response[0].json();
    setData(jokeResponse);
    console.log(jokeResponse)
  })
  };
  
  useEffect(() => {
    getRandomJoke();
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="box" >
      <h4> {data.setup}</h4>
      <p> {data.delivery}</p>
      <button onClick={handleRefresh}>Generate Joke</button>
    </div>
    </div>
  );
};

export default App;

// React.useEffect(() => {
//   axios.get(apiUrl).then((res) => {
//     setData(res.data);
//     console.log(data);
//   });
// }, []);

// axios
//   .get("https://jokeapi-v2.p.rapidapi.com/joke/Any")
//   .then((res) => {
//     setData(res.data);
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//   fetch(`${apiUrl}Any?format=json&contains=C%2523&idRange=0-150&blacklistFlags=nsfw%2Cracist`, options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));
// }
