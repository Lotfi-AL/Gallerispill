import * as React from "react";
import Landingpage from "../Landingpage/Landingpage";
import Game from "../Game/Game";
import { StatusContext, defStatus, statusType, EnumStatus } from "./StatusContext";
import Audio from "../ControlPanel/Audio";
import { loadSession, saveSession } from "../../utils/LoadSave";

type Props = {
    children: React.ReactNode;
};

export const StatusProvider = ({ children }: Props) => {
    let defaultStatus: statusType;
    let defaultScene: statusType[] = [defStatus, defStatus, defStatus, defStatus, defStatus];
    let defaultCurrScene: number = 2;
    if (loadSession()) {
        let sess = loadSession();
        defaultScene = sess.scene;
        defaultCurrScene = sess.currScene;
    } else {
        defaultStatus = defStatus;
    }
    const [status, setStatus] = React.useState(defaultStatus);
    const [scene, setScene] = React.useState(defaultScene);
    const [currScene, setCurrScene] = React.useState(defaultCurrScene);
    React.useEffect(() => {
        saveSession(scene, currScene);
    }, [status, currScene]);

    return (
        <StatusContext.Provider value={{ status, setStatus, currScene, setCurrScene, scene, setScene }}>
            {children}
        </StatusContext.Provider>
    );
};

export const useStatus = () => React.useContext(StatusContext);
