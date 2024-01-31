import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Avatar,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "antd";
import CustomButton from "./CustomButton";

const CarouselComponent = () => {
  const cardData = [
    {
      title: "Veg Meals",
      content: "hiiiiiiiii",
      image:
        "https://www.shutterstock.com/image-photo/indian-hindu-veg-thali-food-260nw-1435372220.jpg",
      discount: "25%",
    },
    {
      title: "NonVeg Meals",
      content: "Content for Card 2",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/6/ZP/TZ/IK/144143379/lunch-food-services.jpg",
      discount: "10%",
    },
    {
      title: "Dosa",
      content: "Content for Card 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xywFNv0lWRPIjT3otE09LS4G74G_N2OYlQ&usqp=CAU",
      discount: "10%",
    },
    {
      title: "UK Spacil",
      content: "Content for Card 4",
      image:
        "https://www.subbuskitchen.com/wp-content/uploads/2014/05/Andhra-Lunch-Menu_Final2-1.jpg",
      discount: "18%",
    },
    {
      title: "Samosa",
      content: "hlo",
      image:
        "https://www.taxscan.in/wp-content/uploads/2018/07/Snacks-Taxscan.jpg",
      discount: "5%",
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
    slidesToShow: 4, // Set the number of cards to show
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
            style={{
              margin: "10px",
              boxShadow: "2px 2px 5px gray",
              borderRadius: "18px",
            }}
          >
            <CardContent>
              <Avatar
                src={card.image}
                alt="Avatar Image"
                variant="square"
                sx={{
                  width: 280,
                  height: 230,
                  margin: "auto",
                  p: 1,
                  borderRadius: "18px",
                }}
              />
              <Typography
                variant="h5"
                textAlign={"center"}
                component="div"
                sx={{ mt: 2, fontSize: "23px" }}
              >
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {card.content}
              </Typography>
              <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
                Offer: {card.discount} discount
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <CustomButton backgroundColor="#FF384A" title="Click on" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Slider>
  );
};

export default CarouselComponent;
