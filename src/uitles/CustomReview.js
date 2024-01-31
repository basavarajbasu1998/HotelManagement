import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Avatar,
  IconButton,
  Stack,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "antd";
import CustomButton from "./CustomButton";
import TextsmsIcon from "@mui/icons-material/Textsms";

const CustomReview = () => {
  const cardData = [
    {
      title: " '' '' ",
      content: "Profission",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU",
      discount:
        "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the",
    },
    {
      title: "NonVeg Meals",
      content: "Profission",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU",
      discount:
        "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the",
    },
    {
      title: "Dosa",
      content: "Profission",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU",
      discount:
        "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the",
    },
    {
      title: "UK Spacil",
      content: "Profission",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU",
      discount:
        "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the",
    },
    {
      title: "Samosa",
      content: "Profission",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU",
      discount:
        "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the",
    },
  ];

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        Next
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        Prev
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Set the number of cards to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {cardData.map((card, index) => (
        <Grid key={index} item>
          <Card
            className="custom-card"
            sx={{
              margin: "10px",
              boxShadow: "2px 2px 5px gray",
              borderRadius: "18px",
              transition: "background-color 0.3s", // Add transition for hover effect
              "&:hover": {
                backgroundColor: "orange",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ mt: 1, fontSize: "23px" }}
              >
                {/* {card.title} */}
                <IconButton sx={{ color: "blue" }}>
                  <TextsmsIcon fontSize="large" />
                </IconButton>
              </Typography>

              <Stack direction={"row"} spacing={3} sx={{ mt: 1 }}>
                <Avatar
                  src={card.image}
                  alt="Avatar Image"
                  sx={{
                    width: 100,
                    height: 100,
                    margin: "25",
                  }}
                />
                <Box>
                  <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
                    {card.content}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {card.discount}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Slider>
  );
};

export default CustomReview;
