import React from "react";
import "./post.css";
import { UilCommentAltPlus, UilTelegramAlt } from "@iconscout/react-unicons";

const Post = ({ data }) => {
  return (
    <div className="post">
      <img src={data.img} alt="" />

      <div className="postReact">
        <img
          src={
            data.liked
              ? "https://p.kindpng.com/picc/s/119-1190155_red-heart-emoji-png-heart-symbol-images-download.png"
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTVRtDMp6fMo05a21EQAujFU6fSZtFg2728sVvHvfC48SGVwJOEUxz536T1R0j8d-lcU&usqp=CAU"
          }
          alt=""
        />
        <UilCommentAltPlus />
        <UilTelegramAlt />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
