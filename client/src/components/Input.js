import React, { useState, useEffect } from "react";
import "./Input.css";
import axios from "axios";
import test_data from "../helpers/test_data.js";
import Result from "../components/Result";
import Tested from "../components/Tested";

export default function Input() {
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setLoading] = useState(true);



  const clicked = (event) => {
    event.preventDefault();
    const inputText = [event.target.parentElement.childNodes[0].value];
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
        if (
          data[0] === undefined ||
          data === undefined ||
          citationData[0] === "URL is not supported!"
        ) {
          setDataArray("URL is not supported");
          return;
        } else {
          
          setLoading(false);
          setDataArray(test_data(data, inputText));

          return;
        }
      });
    }
  };

  // if (isLoading) {
  //   return <div><h1>LOADING..</h1></div>;
  // }

  return (
    <>
      <div className="input_container">
        {dataArray.length < 1 ? <Tested /> : <Result data={dataArray} /> }
        <form className="main_form">
          <input
            type="url"
            placeholder="Paste the link of your article"
            className="main_input"
            required
          ></input>
          <br />
          <button type="submit" class="btn btn-primary" onClick={clicked}>
            Generate Citation
          </button>
        </form>
        <br />
      </div>
    </>
  );
}
