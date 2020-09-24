import React from "react";
import { StatusContext } from "../Store/StatusContext";
import rainSrc from "../../assets/soundeffects/rain.mp3";
import windSrc from "../../assets/soundeffects/wind.mp3";
import Sound from "./Sound";
import { useStatus } from "../Store/StatusProvider";

export default function Audio() {
  const { status, setStatus } = useStatus();
  return (
    <React.Fragment>
      <Sound src={rainSrc} ter={!status.rain} />
      <Sound src={windSrc} ter={!status.wind} />
    </React.Fragment>
  );
}
