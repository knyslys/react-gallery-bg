import "./App.css";
import img1 from "./Images/1.jpg";
import img2 from "./Images/2.jpg";
import img3 from "./Images/3.jpg";
import img4 from "./Images/4.jpg";
import img5 from "./Images/5.jpg";
import img6 from "./Images/6.jpg";
import { useState } from "react";
import SelectedImage from "./SelectedImage";
import ImagesList from "./ImagesList";
import Container from "./Container";
function App() {
  const imagesList = [
    {
      url: img1,
      alt: "First Image",
    },
    {
      url: img2,
      alt: "First Image",
    },
    {
      url: img3,
      alt: "First Image",
    },
    {
      url: img4,
      alt: "First Image",
    },
    {
      url: img5,
      alt: "First Image",
    },
    {
      url: img6,
      alt: "First Image",
    },
  ];
  const [selectedImage, setSelectedImage] = useState(imagesList[0]);

  const setImageHandler = (image) => {
    setSelectedImage(image);
  };
  return (
    <Container className="gallery">
      <SelectedImage image={selectedImage} />
      <ImagesList
        images={imagesList}
        setImage={setImageHandler}
        currentImage={selectedImage}
      />
    </Container>
  );
}

export default App;
