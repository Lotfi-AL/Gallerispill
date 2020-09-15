import * as React from 'react';
import { Component } from 'react';
import Foreground from "./Foreground";
import "./Game.css";

export default class Game extends Component {
    constructor(props: Readonly<{}>) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <Foreground className="foreground"/>
        );
    }
}