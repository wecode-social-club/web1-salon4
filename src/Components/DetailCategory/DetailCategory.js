import React from "react";
import "./DetailCategory.scss";
import DetailCat from "./DetailCat.js";
import DetailData from "./DetailData.js";

function DetailCategory() {
  return (
    <div className="DetailCategory">
      <nav class="container_shortcut">
        {DetailData.map((detailcategory) => {
          return (
            <DetailCat name={detailcategory.name} img={detailcategory.img} />
          );
        })}
        <div>
          <div class="shortcut_list_item_image">
            <img
              class="shortcut_list_item_image_icons"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-161189514980123298.png/512/none"
            />
          </div>
          <div class="shortcut_list_item_link_title">쇼핑하기</div>
        </div>

        <div>
          <div class="shortcut_list_item_image">
            <img
              class="shortcut_list_item_image_icons"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-161353257690240195.png/512/none"
            />
          </div>
          <div class="shortcut_list_item_link_title">오다페</div>
        </div>

        <div>
          <div class="shortcut_list_item_image">
            <img
              class="shortcut_list_item_image_icons"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-160909186405816450.png/512/none"
            />
          </div>
          <div class="shortcut_list_item_link_title">평수별집구경</div>
        </div>

        <div>
          <div class="shortcut_list_item_image">
            <img
              class="shortcut_list_item_image_icons"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-160909188084120199.png/512/none"
            />
          </div>
          <div class="shortcut_list_item_link_title">공간별사진</div>
        </div>
        <div>
          <div class="shortcut_list_item_image">
            <img
              class="shortcut_list_item_image_icons"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-160909189188927608.png/512/none"
            />
          </div>
          <div class="shortcut_list_item_link_title">시공간편상담</div>
        </div>
        <div>
          <div class="shortcut_list_item_image">
            <img
              class="shortcut_list_item_image_icons"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-161190765145788618.png/512/none"
            />
          </div>
          <div class="shortcut_list_item_link_title">주방리모델링</div>
        </div>
        <div>
          <div class="shortcut_list_item_image">
            <img
              class="shortcut_list_item_image_icons"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-161297012491180093.png/512/none"
            />
          </div>
          <div class="shortcut_list_item_link_title">가이드북</div>
        </div>
        <div>
          <div class="shortcut_list_item_image">
            <img
              class="shortcut_list_item_image_icons"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-160909194338020578.png/512/none"
            />
          </div>
          <div class="shortcut_list_item_link_title">질문과답변</div>
        </div>
      </nav>
    </div>
  );
}

export default DetailCategory;
