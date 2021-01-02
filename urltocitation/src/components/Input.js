import React from 'react';
import "./Input.css";
import axios from 'axios';

export default function Input() {
  
  const clicked = (event) => {
    event.preventDefault();
    const inputText = event.target.previousSibling.value.split(/\n/);
    
    
    // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

    // getUrlData(inputText);

    axios
      .get('/api/URLs', {params: inputText});

   
      console.log(inputText);

  }
  
  return (
    <div className="input_container">
      <form className="main_form">
        <textarea className="textarea"></textarea>
        <input type="submit" onClick={clicked}/>
      </form>
    </div>
  )
}
