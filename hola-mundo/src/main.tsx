import React from "react";
import ReactDOM from "react-dom/client";
import { Card } from "./assets/components/Card/Card";
import "./main.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  const twitterUser = {
    name: "Tom",
    user: "tommy",
    isFollowing: true,
  };

  root.render(
    <>
      <Card name="Diego Osorio" user="osoriodiego" isFollowing={false} />
      <Card name="Elon" user="muskelon" isFollowing={false} />
      <Card {...twitterUser} />
    </>
  );
}
