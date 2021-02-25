import data from "./data";

const Todaycard = (props) => {
  return (
    <div className="content-wrap">
      <div className="card-wrap">
        <div className="card">
          <img className="content-image" src={props.img} />
        </div>
      </div>
      <div className="content-area">
        <div className="sub-content">{props.sub_title}</div>
        <div className="main-content">{props.title}</div>
      </div>
    </div>
  );
};

export default Todaycard;
