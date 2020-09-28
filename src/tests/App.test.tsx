import { App } from "../components/App";
import renderer from "react-test-renderer";
import React from "react";

test("app_snapshot", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
