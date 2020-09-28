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
                <h1>Description</h1>
                <p>
                    This is a 2d immersive poem experience. Move with arrow keys and interact with scene components
                    using the spacebar. Read along with the poems as they are highlighted and go through the doors to
                    switch poem and scene. As you go along you can change the scene to your liking by interacting with
                    the paintings.
                </p>
            </div>
            <div className="credits">
                <div className="container box">
                    <p className="text">Created by</p>

                    <ul className="list">
                        <li className="item">Yeti</li>
                        <li className="item">Hobbit</li>
                        <li className="item">Gorilla</li>
                    </ul>
                </div>
            </div>
            <LoadBtn ClickHandler={props.ClickHandler}></LoadBtn>
            <div onClick={props.ClickHandler} className="box link startLink">
                Click to start!
            </div>
            <div className="box">
                <h2>Assets and sources</h2>
                <ul>
                    <li>
                        <a target="_blank" href="">
                            Poetry
                        </a>
                    </li>
                    <li>
                        SFX
                        <ul>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.fesliyanstudios.com/royalty-free-sound-effects-download/rain-21">
                                    Rain
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.fesliyanstudios.com/royalty-free-sound-effects-download/wind-blowing-37">
                                    Wind
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a target="_blank" href="https://oddpotatogift.itch.io/16x16-fantasy-pack">
                            House tileMap
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://thkaspar.itch.io/micro-character-bases">
                            Character
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://vnitti.itch.io/grassy-mountains-parallax-background">
                            Terrain
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://fonts.google.com/specimen/Press+Start+2P?sidebar.open=true&selection.family=Press+Start+2P">
                            Fonts
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://codepen.io/yoannhel/pen/sJpDj">
                            Credits animation
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
