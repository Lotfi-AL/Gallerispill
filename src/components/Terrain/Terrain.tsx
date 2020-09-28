import React, { useEffect, useRef } from "react";
import skyTexture from "../../assets/terrain/sky_fc.png";
import farMountainsTexture from "../../assets/terrain/far_mountains_fc.png";
import grassyMountainsTexture from "../../assets/terrain/grassy_mountains_fc.png";
import rainTexture from "../../assets/terrain/rain.png";
import "./Terrain.css";
import Cloud from "./Cloud";
import { useStatus } from "../Store/StatusProvider";

const Terrain = () => {
    const { status, currScene, scene } = useStatus();
    const clouds: JSX.Element[] = [];
    const rainDrops: JSX.Element[] = [];
    const snowFlakes: JSX.Element[] = [];

    for (let i = 0; i <= Math.floor(Math.random() * (6 - 3 + 1) + 3); i++) {
        clouds.push(<Cloud />);
    }

    const Rain = () => {
        console.log(scene[currScene]);
        if (scene[currScene].rain === true && scene[currScene].wind === false) {
            for (let i = 0; i < 200; i++) {
                rainDrops.push(<div className="drop"></div>);
            }
            return <div className="rain">{rainDrops}</div>;
        } else if (scene[currScene].rain == true && scene[currScene].wind == true) {
            for (let i = 0; i < 200; i++) {
                rainDrops.push(<div className="drop wind"></div>);
            }
            return <div className="rain">{rainDrops}</div>;
        } else return null;
    };

    const Skybox = () => {
        let divName = "";
        if (status.night == true) {
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
    };

    return (
        <>
            <Rain></Rain>
            <Skybox></Skybox>
        </>
    );
};

export default Terrain;
