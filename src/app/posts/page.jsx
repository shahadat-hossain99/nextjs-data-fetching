// ! type-function to use safely
// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

// ?type-Advanced version of data fetch
// const getPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
//   } catch (err) {
//     throw new Error("Failed to fetch Error");
//   }
// };

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch Error");
  }

  return res.json();
};

const PostPage = async () => {
  //! Recap Fetching in next.js (module-43-cl-02)

  // !Type-normal  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await res.json();

  const posts = await getPosts();

  return (
    <div>
      <h2>Posts:{posts.length}</h2>
    </div>
  );
};

export default PostPage;
