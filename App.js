import React from "react";
import Weather from "./components/Weather";

export default class App extends React.Component {
  render() {
    return <Weather zipCode="91110" />;
  }
}
