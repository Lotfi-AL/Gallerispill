import * as React from "react";
import Landingpage from "../Landingpage/Landingpage";
import Game from "../Game/Game";
import { StatusContext, defStatus, statusType } from "./StatusContext";
import Audio from "../ControlPanel/Audio";
import { loadSession, saveSession } from "../../utils/LoadSave";

type Props = {
  children: React.ReactNode;
};

export const StatusProvider = ({ children }: Props) => {
  let defaultStatus: statusType;
  if (loadSession()) {
    defaultStatus = loadSession();
  } else {
    defaultStatus = defStatus;
  }
  const [status, setStatus] = React.useState(defaultStatus);

  React.useEffect(() => {
    saveSession(status);
  }, [status]);
  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = () => React.useContext(StatusContext);
