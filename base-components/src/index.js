import React, { useState } from "react";

const Foo = () => {
  debugger;
  const [str] = useState("workd");
  console.log("useState");

  return <div>hello,</div>;
};

export default [Foo];
