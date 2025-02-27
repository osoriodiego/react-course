import React from "react";
import ReactDOM from "react-dom/client";
import { Card } from "./assets/components/Card";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(<Card />);
}
