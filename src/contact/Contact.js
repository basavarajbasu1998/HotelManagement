import React from "react";
import { useSpring, animated } from "react-spring";
import { Card, Grid, Paper, Stack, Typography } from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Contact = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(-10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1500 },
  });

  const mapStyles = {
    height: "200px",
    width: "100%",
  };

  const specificLocation = {
    lat: 40.7128, // Replace with the latitude of your specific location
    lng: -74.006, // Replace with the longitude of your specific location
  };

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
                variant="h5"
                display={"flex"}
                justifyContent={"left"}
                sx={{ mt: 2 }}
              >
                Contact Us
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
                patrons to unwind and savor moments of tranquility, making it a
                haven for relaxation.
              </p>
            </Grid>

            <Grid item xs={12} md={7} sm={12}>
              <img
                src="https://vegchennaisrilalitha.co.uk/wp-content/uploads/2021/07/contact-us.png"
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
        Contact For Any Query
      </Typography>

      <Card>
        <Typography variant="h5" align="center" style={{ padding: "10px" }}>
          Explore Our Location
        </Typography>

        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={specificLocation}
          >
            <Marker position={specificLocation} />
          </GoogleMap>
        </LoadScript>
      </Card>
    </>
  );
};

export default Contact;
