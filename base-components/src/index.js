import React, { useState } from "react";

const Foo = () => {
  const [str] = useState("workd");
  console.log("useState");

  return <div>hello,{str}</div>;
};

export default [Foo];
