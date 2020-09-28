import React from "react";
import { statusType } from "../../components/Store/StatusContext";
import Cloud from "./Cloud";

export default function Skybox(status: statusType) {
    const clouds: JSX.Element[] = [];

    for (let i = 0; i <= Math.floor(Math.random() * (5 - 3 + 1) + 3); i++) {
        clouds.push(<Cloud />);
    }

    let divName = "";
    let windDiv = "";
    if (status.night === true) {
        divName = "night";
    } else divName = "day";

    if (status.wind === true) {
        windDiv = "wind";
    } else windDiv = "";

    return (
        <div className={"skybox " + divName}>
            <div className={"cloud one " + windDiv}>{clouds}</div>
            <div className={"cloud two " + windDiv}>{clouds}</div>
            <div className={"cloud three " + windDiv}>{clouds}</div>
            <div className={"cloud four " + windDiv}>{clouds}</div>
        </div>
    );
}
