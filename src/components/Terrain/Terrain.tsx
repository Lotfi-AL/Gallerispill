import React, { useEffect } from "react";
import skyTexture from "../../assets/terrain/sky_fc.png";
import farMountainsTexture from "../../assets/terrain/far_mountains_fc.png";
import grassyMountainsTexture from "../../assets/terrain/grassy_mountains_fc.png";
import rainTexture from "../../assets/terrain/rain.png";
import "./Terrain.css";
import Cloud from "./Cloud";
import { useStatus } from "../Store/StatusProvider";

const Terrain = () => {
    const { status } = useStatus();
    const clouds: JSX.Element[] = [];
    const AddCloud = (min: number, max: number) => {
        for (let i = 0; i <= Math.floor(Math.random() * (max - min + 1) + min); i++) {
            clouds.push(<Cloud />);
        }
    };
    const Rain = () => {
        if (status.rain == true) {
            console.log("YESSSSSSS");
            const rainDrop: JSX.Element[] = [];
            for (let j = 0; j < 300; j++) {
                rainDrop.push(<i className="rain"></i>);
            }

            return <div className="rainContainer">{rainDrop}</div>;
        } else return null;
    };

    AddCloud(3, 6);
    return (
        <>
            <Rain></Rain>
            <div className="skybox day">
                <div className="cloud one">{clouds}</div>
                <div className="cloud two">{clouds}</div>
            </div>
        </>
    );
};

export default Terrain;
