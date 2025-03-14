import React, { useState, memo } from "react";

function App() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
  return (
    <>
      {cats.map((name, i) => (
        <PureCat key={i} name={name} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
        Add a cat
      </button>
    </>
  );
}

/*
const Cat = ({ name }) => {
  console.log(`rendering ${name}`);
  return <p>{name}</p>;
};
*/

const Cat = memo(({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`);
  <PureCat
    key={i}
    name={name}
    meow={(name) => console.log(`${name} has meowed`)}
  />;
  return <p onClick={() => meow(name)}>{name}</p>;
});

/*
const PureCat = memo(Cat);
*/

const PureCat = memo(
  Cat,
  (cpevProps, nextProps) => prevProps.name === nextProps.name
);

const RenderCatOnce = memo(Cat, () => true);
const AlwaysRenderCat = memo(Cat, () => false);
