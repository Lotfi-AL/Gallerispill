import React from "react";
import { useStatus } from "./StatusProvider";

export default function Ask() {
  const { status, setStatus } = useStatus();
  const change = () => {
    const rain = status.rain;
    const wind = status.wind;
    const fire = true;
    setStatus({ rain, wind, fire });
  };
  return (
    <div>
      <h1>YOLO</h1>
      <button onClick={() => change()}>Click me</button>
    </div>
  );
}
