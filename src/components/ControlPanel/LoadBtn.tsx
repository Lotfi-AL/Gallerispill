import React from "react";
import { loadStorage, saveStorage } from "../../utils/LoadSave";
import { useStatus } from "../Store/StatusProvider";

type Props = {
  children: React.ReactNode;
};

export const LoadBtn = () => {
  const { status, setStatus } = useStatus();
  return (
    <div className="box link" onClick={() => setStatus(loadStorage())}>
      Load Previous Save
    </div>
  );
};
