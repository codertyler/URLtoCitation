import React, { useState } from "react";
import "./Input.css";
import axios from "axios";
import test_data from "../helpers/test_data.js";

export default function Input() {
  const [dataArray, setDataArray] = useState([]);

  const clicked = (event) => {
    event.preventDefault();
    const inputText = [event.target.previousSibling.value];
    const citationData = [];

    // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    // getUrlData(inputText);

    for (let url of inputText) {
      citationData.push(
        axios.post("/api/URLs", { params: url }).then((response) => {
          if (response.data === "URL is not supported!") {
            setDataArray("URL is not supported");
          } else {
            return response.data;
          }
        })
      );

      Promise.all(citationData).then((data) => {
        if (data[0] === undefined || data === undefined || citationData[0] === "URL is not supported!") {

          setDataArray("URL is not supported");
          return;
        } else {
          setDataArray(test_data(data, inputText));
          return;
        }
      });
    }
  };

  return (
    <div className="input_container">
      <form className="main_form">
        <textarea className="textfield"></textarea>
        <input type="submit" onClick={clicked} />
      </form>
      <br />
      <div>{dataArray}</div>
    </div>
  );
}
