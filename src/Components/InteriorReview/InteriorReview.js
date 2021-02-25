import React from "react";
import "./InteriorReview.scss";
import ReviewInfo from "./ReviewContainer";
import Star from "./star";
import data from "./data";

function InteriorReview() {
  return (
    <div className="InteriorReview">
      <div className="Review_Title">
        <p className="users_interior">유저들의 인테리어 시공리뷰</p>
        <a
          className="more_expert"
          href="https://ohou.se/experts?affect_type=Home"
        >
          인테리어 전문가 더 찾기
        </a>
      </div>
      <div className="container_review">
        {/* here1 */}
        {data.map((props) => {
          console.log(props);
          return (
            <ReviewInfo
              review_img={props.img}
              review_info={props.info}
              interior_com_icon={props.icon_img}
              interior_com_name={props.name}
            />
          );
        })}

        {/* here1 */}
      </div>
    </div>
  );
}

export default InteriorReview;
