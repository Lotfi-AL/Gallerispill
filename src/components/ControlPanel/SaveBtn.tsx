import React from "react";
import { saveStorage } from "../../utils/LoadSave";
import { useStatus } from "../Store/StatusProvider";
export default function SaveBtn() {
  const { status, setStatus } = useStatus();
  return <button onClick={() => saveStorage(status)}>save</button>;
}
