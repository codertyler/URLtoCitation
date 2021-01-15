import "./App.css";
import Input from "./components/Input";
import Tested from "./components/Tested";

function App() {
  return (
    <div className="App">
      <h1>APA Style Citation Generator*</h1>
      <p>*Tested on most of the major news and research outlets <b>such as</b></p>
      <Tested />
      <Input />
      <footer className="footer">
        <p>
          All rights reserved © Designed and coded by Tyler <br /> Visit my{" "}
          <a href="https://www.tylerasai.com" target="_blank" rel="noreferrer">
            {" "}
            Personal Page
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
