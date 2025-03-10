import React, { useState } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);

  /*
  useEffect(() => {
    alert(`cheked: ${checked.toString()}`);
  });
	*/
  /*
  useEffect(() => {
    console.log(checked ? "Yes, chacked" : "No, not checked");
  });
	*/
  /*
  useEffect(() => {
    localStorage.setItem("checkbox-value", checked);
  });
	*/
  useEffect(() => {
    txtInputRef.current.focus();
  });

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}
