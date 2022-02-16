import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
// import "./index.css";

console.log("$", $);
console.log("React", React);
console.log("React", ReactDOM);

window.System.import("baseC").then((res) => {
  const Components = res.default[0];
  console.log("Components", Components);

  ReactDOM.render(
    <React.StrictMode>
      <Components />
      {/* <div>12</div> */}
    </React.StrictMode>,
    document.getElementById("root")
  );
});

// ReactDOM.render(
//   <React.StrictMode>
//     <Components />
//     {/* <div>12</div> */}
//   </React.StrictMode>,
//   document.getElementById("root")
// );
