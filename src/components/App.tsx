import React from "react";
import Landingpage from "./Landingpage/Landingpage";
import Poetry from "./Poetry/Poetry";
import Game from "./Game/Game";
import { StatusProvider } from "./Store/StatusProvider";
import Terrain from "./Terrain/Terrain";
import ControlPanel from "./ControlPanel/ControlPanel";

type MyState = {
    landed: boolean;
};

interface ToggleProps {
    ClickHandler: () => void;
}
export type saveState = {
    landed: boolean;
};

export class App extends React.Component<{}, MyState> {
    state: MyState = { landed: window.sessionStorage.getItem("landed") === "true" };

    constructor(props: any) {
        super(props);
        this.toggleClickHandler = this.toggleClickHandler.bind(this);
    }

    toggleClickHandler = () => {
        console.log("click");
        this.setState((prevState) => {
            if (prevState.landed === true) {
                return { landed: false };
            }
            if (prevState.landed === false) {
                return { landed: true };
            }
        });
    };

    render() {
        if (!this.state.landed) {
            return (
                <StatusProvider>
                    <Landingpage ClickHandler={this.toggleClickHandler}></Landingpage>
                </StatusProvider>
            );
        }
        return (
            <>
                <StatusProvider>
                    <Terrain></Terrain>
                    <ControlPanel></ControlPanel>
                    <Game></Game>

                    <Poetry></Poetry>
                </StatusProvider>
                <div className="rotate">
                    <h2>This website requires the use of a keyboard, please switch device and try again later.</h2>
                </div>
            </>
        );
    }
}
