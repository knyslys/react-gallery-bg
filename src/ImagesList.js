import styles from "./ImagesList.module.css";
import ImageItem from "./ImageItem";

const ImagesList = (props) => {
  // const imageClickHandler = (image) => {
  //   props.setImage(image);
  //   console.log(image);
  // };
  const renderImages = props.images.map((image) => (
    <ImageItem
      img={image}
      setImage={(img) => props.setImage(img)}
      key={Math.random()}
      currentImage={props.currentImage}
    ></ImageItem>
  ));

  return <ul className="gallery-imageslist">{renderImages}</ul>;
};
export default ImagesList;
