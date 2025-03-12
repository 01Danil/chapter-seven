import React, { useEffect, useLayoutEffect } from "react";

function App() {
  useEffect(() => console.log("useEffect"));
  useLayoutEffect(() => console.timeLog("useLayoutEffect"));
  return <div>ready</div>;
}
