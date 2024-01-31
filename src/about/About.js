import React from "react";

import { useSpring, animated } from "react-spring";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import AnimatedImages from "../uitles/AnimatedImages";
import { Divider } from "antd";

const About = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(-10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1500 },
  });

  return (
    <>
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
        <animated.div style={animationProps}>
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
              <Typography variant="h4" display={"flex"} justifyContent={"left"}>
                About Us
              </Typography>

              <p
                style={{
                  textAlign: "left",
                  justifyContent: "center",
                  p: 3,
                }}
              >
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet
                lorem sit. Tempor erat elitr rebum at clita. Diam dolor diam
                ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                lorem et sit, sed stet lorem sit clita duo justo magna dolore
                erat amet
              </p>
            </Grid>

            <Grid item xs={12} md={7} sm={12}>
              <img
                src="https://img.freepik.com/free-vector/chef-gastronomy-social-media-promo-template_23-2149944300.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais"
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
        </animated.div>

        <Grid md={7} sm={12}>
          <AnimatedImages />
        </Grid>
        <Grid md={5} sm={12}>
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
                About us
              </Typography>
            </Divider>
          </Box>

          <Typography variant="h5" sx={{ p: 1, fontWeight: "bold" }}>
            Welcome to Restoran
          </Typography>

          <Typography  textAlign={"left"} justifyContent={"left"} >
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
            sit. Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
            Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
            stet lorem sit clita duo justo magna dolore erat amet
          </Typography>

          <Stack direction={"row"} spacing={2} sx={{ mt: 2 }}>
            <Typography
              variant="h2"
              sx={{ color: "orange", fontWeight: "bold" }}
            >
              10
            </Typography>
            <Box sx={{ mt: 0.5, p: 1 }}>
              <Typography>Years of </Typography>
              <Typography> EXPERIENCE</Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{ color: "orange", fontWeight: "bold" }}
            >
              25
            </Typography>
            <Box sx={{ mt: 0.5, p: 1 }}>
              <Typography>Popular </Typography>
              <Typography> MASTER CHEFS</Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
