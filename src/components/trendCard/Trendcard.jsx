import React from "react";
import "./trendCard.css";
import { TrendData } from "../../Data/TrendData";

const Trendcard = () => {
  return (
    <div className="trendCard">
      <h3>Trends for you</h3>
      {TrendData.map((trend) => {
        return (
          <div key={trend.name} className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default Trendcard;
