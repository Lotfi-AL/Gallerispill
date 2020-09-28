import { statusType } from "../Store/StatusContext";
import React from "react";

export const Rain = (status: statusType) => {
    const rainDrops: JSX.Element[] = [];
    if (status.rain === true && status.wind === false) {
        for (let i = 0; i < 200; i++) {
            rainDrops.push(<div className="drop"></div>);
        }
        return <div className="rain">{rainDrops}</div>;
    } else if (status.rain === true && status.wind === true) {
        for (let i = 0; i < 200; i++) {
            rainDrops.push(<div className="drop wind"></div>);
        }
        return <div className="rain">{rainDrops}</div>;
    } else return null;
};
