import React from "react";
import "./Test.css";

export default function Tested() {
  return (
    <div className="tested_websites_container">
      <div>
      <h2>APA Style Citation Generator*</h2>
      <p>
        *Tested on most of the major news and research outlets <b>such as</b>
      </p>
      </div>
      <div className="tested_websites">
        <div>
          Wall Street Journal <br />
          The Economist
          <br />
          ABC News
          <br />
          The New Yorker
          <br />
          Huffington Post
          <br />
          Washington Post
          <br />
        </div>
        <div>
          Forbes
          <br />
          Reuters
          <br />
          Associated Press
          <br />
          Global News
          <br />
          CBC News
          <br />
          BBC news
        </div>
      </div>
    </div>
  );
}
