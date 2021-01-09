import React, { useState } from "react";
import "./Input.css";
import axios from "axios";

export default function Input() {
  const [dataArray, setDataArray] = useState([]);

  

  const clicked = (event) => {
    event.preventDefault();
    const inputText = event.target.previousSibling.value.split(/\n/);

    // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

    // getUrlData(inputText);

    axios.post("/api/URLs", { params: inputText }).then((response) => {
      console.log(response.data);

    });
  };

  return (
    <div className="input_container">
      <form className="main_form">
        <textarea className="textarea"></textarea>
        <input type="submit" onClick={clicked} />
      </form>
      <br/>
      <div> the data: {dataArray}</div>
    </div>
  );
}
