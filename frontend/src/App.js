// Importing modules
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [data, setData] = useState({
		name: "",
		age: 0,
		date: "",
		programming: "",
	});

  function getData(){
    axios({
      method:"GET",
      url: "/data",
    })
    .then((response) =>{
      const res = response.data
      setData(({
        name: res.Name,
        age: res.Age,
        date: res.Date,
        programming: res.programming}))
    }).catch ((error) => {
      if(error.response){
      console.log(error.response)
      console.log(error.response.status)
      console.log(error.response.headers)
    }
    })}

	return (
		<div className="App">
			<header className="App-header">
        <p>to check:</p> <button onClick={getData}>check</button>
				{ data && 
          <div>
            <h1>React and flask</h1>
            <p>{data.name}</p>
            <p>{data.age}</p>
            <p>{data.date}</p>
            <p>{data.programming}</p>
          </div>
        }

			</header>
		</div>
	);
}

export default App;

