import React from "react";
import "./CoverImage.scss";

function CoverImage() {
  return (
    <div className="CoverImage">
      <div className="CoverWrap">
        <div className="ImageWraper">
          <img
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/161045923837734185.jpeg?gif=1&w=850&h=567&c=c"
            alt="메인이미지"
          />
        </div>
        <div className="TextWrap">
          <h1>11년 된 판상형 아파트, 내추럴 우드 무드로 새롭게.</h1>
          <div className="profile">
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/161068268927519574.jpeg?gif=1&w=72&h=72&c=c" />
            <span>위코드 소셜클럽 웹반 1기 :)</span>
          </div>
        </div>
        <div className="moreBtn">보러가기</div>
      </div>
    </div>
  );
}
export default CoverImage;
