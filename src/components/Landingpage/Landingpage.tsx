import * as React from "react";
import "./Landingpage.css";
import "./Animation.css";
import { LoadBtn } from "./LoadBtn";

interface StatusCardProps {
    DefaultStatus: StatusTypes;
}

interface StatusCardState {
    Status: StatusTypes;
}
export interface ToggleProps {
    ClickHandler: () => void;
}

type StatusTypes = Boolean;

export default function Landingpage(props: ToggleProps) {
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
            <LoadBtn ClickHandler={props.ClickHandler}></LoadBtn>
            <div onClick={props.ClickHandler} className="box link startLink">
                Click to start!
            </div>
        </div>
    );
}
