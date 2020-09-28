import React from "react";
import { loadStorage, saveStorage } from "../../utils/LoadSave";
import { useStatus } from "../Store/StatusProvider";

type Props = {
    children: React.ReactNode;
};

export const LoadBtn = () => {
    const { setScene, currScene } = useStatus();
    return (
        <div className="box link startLink" onClick={() => setScene(loadStorage().scene)}>
            Load Previous Save
        </div>
    );
};
