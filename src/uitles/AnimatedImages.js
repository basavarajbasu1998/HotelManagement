import React, { useEffect, useState } from "react";
import { Zoom } from "@mui/material";

function AnimatedImages() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const images = [
    "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=",
    "https://png.pngtree.com/background/20220718/original/pngtree-bedroom-guest-room-five-star-hotel-picture-image_1662975.jpg",
    "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
  ];

  return (
    <div>
      <Zoom in={true} timeout={500}>
        <div
          style={{
            width: "700px",
            height: "350px",
            background: "lightblue",
            margin: "20px",
          }}
        >
          <img
            src={images[imageIndex]}
            alt={`Image ${imageIndex + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </Zoom>
    </div>
  );
}

export default AnimatedImages;
