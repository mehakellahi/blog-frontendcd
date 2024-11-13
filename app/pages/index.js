// pages/index.js
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container my-4">
        <section className="row">
          {posts.map((post) => (
            <div className="col-md-4" key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
