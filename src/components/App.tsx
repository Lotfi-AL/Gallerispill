import * as React from "react";
import Game from "./Game/Game";
import "./App.css";

export interface HelloWorldProps {
    userName: string;
    lang: string;
}
export const App = () => (
    <Game></Game>
);
