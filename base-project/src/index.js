import React from "react";
import ReactDOM from "react-dom";

window.System.set("app:React", React);

window.System.import("baseC").then((res) => {
  const Components = res.default[0];
  ReactDOM.render(
    <React.StrictMode>
      <Components />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
