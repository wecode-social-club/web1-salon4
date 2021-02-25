//import DetailCategory from './DetailCategory';

const DetailCat = (props) => {
  return (
    <div>
      <div class="shortcut_list_item_image">
        <img src={props.img} class="shortcut_list_item_image_icons" />
      </div>
      <a>{props.name}</a>
    </div>
  );
};

export default DetailCat;
