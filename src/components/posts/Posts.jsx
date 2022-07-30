import React from "react";
import "./posts.css";
import { PostsData } from "../../Data/PostsData";
import Post from "../post/Post";

const Posts = () => {
  return (
    <div className="posts">
      {PostsData.map((post, id) => {
        return <Post data={post} key={id} />;
      })}
    </div>
  );
};

export default Posts;
