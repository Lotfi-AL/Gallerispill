import React from "react";
import { saveState } from "../components/App";

export function Save(props: saveState) {
  localStorage.setItem("landed", props.landed.toString());
}

export function Load() {
  let data = localStorage.getItem("landed");
  console.log(data);
}
