import React from "react";
import { saveState } from "../components/App";
import { statusType } from "../components/Store/StatusContext";
import { useStatus } from "../components/Store/StatusProvider";

export function saveStorage(scene: statusType[], currScene: number) {
    localStorage.setItem("scene", JSON.stringify(scene));
    localStorage.setItem("currScene", currScene.toString());
}

export function loadStorage() {
    const scene: statusType[] = JSON.parse(localStorage.getItem("scene"));
    const currScene: number = Number(localStorage.getItem("currScene"));
    return { scene, currScene };
}

export function loadSession() {
    const scene: statusType[] = JSON.parse(sessionStorage.getItem("scene"));
    const currScene: number = Number(sessionStorage.getItem("currScene"));
    return { scene, currScene };
}

export function saveSession(scene: statusType[], currScene: number) {
    sessionStorage.setItem("scene", JSON.stringify(scene));
    sessionStorage.setItem("currScene", JSON.stringify(currScene));
}
