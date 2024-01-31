import React from "react";

import Paper from "@mui/material/Paper";

import Carousel from "react-material-ui-carousel";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const images = [
  {
    imgPath:
      "https://www.coffeehit.co.uk/cdn/shop/articles/Untitled_2000_x_1000px_6_2000x.png?v=1654051728",
  },
  {
    imgPath:
      "https://slicelife.imgix.net/16634/photos/original/banner-pizza-min_(1).jpg?auto=compress&auto=format",
  },
  {
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREASpNKTm8S-H6drlZ2GYh62kLbAbW8VypnQ&usqp=CAU",
  },
  {
    imgPath:
      "https://www.manoramaonline.com/content/dam/mm/ml/pachakam/top-carousel/biriyani.jpg",
  },
];

const CustomCarousel = () => {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");
  return (
    <Carousel autoPlay animation="slide" timeout={1000}>
      {images.map((image, index) => (
        <Paper key={index}>
          <img
            src={image.imgPath}
            alt={`Slide ${index + 1}`}
            style={{
              width: isSmallScreen ? "100%" : "100%", // Adjust width for smaller screens
              height: isSmallScreen ? "auto" : "auto", // Adjust height for smaller screens
              objectFit: "cover",
            }}
          />
        </Paper>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
