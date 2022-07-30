import React, { useState } from "react";
import "./infoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModel from "../profileModel/ProfileModel";
import { Link } from "react-router-dom";

const InfoCard = () => {
  const [modelOpened, setModelOpened] = useState(false);

  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModelOpened(true)}
          />
          <ProfileModel
            modelOpened={modelOpened}
            setModelOpened={setModelOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Delhi</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>We Chat</span>
      </div>

      <button className="button logout-button">
        <Link className="link" to="/auth">
          Logout
        </Link>
      </button>
    </div>
  );
};

export default InfoCard;
