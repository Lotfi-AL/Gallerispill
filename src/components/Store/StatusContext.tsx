import React from "react";
export type statusType = {
  rain: boolean;
  wind: boolean;
  fire: boolean;
};
export type StatusContextType = {
  status: statusType;
  setStatus: (value: statusType) => void;
};

export const defaultStatus = {
  rain: false,
  wind: false,
  fire: false,
};

export const StatusContext = React.createContext<StatusContextType | undefined>(
  undefined
);
