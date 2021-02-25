import Star from "./star";

const ReviewInfo = (props) => {
  return (
    <div>
      <div className="review_wrap" href={props.review_wrap}>
        <div className="review_img_wrap">
          <img className="review_img" src={props.review_img} />
        </div>
        <div className="under_img">
          <div className="review_star">{Star}</div>
          <div className="review_info">{props.review_info}</div>
          <div className="interior_com">
            <img className="interior_com_icon" src={props.interior_com_icon} />
            <p className="interior_com_name">{props.interior_com_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewInfo;

// [Data].map((props) => {
//     console.log(props);
//     return (

//             {/* here1 */}

//             <div>
//               <div className="review_img_wrap">
//                 <img
//                   className="review_img"
//                   src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/expert_reviews/158900733741260663.jpg?gif=1&w=720&h=720&c=c"
//                 />
//               </div>
//               <div className="under_img">
//                 <div className="review_star">
//                   <img id="each_star" src={Star} />
//                 </div>
//                 <div className="review_info">
//                   "첫 미팅부터 취향과 니즈를 정확히 파악하시고 이후 자재선정이나
//                   시공시 의견수렴을 잘해주셔서 좋았습니다. 더우기 감각있는
//                   조언으로 완성도가 높아져 더욱 뿌듯합니다. 미니멀의 장점을 살리고
//                   디테일의 소중함을 아는 인코인테리어를 만나 부분 리모델링(거실,
//                   주방, 베란다 일부)이었지만 큰 만족감을 느낍니다."
//                 </div>
//                 <div className="interior_com">
//                   <img
//                     className="interior_com_icon"
//                     src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/157318831047135730.jpg?gif=1&w=72"
//                   />
//                   <p className="interior_com_name">인코인테리어</p>
//                 </div>
//               </div>
//             </div>

//             {/* here1 */}
//           </div>

//           <div
//             className="review_wrap"
//             href="https://ohou.se/users/5585308?affect_type=Home"
//           >
//             <div>
//               {/* here2 */}

//               <div className="review_img_wrap">
//                 <img
//                   className="review_img"
//                   src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/expert_reviews/160121309118089503.jpg?gif=1&w=720&h=720&c=c&webp=1"
//                 />
//               </div>
//               <div className="under_img">
//                 <div className="review_star">
//                   <img id="each_star" src={Star} />
//                 </div>
//                 <div className="review_info">
//                   제한된 예산을 가지고 처음 인테리어 업체 여럿과 견적을 냈을 때
//                   가장 현실적이고 합리적인 방법과 금액을 제시한 업체가 바로 이
//                   젊은 김사장님과 박실장님의 두드림이었어요~ (평당 얼마여야한다,
//                   꼭 여긴 수리해야한다며 어이없이 고압적인 자세로 나오는 다른
//                   업체도 있었고, 견적은 맞았지만 신뢰가 잘 가지 않는 유명업체도
//                   있었죠~) 저 나름대로는 아파트 리모델링을 처음 해보는 게
//                   아니었고, 가까이 인테리어 종사자 지인을 여럿 두고 있어 아주
//                   문외한이 아니었던터라, 이를 기준으로 가능한 시간 약속이 확실하고
//                   마무리가 깔끔한 업체를 찾고 싶었습니다~ 일단 두드림에 만족한
//                   이유 중에 가장 중요한 부분은 제가 원하는 부분에 대해 함께
//                   고민해주시고, 의견을 긍정적으로 조율해 주신다는 것이었어요~ 예를
//                   들어 저는 싱크대 하부장만 교체를 원했는데, 어떻게 해야 최상의
//                   결과를 얻을 수 있는지 가이드라인을 제시해주신다던가, 천장부분과
//                   아트월을 그대로 살리고 나머지의 분위기를 최대한 맞추는 것에 대해
//                   의견을 주시는 것 등이요~ 저로서는 정해진 금액 안에서 만족할만한
//                   가성비 디자인을 원했는데 그게 생각 이상으로 가능했습니다~ 또한
//                   제가 스킵하고 넘어가려는 인테리어 부분에 있어서도 왜 그게
//                   필요한지, 무엇을 빼고 무엇을 넣어야 하는지 조언을 아끼지
//                   않으셨구요~ 누구든 비용을 충분히 들일 수 있는 조건이라면
//                   인테리어 리모델링이 아주 쉬울 테지만, 예산이 빡빡하게 정해져
//                   있는 한도에서 맘에 들게 하는게 매우 까다로운 법이잖아요?
//                   저로서는 들인 견적에 비해 아주 좋은 결과물이 나와서 너무
//                   좋았어요~ 의견조율 방식도 너무 좋았구요~^^ 마감할때에도 대충
//                   하고 끝내시지 않고, 제가 체크한 것 이상으로 꼼꼼하게
//                   잘해주셨구요~ 마지막에 엉망으로 끝내고마는 업체들에 대한
//                   이야기를 많이 들었는데, 이 부분에 대한 염려가 전혀 안되는
//                   업체였어요~ 만일 청주에서 인테리어를 고민하고 있으신 분이 있다면
//                   저는 두드림 강추드립니다~ (추후 인테리어도 두드림에 부탁드릴
//                   예정이예요~)
//                 </div>
//                 <div className="interior_com">
//                   <img
//                     className="interior_com_icon"
//                     src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/158215913963573611.png?gif=1&w=72&webp=1"
//                   />
//                   <p className="interior_com_name">인코인테리어</p>
//                 </div>
//               </div>
//             </div>

//             {/* here2 */}
//           </div>

//           <div
//             className="review_wrap"
//             href="https://ohou.se/users/5585308?affect_type=Home"
//           >
//             {/* here3 */}

//             <div>
//               <div className="review_img_wrap">
//                 <img
//                   className="review_img"
//                   src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/expert_reviews/160852118328103905.jpg?gif=1&w=720&h=720&c=c&webp=1"
//                 />
//               </div>
//               <div className="under_img">
//                 <div className="review_star">
//                   <img id="each_star" src={Star} />
//                 </div>
//                 <div className="review_info">
//                   30년 가까이 된 오래된 아파트를 구매하게 되면서 인테리어에 대한
//                   고민이 많이 있었는데요. 특히 15개월된 아기가 있다 보니
//                   방방곳곳을 찾아볼 여건이 되지 않아 주변지인의 추천을 받아
//                   긴가민가하며 찾아갔어요. 첫 미팅때 저희부부와 생각이 잘 맞는다고
//                   생각해서 주저하지 않고 확실한 마음의 결정을 내려서 인테리어를
//                   진행하게 되었어요. 이전 집주인분은 이 집에서 10년 이상을
//                   사셨다고 해요. 그래서 인지 바닥은 아파트 분양할때 그대로
//                   타일바닥이였고 오래된 벽지와 장판 등 손길이 필요한 곳이 많이
//                   있었어요. 30평형대지만 주방이 작고 아담해서 어떻게하면
//                   편리하면서도 요즘 갬성(?)을 담을지 정말 많은 고민을 했는데,
//                   실장님이 굿아이디어로 센스있는 주방이 탄생했어요. 저희의 취향을
//                   많이 반영해주시고 실장님의 인테리어 센스가 만나서 지금의 집이 된
//                   것 같아 행복하게 잘 지내고 있어요.^^
//                 </div>
//                 <div className="interior_com">
//                   <img
//                     className="interior_com_icon"
//                     src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/158521269021577594.jpg?gif=1&w=72&webp=1"
//                   />
//                   <p className="interior_com_name"> 씨리아이디(CiIi)</p>
//                 </div>
//               </div>
//             </div>
//             {/* here3 */}
//           </div>
//         </div>
//       </div>
//     );
//   });

// export default InteriorReview;
