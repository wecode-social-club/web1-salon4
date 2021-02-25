import storyData from "./storyData";

const Story = (props) => {
  return (
    <div className="story">
      <div className="img-wrap">
        <img src={props.img} className="story-img" />
      </div>
      <p className="story-name">{props.title}</p>
      <div className="nickname">
        <img src={props.photo} className="nickname-img" />
        <div className="nickname-name">{props.nickname}</div>
      </div>
    </div>
  );
};

export default Story;
