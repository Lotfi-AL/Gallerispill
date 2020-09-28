import React from "react";
import { saveStorage } from "../../utils/LoadSave";
import { useStatus } from "../Store/StatusProvider";
import saveIcon from "../../assets/icons/save.svg";
export default function SaveBtn() {
    const { scene, setScene, currScene } = useStatus();
    return (
        <button onClick={() => saveStorage(scene, currScene)}>
            <img src={saveIcon} className="link controlPanelBtn" />
        </button>
    );
}
