import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Bar = () => {
  debugger;
  const [a] = useState(0);
  return <div>456, {a}</div>;
};

window.System.import("baseC").then((res) => {
  const Components = res.default[0];
  console.log("Components", Components);

  ReactDOM.render(
    <React.StrictMode>
      <Components />
      {/* <Bar /> */}
    </React.StrictMode>,
    document.getElementById("root")
  );
});
