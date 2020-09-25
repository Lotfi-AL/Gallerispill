import React, { Component } from "react";
import SaveBtn from "./SaveBtn";
import { LoadBtn } from "./LoadBtn";
import Audio from "./Audio";
import "./ControlPanel.css";
export class ControlPanel extends Component {
  render() {
    return (
      <React.Fragment>
        <SaveBtn></SaveBtn>
        <Audio></Audio>
        <a href="" onClick={() => window.sessionStorage.setItem("landed", "true")}>
          Go back to main menu
        </a>
      </React.Fragment>
    );
  }
}

export default ControlPanel;
