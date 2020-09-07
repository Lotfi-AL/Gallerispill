import * as React from "react";
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = () => (
  <h1>
    Hello World!
  </h1>
);