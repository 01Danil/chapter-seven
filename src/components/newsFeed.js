function NewsFeed({ url }) {
  const posts = useJazzyNews();

  return (
    <>
      <h1>{posts.length}</h1>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
}
