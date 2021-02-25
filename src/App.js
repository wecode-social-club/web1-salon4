import Category from "./Components/Category/Category";
import CategorySearch from "./Components/CategorySearch/CategorySearch";
import CoverImage from "./Components/CoverImage/CoverImage";
import DetailCategory from "./Components/DetailCategory/DetailCategory";
import InteriorReview from "./Components/InteriorReview/InteriorReview";
import TodayDeal from "./Components/TodayDeal/TodayDeal";
import TodayHotPhoto from "./Components/TodayHotPhoto/TodayHotPhoto";
import TodayStory from "./Components/TodayStory/TodayStory";
import TodayExhibition from "./Components/TodayExhibition/TodayExhibition";
import RecommendFurniture from "./Components/RecommendFurniture/RecommendFurniture";
import Best from "./Components/Best/Best";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Category />
      <CoverImage />
      <DetailCategory />
      <TodayStory />
      <CategorySearch />
      <TodayDeal />
      <TodayHotPhoto />
      <InteriorReview />
      <TodayExhibition />
      <RecommendFurniture />
      <Best />
    </div>
  );
}

export default App;
