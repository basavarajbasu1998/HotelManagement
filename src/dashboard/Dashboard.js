import React, { useState } from "react";
import CustomCarousel from "./CustomCarousel";
import { useSpring, animated } from "react-spring";
import {
  Box,
  Card,
  Container,
  Grid,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Divider } from "antd";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import HomeIcon from "@mui/icons-material/Home";
import HomeFoodList from "../uitles/HomeFoodList";
import CarouselComponent from "../uitles/CarouselComponent";
import CustomReview from "../uitles/CustomReview";

const Dashboard = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(-10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1500 },
  });

  const isSmallScreen = useMediaQuery("(max-width:1000px)");
  const breakfast = [
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xywFNv0lWRPIjT3otE09LS4G74G_N2OYlQ&usqp=CAU",
      title: "Dosa",
      text: "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the...",
    },
    {
      imageUrl:
        "https://www.shutterstock.com/image-photo/south-indian-breakfast-food-idli-260nw-2135615711.jpg",
      title: "Idli",
      text: "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the...",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-43C1dlFEGLLiHNCDJBK4xTM9BY66LJa4tQ&usqp=CAU",
      title: "Vada",
      text: "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the...",
    },
  ];

  const lunch = [
    {
      imageUrl:
        "https://www.shutterstock.com/image-photo/indian-hindu-veg-thali-food-260nw-1435372220.jpg",
      title: "Veg Meals",
      text: "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the...",
    },
    {
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2022/6/ZP/TZ/IK/144143379/lunch-food-services.jpg",
      title: "Non veg Meals",
      text: "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the...",
    },
    {
      imageUrl:
        "https://www.subbuskitchen.com/wp-content/uploads/2014/05/Andhra-Lunch-Menu_Final2-1.jpg",
      title: "UK Spacal",
      text: "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the...",
    },
  ];

  const snacks = [
    {
      imageUrl:
        "https://www.shutterstock.com/image-vector/pakore-pakode-bajji-bhaji-indian-600nw-2312825473.jpg",
      title: "Bajji",
      text: "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the...",
    },
    {
      imageUrl:
        "https://www.taxscan.in/wp-content/uploads/2018/07/Snacks-Taxscan.jpg",
      title: "Samosa",
      text: "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the...",
    },
    {
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/2/19371752/91621699e9a447df2355f7f9f913fedc.jpg?fit=around|960:500&crop=960:500;*,*",
      title: "Pava Bajji",
      text: "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the...",
    },
  ];

  const dinner = [
    {
      imageUrl:
        "https://www.shutterstock.com/image-photo/indian-hindu-veg-thali-food-260nw-1435372220.jpg",
      title: "Veg Meals",
      text: "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the...",
    },
    {
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2022/6/ZP/TZ/IK/144143379/lunch-food-services.jpg",
      title: "Non veg Meals",
      text: "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the...",
    },
    {
      imageUrl:
        "https://www.subbuskitchen.com/wp-content/uploads/2014/05/Andhra-Lunch-Menu_Final2-1.jpg",
      title: "UK Spacal",
      text: "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the...",
    },
  ];

  return (
    <>
      <Container maxWidth>
        <animated.div style={animationProps}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              spacing={2}
            >
              <Grid item xs={12} md={5} sm={12} sx={{ p: 2 }}>
                <animated.div style={animationProps}>
                  <Typography
                    variant="h3"
                    display={"flex"}
                    justifyContent={"left"}
                    sx={{ color: "7F21FE" }}
                  >
                    Atom's Resto Cafe
                  </Typography>
                </animated.div>
                <Typography
                  variant="h5"
                  display={"flex"}
                  justifyContent={"left"}
                >
                  Welcome to Cafe
                </Typography>

                <p
                  style={{
                    textAlign: "left",
                    justifyContent: "center",
                    p: 3,
                  }}
                >
                  Nestled in the heart of the city, the cafe exudes a warm
                  ambiance with soft lighting, cozy seating, and the inviting
                  aroma of freshly brewed coffee. Mellow tunes play in the
                  background, creating a soothing atmosphere that encourages
                  patrons to unwind and savor moments of tranquility, making it
                  a haven for relaxation.
                </p>
              </Grid>

              <Grid item xs={12} md={7} sm={12}>
                {/* <img
                src="https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg"
                alt="Banner Image"
                style={{
                  width: "100vh",
                  height: "auto",
                  maxWidth: "100%",
                  borderRadius: "8px",
                }}
              /> */}

                <CustomCarousel
                  style={{
                    width: "100vh",
                    height: "auto",
                    maxWidth: "100%",
                    borderRadius: "8px",
                    width: isSmallScreen ? "100%" : "100%", // Adjust width for smaller screens
                    height: isSmallScreen ? "auto" : "auto", // Adjust height for smaller screens
                  }}
                />
              </Grid>
            </Stack>
          </Grid>
        </animated.div>

        <Box
          sx={{
            marginBottom: { xs: "5px !important", md: "10px !important" },
            mt: 5,
          }}
        >
          <Divider sx={{ mt: 3 }} flexItem>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "orange",
              }}
            >
              Food Menu
            </Typography>
          </Divider>
        </Box>

        <Typography
          variant="h5"
          sx={{ mt: 1, textAlign: "center", fontWeight: "bold" }}
        >
          Most Popular Items
        </Typography>

        <Box
          sx={{
            width: "100%",
            borderBottom: 1,
            borderColor: "divider",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 3,
          }}
        >
          <TabContext value={value}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ display: "flex", justifyContent: "center", p: 3 }}
            >
              <Tab
                value="1"
                label={
                  <Box>
                    <Typography>Breakfast</Typography>
                  </Box>
                }
              />
              <Tab
                value="2"
                label={
                  <Box>
                    <Typography>Lunch</Typography>
                  </Box>
                }
              />
              <Tab
                value="3"
                label={
                  <Box>
                    <Typography>Snacks</Typography>
                  </Box>
                }
              />
              <Tab
                value="4"
                label={
                  <Box>
                    <Typography>Dinner</Typography>
                  </Box>
                }
              />
            </TabList>
            <TabPanel value="1">
              {breakfast.map((item, index) => (
                <HomeFoodList key={index} {...item} />
              ))}
            </TabPanel>
            <TabPanel value="2">
              {lunch.map((item, index) => (
                <HomeFoodList key={index} {...item} />
              ))}
            </TabPanel>
            <TabPanel value="3">
              {snacks.map((item, index) => (
                <HomeFoodList key={index} {...item} />
              ))}
            </TabPanel>
            <TabPanel value="4">
              {dinner.map((item, index) => (
                <HomeFoodList key={index} {...item} />
              ))}
            </TabPanel>
          </TabContext>
        </Box>

        <Typography
          variant="h5"
          sx={{ mt: 2, ml: 3, textAlign: "left", fontWeight: "bold" }}
        >
          Offers
        </Typography>
        <animated.div style={animationProps}>
          <Box sx={{ p: 3 }}>
            <CarouselComponent />
          </Box>
        </animated.div>

        <Box>
          <Divider sx={{ mt: 3 }} flexItem>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "orange",
              }}
            >
              Testimonial
            </Typography>
          </Divider>
        </Box>

        <Typography
          variant="h5"
          sx={{ mt: 1, textAlign: "center", fontWeight: "bold" }}
        >
          Customer Review.!!!
        </Typography>

        <Box>
          <CustomReview />
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
