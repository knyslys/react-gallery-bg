import "./SelectedImage.css";
import { motion } from "framer-motion";

const SelectedImage = (props) => {
  const variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };
  return (
    <div className="gallery-selectedImage">
      <motion.img
        variants={variants}
        initial="initial"
        animate="animate"
        key={Math.random()}
        src={props.image.url}
        alt={props.image.alt}
      />
    </div>
  );
};

export default SelectedImage;
