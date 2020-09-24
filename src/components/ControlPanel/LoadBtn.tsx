import React from "react";
import { loadStorage, saveStorage } from "../../utils/LoadSave";
import { useStatus } from "../Store/StatusProvider";
export default function LoadBtn() {
    const { status, setStatus } = useStatus();
    return <button onClick={() => setStatus(loadStorage())}>Load</button>;
}
