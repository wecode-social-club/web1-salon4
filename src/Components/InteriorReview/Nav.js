import InteriorReview from "./InteriorReview";
import data from "./data";

const Nav = () => {
  console.log(data);
  return (
    <div className="contents">
      {data.map((detail) => {
        return <InteriorReview name={detail} />;
      });
      }
    </div>
  );
};
