import React from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Feed.css";
import { Posts } from "../../dummyData";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
