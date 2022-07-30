import React from "react";
import "./profileCard.css";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  const ProfilePage = false;

  return (
    <div className="profileCard">
      <div className="profileImages">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sE4pJPW5mURs-ioS_Ha-HTzB9Bw3fPL-rA&usqp=CAU"
          alt=""
        />
        <img
          src="https://i1.sndcdn.com/avatars-000750823765-bivg7t-t500x500.jpg"
          alt=""
        />
      </div>

      <div className="profileName">
        <span>Nobita</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>7,241</span>
            <span>Followings</span>
          </div>

          <div className="vl"></div>

          <div className="follow">
            <span>8,251</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? (
        ""
      ) : (
        <span>
          <Link className="link" to="/profile">
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
