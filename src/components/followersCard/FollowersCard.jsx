import React from "react";
import "./followersCard.css";
import { Followers } from "../../Data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>Who is following you!</h3>

      {Followers.map((follower, id) => {
        return (
          <div key={id} className="follower">
            <div>
              <img src={follower.img} className="followerImg" alt="" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
