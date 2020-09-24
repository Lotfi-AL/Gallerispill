import React from "react";
export type statusType = {
    rain: boolean;
    wind: boolean;
    night: boolean;
};
export type StatusContextType = {
    status: statusType;
    setStatus: (value: statusType) => void;
};

export let defStatus = {
    rain: false,
    wind: false,
    night: false,
};

export const StatusContext = React.createContext<StatusContextType | undefined>(undefined);
