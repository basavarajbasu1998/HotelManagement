import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Hidden,
  IconButton,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactInfo from "./ContactInfo";
import LocationInfo from "./LocationInfo";
import Careers from "./Careers";

const ImageLogoResponssive = styled("div")(({ theme }) => ({
  width: 400,
  [theme.breakpoints.down("xl")]: {
    width: 400,
  },
  [theme.breakpoints.down("md")]: {
    width: 300,
  },
  [theme.breakpoints.down("sm")]: {
    width: 200,
  },
  [theme.breakpoints.down("xs")]: {
    width: 200,
  },
}));

const Footer = () => {
  return (
    <>
      <Paper
        elevation={2}
        sx={{
          backgroundColor: "skyblue !important",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Grid container spacing={3}>
          <Grid mb={2} item xs={12}>
            <Box display={"flex"} textAlign="left" justifyContent={"center"}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
                <ContactInfo />
                <LocationInfo />
                <Careers />
              </Stack>
            </Box>
            <Box
              sx={{
                marginBottom: { xs: "5px !important", md: "10px !important" },
              }}
            >
              <Divider sx={{ mt: 3 }} flexItem>
                © All Rights Reserved (2024)
              </Divider>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Footer;
