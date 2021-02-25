import React from "react";
import "./TodayExhibition.scss";
import Todaycard from "./Todaycard";
import data from "./data";

function TodayExhibition() {
  return (
    <div className="TodayExhibition">
      <div className="title-area">
        <div className="title"> 오늘의 기획전 </div>
      </div>
      {/* 1번 콘텐츠 */}
      <div className="container">
        {data.map((card) => {
          return (
            <Todaycard
              img={card.img}
              sub_title={card.sub_title}
              title={card.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodayExhibition;
