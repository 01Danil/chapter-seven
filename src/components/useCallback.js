/*
const fn = () => {
  console.log("hello");
  console.log("world");
};

useEffect(() => {
  console.log("fresh render");
  fn();
}, [fn]);
*/

const fn = useCallback(() => {
  console.log("hello");
  console.log("word");
}, []);

useEffect(() => {
  console.log("fresh render");
  fn();
}, [fn]);
