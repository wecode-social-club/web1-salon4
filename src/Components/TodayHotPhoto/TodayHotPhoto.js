import React from "react";
import data from "./data";
import PhotoCard from "./PhotoCard";
import "./TodayHotPhoto.scss";

function TodayHotPhoto() {
  return (
    <div className="TodayHotPhoto">
      <div className="titleArea">
        <h1 className="sectionTitle">오늘의 인기 사진</h1>
        <a className="moreLink">더보기</a>
      </div>
      <div className="photoArea">
        {data.map((hotData) => {
          return (
            <PhotoCard
              hotImg={hotData.hotImg}
              isMulti={hotData.isMulti}
              profileImg={hotData.profileImg}
              profileName={hotData.profileName}
              rank={hotData.rank}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodayHotPhoto;
