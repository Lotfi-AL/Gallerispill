import * as React from "react";
import Landingpage from "./Landingpage/Landingpage";
import "./App.css";
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = () => <Landingpage></Landingpage>;
