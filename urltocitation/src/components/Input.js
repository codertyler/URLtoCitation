import React, { useState } from "react";
import "./Input.css";
import axios from "axios";

export default function Input() {
  const [dataArray, setDataArray] = useState([]);

  

  const clicked = (event) => {
    event.preventDefault();
    const inputText = event.target.previousSibling.value.split(/\n/);
    console.log(inputText);
    const citationData = [];
    // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

    // getUrlData(inputText);

    for(let url of inputText) {
      axios.post("/api/URLs", { params: url }).then((response) => {
        
        citationData.push(response.data);
        // console.log(response.data);
        // setDataArray(JSON.stringify(response.data));
        // setDataArray(`${response.data.lastName}, ${response.data.initial}, ${response.data.publicationDate}  ${"<h1>"} ${response.data.title} ${"</h1>"}, ${response.data.publisher}, ${response.data.url}`)
        
      });
      console.log(citationData);
    }
    

    
  };

  return (
    <div className="input_container">
      <form className="main_form">
        <textarea className="textarea"></textarea>
        <input type="submit" onClick={clicked} />
      </form>
      <br/>
      <div><i>{dataArray}</i></div>
    </div>
  );
}
