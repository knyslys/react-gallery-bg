import "./ImageItem.css";
import { useState } from "react";
const ImageItem = (props) => {
  const [selectedClass, setSelectedClass] = useState("selectedImg");
  return (
    <li
      className={`gallery-imageWrapper ${
        props.currentImage.url === props.img.url ? selectedClass : ""
      }`}
      onClick={() => {
        if (props.currentImage.url === props.img.url) {
          return;
        } else {
          props.setImage(props.img);
        }
      }}
    >
      <img src={props.img.url} alt={props.img.alt} />
    </li>
  );
};

export default ImageItem;
