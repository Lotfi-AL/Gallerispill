import React, { useEffect } from "react";
import skyTexture from "../../assets/terrain/sky_fc.png";
import farMountainsTexture from "../../assets/terrain/far_mountains_fc.png";
import grassyMountainsTexture from "../../assets/terrain/grassy_mountains_fc.png";
import "./Terrain.css";
import Cloud from "./Cloud";

const Terrain = () => {
    let clouds: JSX.Element[] = [];
    const AddCloud = (min: number, max: number) => {
        for (let i = 0; i <= Math.floor(Math.random() * (max - min + 1) + min); i++) {
            clouds.push(<Cloud />);
        }
    };
    AddCloud(3, 6);

    return (
        <div className="skybox day">
            <div className="cloud one">{clouds}</div>
            <div className="cloud two">{clouds}</div>
        </div>
    );
};

export default Terrain;
