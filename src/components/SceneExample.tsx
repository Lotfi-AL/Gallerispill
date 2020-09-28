import React from "react";
import { useStatus } from "./Store/StatusProvider";
export default function SceneExample() {
    const { scene, setScene, currScene, setCurrScene } = useStatus();

    const leggo = () => {
        console.log("hey");
        console.log(scene);
        const currStatus = scene[currScene];
        console.log(currStatus);
    };
    return (
        <div>
            <button onClick={leggo}> Trykk på meg</button>
        </div>
    );
}
