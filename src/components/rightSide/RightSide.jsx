import React, { useState } from "react";
import "./rightSide.css";
import { Link } from "react-router-dom";

import {
  UilSetting,
  UilHome,
  UilBell,
  UilCommentAltPlus,
  UilSignin,
} from "@iconscout/react-unicons";
import Trendcard from "../trendCard/Trendcard";
import ShareModel from "../shareModel/ShareModel";

const RightSide = () => {
  const [modelOpened, setModelOpened] = useState(false);

  return (
    <div className="rightSide">
      <div className="navIcons">
        <div className="iconSvg">
          <UilHome />
          <UilSetting />
          <UilBell />
          <UilCommentAltPlus />
          <Link className="link" to="/auth">
            <UilSignin />
          </Link>
        </div>
      </div>

      <Trendcard />

      <button className="button r-button" onClick={() => setModelOpened(true)}>
        Share
      </button>
      <ShareModel modelOpened={modelOpened} setModelOpened={setModelOpened} />
    </div>
  );
};

export default RightSide;
