import React from "react";
export type statusType = {
  rain: boolean;
  wind: boolean;
  fire: boolean;
};
export const status = {
  rain: false,
  wind: false,
  fire: false,
};

export const StatusContext = React.createContext(status);
