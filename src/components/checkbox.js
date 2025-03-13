/*
function Checkbox() {
  const [cheked, setChecked] = useState(false);

  function toggle() {
    setChecked((cheked) => !cheked);
  }

  return (
    <>
      <input type="checkbox" value={cheked} onChange={toggle} />
      {cheked ? "cheked" : "not cheked"}
    </>
  );
}
*/

const { useReducer } = require("react");

function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={cheked} onChange={toggle} />
      {checked ? "checked" : "not cheked"}
    </>
  );
}
