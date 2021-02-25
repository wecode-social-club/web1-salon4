import React from "react";
import "./Category.scss";
// import data from "./data";
import MenuItem from "./MenuItem";
import data from "./data";
import Search from "./search-9-24.png";

function Category() {
  return (
    <div className="Category">
      <div>
        <div className="Title-top">
          <div className="Main-title">
            <a
              className="title1"
              aria-label="오늘의 집"
              href="https://ohou.se/"
            >
              오늘의 집
            </a>
            <a className="title2" aria-label="커뮤니티" href="https://ohou.se/">
              커뮤니티
            </a>
            <a
              className="title3"
              aria-label="스토어"
              href="https://ohou.se/store"
            >
              스토어
            </a>
            <a
              className="title4"
              aria-label="인테리어 시공"
              href="https://ohou.se/experts"
            >
              인테리어 시공
            </a>
          </div>

          <div>
            <img className="seach-img" src={Search} />

            <a> 로그인 </a>
            <a> 회원가입 </a>
          </div>
        </div>

        <div className="sub-title">
          {data.map((menu) => {
            return (
              <div>
                <MenuItem name={menu} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
