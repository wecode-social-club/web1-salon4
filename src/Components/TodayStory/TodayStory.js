import React from "react";
import "./TodayStory.scss";
import Story from "./Story";
import storyData from "./storyData";

function TodayStory() {
  return (
    <div className="TodayStory">
      <h2 className="title">오늘의 스토리</h2>
      <div className="story-wrap">
        {storyData.map((element) => {
          return (
            <Story
              img={element.img}
              title={element.title}
              photo={element.photo}
              nickname={element.nickname}
            />
          );
        })}
        <div className="storyMenu">
          <div className="sMenu">
            <div className="sMenu_sub">예쁜 집 구경하기</div>
            <div className="sMenu_title">집들이</div>
          </div>
          <div className="sMenu">
            <div className="sMenu_sub">전문가</div>
            <div className="sMenu_title">집들이</div>
          </div>
          <div className="sMenu">
            <div className="sMenu_sub">예쁜 집 구경하기</div>
            <div className="sMenu_title">집들이</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayStory;
