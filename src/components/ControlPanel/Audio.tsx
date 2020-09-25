import React, { useEffect, useRef, useState } from "react";
import { StatusContext } from "../Store/StatusContext";
import rainSrc from "../../assets/soundeffects/rain.mp3";
import windSrc from "../../assets/soundeffects/wind.mp3";
import { useStatus } from "../Store/StatusProvider";
import mutebtn from "../../assets/icons/play.svg";
import muteIcon from "../../assets/icons/volume-up.svg";
import unmuteIcon from "../../assets/icons/volume-mute.svg";

type mutedType = {};
export default function Audio() {
    const audioRef = useRef(null);

    const [muted, setMuted] = useState(true);
    const { status, setStatus } = useStatus();

    useEffect(() => {
        const rainRef = audioRef.current.children[1];
        const windRef = audioRef.current.children[2];
        status.rain ? rainRef.play() : rainRef.pause();
        status.wind ? windRef.play() : windRef.pause();
    });

    return (
        <React.Fragment>
            <div className="audio muteBtn" ref={audioRef} onClick={() => setMuted(!muted)}>
                <img src={muted ? unmuteIcon : muteIcon} className="playPauseBtn link" />
                <audio src={rainSrc} muted={muted} autoPlay loop></audio>;
                <audio src={windSrc} muted={muted} autoPlay loop></audio>
            </div>
        </React.Fragment>
    );
}
