import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

window.System.import("baseC").then((res) => {
  const Components = res.default[0];
  console.log("Components", Components);

  ReactDOM.render(
    <React.StrictMode>
      <Components />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
