import React from 'react'
import Input from "./Input"
import "./Main.css";  

export default function Main() {
  return (
      <div className="main_container">
      <div className="components_container">
        <h1>We make online citations easy!</h1>
        <h5>Use the generator and never manually type the citations for your article</h5>
        <Input />
       
      </div>

     
    </div>
  )
}
