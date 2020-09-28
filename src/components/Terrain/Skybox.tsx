import React from "react";
import { statusType } from "../../components/Store/StatusContext";
import Cloud from "./Cloud";

export default function Skybox(status: statusType) {
    const clouds: JSX.Element[] = [];

    for (let i = 0; i <= Math.floor(Math.random() * (6 - 3 + 1) + 3); i++) {
        clouds.push(<Cloud />);
    }

    let divName = "";
    if (status.night === true) {
        divName = "night";
    } else {
        divName = "day";
    }
    return (
        <div className={"skybox " + divName}>
            <div className="cloud one">{clouds}</div>
            <div className="cloud two">{clouds}</div>
        </div>
    );
}
