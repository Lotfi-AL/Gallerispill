import * as React from "react";
import "./Landingpage.css";
import "./Animation.css";

export default function Landingpage() {
  return (
    <div className="landingpage">
      <div className="instructions box">
        <h1>Instruksjoner</h1>
        <p>What we do noobs</p>
      </div>
      <div className="credits">
        <div className="container box">
          <p className="text">Created by</p>

          <ul className="list">
            <li className="item">Amund Lunke Røhne</li>
            <li className="item">Lotfi Amin Lazreg</li>
            <li className="item">Sepehr Nasiri Behrouz</li>
          </ul>
        </div>
      </div>
      <a href="#">
        <div className="box link">Click to start!</div>
      </a>
    </div>
  );
}
