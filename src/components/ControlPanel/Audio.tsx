import React from "react";
import { StatusContext } from "./../../StatusContext";
import rainSrc from "../../assets/soundeffects/rain.mp3";
// import fireSrc from "../../assets/soundeffects/fire.mp3";
import windSrc from "../../assets/soundeffects/wind.mp3";
import Sound from "./Sound";

export default function Audio() {
  return (
    <StatusContext.Consumer>
      {({ rain, wind, fire }) => {
        return (
          <React.Fragment>
            <Sound src={rainSrc} ter={!rain} />
            <Sound src={windSrc} ter={!wind} />
          </React.Fragment>
        );
      }}
    </StatusContext.Consumer>
  );
}
