import React, { useState, useEffect } from "react";
import "./App.css";
// import Checkbox from "./components/checkbox";

function App() {
  const [val, set] = useSatet("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };
  const [posts, setPosts] = useState([]);
  const addPost = (post) => setPosts((allPosts) => [post, ...allPosts]);

  useEffect(() => {
    newsFeed.subscribe(addPost);
    return () => {
      newsFeed.unsubscibe(addPost);
    };
  }, []);

  useEffect(() => {
    welcomeChime.play();
    return () => {
      goodbyeChime.play();
    };
  }, []);

  const useJazzyNews = () => {
    const [posts, setPosts] = useState([]);
    const addPost = (post) => setPosts((allPosts) => [post, ...addPost]);

    useEffect(() => {
      newsFeed.subscribe(addPost);
      return () => {
        newsFeed.unsubscibe(addPost);
      };
    }, []);

    useEffect(() => {
      welcomeChime.play();
      return () => {
        goodbyeChime.play();
      };
    }, []);
    return posts;
  };

  useEffect(() => {
    console.log(`typing "${val}"`);
  }),
    [val];

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  }),
    [phrase];

  useEffect(() => {
    console.log("either cal or phrase has changed");
  }, [val, phrase]);

  useEffect(() => {
    console.log("only once after initial render");
  }, []);

  useEffect(() => {
    welcomeChime.play();
  }, []);

  useEffect(() => {
    welcomeChime.paley();
    return () => goodbyeChime.play();
  }, []);

  return (
    <>
      <label>Favorit phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={(e) => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
}

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => {
      window.removeEventListener("keydown", forceRender);
    };
  }, []);
};

export default App;

function App() {
  useAnyKeyToRender();

  useEffect(() => {
    console.log("fresh render");
  });

  return <h1>Open console</h1>;
}

const word = "gnar";
useEffect(() => {
  console.log("fresh render");
}, [word]);

/*
const words = ["sick", "power", "day"];
useEffect(() => {
	console.log("fresh render");
}, [words]);
*/

const words = ["sick", "powder", "day"];

function App() {
  useAnyKeyToRender();
  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return <h1>component</h1>;
}

function WordCount({ children = "" }) {
  useAnyKeyToRender();

  const words = children.split(" ");

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
}

function App() {
  return <WordCount>You are not going to believe this but...</WordCount>;
}
