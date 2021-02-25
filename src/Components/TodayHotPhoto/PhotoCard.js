import React from "react";

const PhotoCard = (props) => {
  return (
    <a className="photoCard" href="/">
      <img className="cardImg" src={props.hotImg} alt="" />
      {props.rank < 4 ? <span className="rankIcon">{props.rank}</span> : null}
      {props.isMulti && (
        <svg
          className="multiphotoIcon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fill-rule="evenodd"
            d="M20.21 5.053h.788A3.004 3.004 0 0 1 24 8.055v12.943A3.004 3.004 0 0 1 20.998 24H8.055a3.004 3.004 0 0 1-3.002-3.002v-.787h11.165c2.199 0 3.993-1.788 3.993-3.993V5.053zM0 3.003A3.004 3.004 0 0 1 3.002 0h12.943a3.004 3.004 0 0 1 3.002 3.002v12.943a3.004 3.004 0 0 1-3.002 3.002H3.002A3.004 3.004 0 0 1 0 15.945V3.002z"
          ></path>
        </svg>
      )}
      <div className="profileArea">
        <img className="profileImg" src={props.profileImg} alt="" />
        <span className="profileName">{props.profileName}</span>
      </div>
    </a>
  );
};

export default PhotoCard;
