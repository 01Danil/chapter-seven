const { useLayoutEffect } = require("react");

function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setheyght] = useState(0);

  const resize = () => {
    setWindth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    windows.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return [width, height];
}

function useMousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setPosition = ({ x, y }) => {
    setX(x);
    setY(y);
  };

  useLayoutEffect(() => {
    window.addEventListener("mousemove", setPosition);
    return () => {
      window.removeEventListener("mousemove", setPosition);
    };
  }, []);

  return [x, y];
}
