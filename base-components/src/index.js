import React, { useState } from "react";

const Foo = () => {
  const [str] = useState("workd");
  return <div>hello, {str}</div>;
};

export default [Foo];
