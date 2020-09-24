import React from "react";
import { saveState } from "../components/App";
import { statusType } from "../components/Store/StatusContext";
import { useStatus } from "../components/Store/StatusProvider";

export function saveStorage(status: statusType) {
  localStorage.setItem("rain", status.rain.toString());
  localStorage.setItem("wind", status.wind.toString());
  localStorage.setItem("night", status.night.toString());
}

export function loadStorage() {
  const rain = localStorage.getItem("rain") === "true";
  const wind = localStorage.getItem("wind") === "true";
  const night = localStorage.getItem("night") === "true";
  const status: statusType = { rain, wind, night };
  return status;
}

export function loadSession() {
  const rain = sessionStorage.getItem("rain") === "true";
  const wind = sessionStorage.getItem("wind") === "true";
  const night = sessionStorage.getItem("night") === "true";
  const status: statusType = { rain, wind, night };
  return status;
}

export function saveSession(status: statusType) {
  sessionStorage.setItem("rain", status.rain.toString());
  sessionStorage.setItem("wind", status.wind.toString());
  sessionStorage.setItem("night", status.night.toString());
}
