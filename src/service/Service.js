import React from "react";

import { useSpring, animated } from "react-spring";
import {
  Avatar,
  Box,
  Card,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const Service = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(-10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1500 },
  });

  return (
    <>
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
                variant="h4"
                display={"flex"}
                justifyContent={"left"}
                sx={{ mt: 2 }}
              >
                Services
              </Typography>

              <Typography
                variant="body1"
                style={{
                  textAlign: "left",
                  justifyContent: "center",
                  p: 3,
                  textAlign: "justify",
                }}
              >
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet
                lorem sit. Tempor erat elitr rebum at clita. Diam dolor diam
                ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                lorem et sit, sed stet lorem sit clita duo justo magna dolore
                erat amet
              </Typography>
            </Grid>

            <Grid item xs={12} md={7} sm={12}>
              <img
                src="https://dynamic.brandcrowd.com/template/preview/design/a267da91-c9ab-48ae-904d-456cccb0e827?v=4&designTemplateVersion=2&size=design-preview-standalone-1x"
                alt="Banner Image"
                style={{
                  width: "100vh",
                  height: "auto",
                  maxWidth: "100%",
                  borderRadius: "8px",
                }}
              />
            </Grid>
          </Stack>
        </Grid>
      </animated.div>

      <Typography
        variant="h5"
        sx={{ mt: 5, textAlign: "center", fontWeight: "bold" }}
      >
        Explore Our Services
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        sx={{ p: 4, mt: 3 }}
        justifyContent={"center"}
      >
        <Card
          sx={{
            "&:hover": {
              backgroundColor: "orange", // Change to the desired hover color
            },
            p: 2,
          }}
        >
          <Avatar
            alt="Avatar Image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMmRLpqomqjInSw-ozrWo2vnpzSNqAmowkA&usqp=CAU"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              p: 3,
            }}
          />
          <Box sx={{ p: 3 }}>
            <Typography
              variant="h5"
              sx={{ fontSize: "20px", fontWeight: "bold", mb: 2 }}
            >
              Master Chefs
            </Typography>
            <Typography>
              Master chefs expertly blend flavors, elevate ingredients, and
              create culinary art. Their skillful techniques and passion for
              gastronomy transform meals into unforgettable dining experiences.
            </Typography>
          </Box>
        </Card>

        <Card
          sx={{
            "&:hover": {
              backgroundColor: "orange", // Change to the desired hover color
            },
            p: 2,
          }}
        >
          <Avatar
            alt="Avatar Image"
            src="https://img.freepik.com/premium-vector/fork-spoon-logo-design-icon-symbol-health-restaurant-food-diet_690981-445.jpg"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              p: 3,
            }}
          />
          <Box sx={{ p: 3 }}>
            <Typography
              variant="h5"
              sx={{ fontSize: "20px", fontWeight: "bold", mb: 2 }}
            >
              Quality Food
            </Typography>
            <Typography>
              Master chefs expertly blend flavors, elevate ingredients, and
              create culinary art. Their skillful techniques and passion for
              gastronomy transform meals into unforgettable dining experiences.
            </Typography>
          </Box>
        </Card>

        <Card
          sx={{
            "&:hover": {
              backgroundColor: "orange", // Change to the desired hover color
            },
            p: 2,
          }}
        >
          <Avatar
            alt="Avatar Image"
            src="https://img.freepik.com/premium-vector/food-delivery-logo-template-design-creative-vector-emblem-icon-design-concept_306040-854.jpg"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              p: 3,
            }}
          />
          <Box sx={{ p: 3 }}>
            <Typography
              variant="h5"
              sx={{ fontSize: "20px", fontWeight: "bold", mb: 2 }}
            >
              Online Order
            </Typography>
            <Typography>
              Master chefs expertly blend flavors, elevate ingredients, and
              create culinary art. Their skillful techniques and passion for
              gastronomy transform meals into unforgettable dining experiences.
            </Typography>
          </Box>
        </Card>
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        sx={{ p: 4 }}
        justifyContent={"center"}
      >
        <Card
          sx={{
            "&:hover": {
              backgroundColor: "orange", // Change to the desired hover color
            },
            p: 2,
          }}
        >
          <Avatar
            alt="Avatar Image"
            src="https://media.istockphoto.com/id/1446906897/vector/24-7-hours-timer-vector-symbol-gradient-color.jpg?s=612x612&w=0&k=20&c=7PbBV_CIQ4RFLpkYt5lK6-FQLQkzie3-Nd3GO3BGfzQ="
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              p: 3,
            }}
          />
          <Box sx={{ p: 3 }}>
            <Typography
              variant="h5"
              sx={{ fontSize: "20px", fontWeight: "bold", mb: 2 }}
            >
              24/7 Service
            </Typography>
            <Typography>
              Master chefs expertly blend flavors, elevate ingredients, and
              create culinary art. Their skillful techniques and passion for
              gastronomy transform meals into unforgettable dining experiences.
            </Typography>
          </Box>
        </Card>

        <Card
          sx={{
            "&:hover": {
              backgroundColor: "orange", // Change to the desired hover color
            },
            p: 2,
          }}
        >
          <Avatar
            alt="Avatar Image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmruE5Twb4lPb4wfFvnhUe8H9rLHkvQWjS_VnlfgF9gfgEjDtTIDNfdDnZPOu16e2TZf8&usqp=CAU"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              p: 3,
            }}
          />
          <Box sx={{ p: 3 }}>
            <Typography
              variant="h5"
              sx={{ fontSize: "20px", fontWeight: "bold", mb: 2 }}
            >
              Buffet Services
            </Typography>
            <Typography>
              Master chefs expertly blend flavors, elevate ingredients, and
              create culinary art. Their skillful techniques and passion for
              gastronomy transform meals into unforgettable dining experiences.
            </Typography>
          </Box>
        </Card>

        <Card
          sx={{
            "&:hover": {
              backgroundColor: "orange", // Change to the desired hover color
            },
            p: 2,
          }}
        >
          <Avatar
            alt="Avatar Image"
            src="https://s3u.tmimgcdn.com/800x0/u77461072/ebdeaf99fe57c30833b8a192d472f8b7.jpg"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              p: 3,
            }}
          />
          <Box sx={{ p: 3 }}>
            <Typography
              variant="h5"
              sx={{ fontSize: "20px", fontWeight: "bold", mb: 2 }}
            >
              Event Catering
            </Typography>
            <Typography>
              Master chefs expertly blend flavors, elevate ingredients, and
              create culinary art. Their skillful techniques and passion for
              gastronomy transform meals into unforgettable dining experiences.
            </Typography>
          </Box>
        </Card>
      </Stack>
    </>
  );
};

export default Service;
