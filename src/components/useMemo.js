import React, { useEffect, useMemo, useMomo } from "react";

/*
const words = useMemo(() => {
  const words = children.split(" ");
  return words;
}, []);

useEffect(() => {
  console.log("fresh render");
}, []);
*/

/*
const words = useMemo(() => children.split(" "));
*/

function WordCount({ cgildren = "" }) {
  useAnyKeyToRender();

  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

	return (...)
}
