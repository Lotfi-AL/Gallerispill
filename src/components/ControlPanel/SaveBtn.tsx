import React from "react";
import { saveStorage } from "../../utils/LoadSave";
import { useStatus } from "../Store/StatusProvider";
import saveIcon from "../../assets/icons/save.svg";
export default function SaveBtn() {
    const { status, setStatus } = useStatus();
    return (
        <button onClick={() => saveStorage(status)}>
            <img src={saveIcon} className="link controlPanelBtn" />
        </button>
    );
}
