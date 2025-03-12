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

/*
const fn = useCallback(() => {
  console.log("hello");
  console.log("word");
}, []);

useEffect(() => {
  console.log("fresh render");
  fn();
}, [fn]);
*/

/*
const useJazzyNews = () => {
  const [_posts, setPosts] = useState([]);
  const addPost = (post) => setPosts((allPosts) => [post, ...allPosts]);

  const posts = useMemo(() => _posts, [_posts]);

  useEffect(() => {
    newPostChime.play();
  }, [posts]);

  useEffect(() => {
    newsFeed.subscribe(addPost);
    return () => newsFeed.unsubscribe(addPost);
  }, []);

  useEffect(() => {
    welcomeChime.play();
    return () => {
      goodbyeChime.play();
    };
  }, []);
  return posts;
};
*/
