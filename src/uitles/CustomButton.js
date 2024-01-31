import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const CustomButton = ({ backgroundColor, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles = {
    width: "150px",
    height: "38px",
    backgroundColor: isHovered ? "orange" : backgroundColor || "#FF384A",
    color: "white",
    border: "none",
    borderRadius: "20px",
    fontSize: "10px",
  };

  return (
    <Button
      variant="contained"
      style={buttonStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
