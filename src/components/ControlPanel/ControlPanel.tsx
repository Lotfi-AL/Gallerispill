import React, { Component } from "react";
import SaveBtn from "./SaveBtn";
import LoadBtn from "./LoadBtn";
export class ControlPanel extends Component {
    render() {
        return (
            <React.Fragment>
                <LoadBtn></LoadBtn>
                <SaveBtn></SaveBtn>
            </React.Fragment>
        );
    }
}

export default ControlPanel;
