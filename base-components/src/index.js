import React, { useState } from "react";

const Foo = () => {
  const [str] = useState("workd");
  console.log("useState");

  return <div>hello,</div>;
};

export default [Foo];
