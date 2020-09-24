import * as React from "react";
import Landingpage from "../Landingpage/Landingpage";
import Game from "../Game/Game";
import { StatusContext, defaultStatus, statusType } from "./StatusContext";
import Audio from "../ControlPanel/Audio";

type Props = {
  children: React.ReactNode;
};

export const StatusProvider = ({ children }: Props) => {
  const [status, setStatus] = React.useState(defaultStatus);

  React.useEffect(() => {
    const currentStatus = defaultStatus;
    setStatus(currentStatus);
  }, []);

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = () => React.useContext(StatusContext);
