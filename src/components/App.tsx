import React, { Component } from "react";
import Landingpage from "./Landingpage/Landingpage";
import Poetry from "./Poetry/Poetry";
import Game from "./Game/Game";
import { StatusContext, status, statusType } from "./../StatusContext";
import Audio from "./ControlPanel/Audio";
type MyState = {
  landed: boolean;
  status: statusType;
};

interface ToggleProps {
  ClickHandler: () => void;
}

export class App extends React.Component<{}, MyState> {
  state: MyState = { landed: true, status: status };
  constructor(props: any) {
    super(props);
    this.toggleClickHandler = this.toggleClickHandler.bind(this);
  }


  toggleClickHandler = () => {
    this.setState((prevState) => {
      if (prevState.landed === true) {
        return { landed: false };
      }
      if (prevState.landed === false) {
        return { landed: true };
      }
    });
  };
  setStatus = (newStatus: statusType) => {
    this.setState((state) => ({
      status: newStatus,
    }));
  };

  render() {
    if (this.state.landed) {
      return <Landingpage ClickHandler={this.toggleClickHandler}></Landingpage>;
    }
    return (
      <StatusContext.Provider value={this.state.status}>
        <Game></Game>
        <Audio></Audio>
      </StatusContext.Provider>
    );
  }
}
