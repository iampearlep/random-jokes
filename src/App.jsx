import React, { useState, useEffect} from "react";
//import axios from "axios";
import { jokeOptions } from "./api";

const apiUrl = "https://humor-jokes-and-memes.p.rapidapi.com/jokes/";

const App = () => {
  const [data, setData] = useState([]);
  
  const getRandomJokeData = () => {
   fetch(`${apiUrl}random?max-length=200&include-tags=one_liner&min-rating=7&exclude-tags=nsfw&keywords=rocket`, jokeOptions)
   .then(res => res.json())
   .then((json) => setData(json));
  };

  useEffect(() =>{
    getRandomJokeData();
  }, []);


  
  
 
  return <div>
    {data.joke}
  </div>;
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
