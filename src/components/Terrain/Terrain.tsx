import React, { useEffect, useRef, useState } from "react";
import skyTexture from "../../assets/terrain/sky_fc.png";
import farMountainsTexture from "../../assets/terrain/far_mountains_fc.png";
import grassyMountainsTexture from "../../assets/terrain/grassy_mountains_fc.png";
import rainTexture from "../../assets/terrain/rain.png";
import "./Terrain.css";
import { useStatus } from "../Store/StatusProvider";
import { statusType } from "../Store/StatusContext";
import Skybox from "./Skybox";
import { Rain } from "./Rain";
import Mountain from "./Mountain";

const Terrain = () => {
    const { scene, currScene } = useStatus();
    const [status, setStatus] = useState(scene[currScene]);
    const snowFlakes: JSX.Element[] = [];

    useEffect(() => {
        setStatus(scene[currScene]);
    });

    return (
        <>
            <Mountain></Mountain>
            <Rain {...status}></Rain>
            <Skybox {...status}></Skybox>
        </>
    );
};

export default Terrain;
