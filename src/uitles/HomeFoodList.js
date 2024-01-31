import React, { useState } from "react";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import CustomButton from "./CustomButton";

const HomeFoodList = ({ imageUrl, title, text }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const displayText = expanded
    ? text
    : `${text.split(" ").slice(0, 100).join(" ")}..`;

  return (
    <Grid item container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          sx={{ p: 2 }}
        >
          <img
            src={imageUrl}
            alt={title}
            style={{ width: "100px", height: "100px", flex: "0 0 100px" }}
          />
          <div style={{ flex: "1" }}>
            <Stack
              direction={"row"}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "left",
                    color: "#000000",
                    fontSize: "1.2rem",
                  }}
                >
                  {title}
                </Typography>

                <Typography textAlign={"left"} style={{ fontSize: "1rem" }}>
                  {displayText}
                  {!expanded && (
                    <a
                      href="#"
                      onClick={toggleExpand}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                    >
                      Learn More
                    </a>
                  )}
                </Typography>
              </Box>
            </Stack>
          </div>
          <CustomButton backgroundColor="green" title=" Order Now" />
        </Stack>
      </Grid>

      <Grid item xs={6}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          sx={{ p: 2 }}
        >
          <img
            src={imageUrl}
            alt={title}
            style={{ width: "100px", height: "100px", flex: "0 0 100px" }}
          />
          <div style={{ flex: "1" }}>
            <Stack
              direction={"row"}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "left",
                    color: "#000000",
                    fontSize: "1.2rem",
                  }}
                >
                  {title}
                </Typography>

                <Typography textAlign={"left"} style={{ fontSize: "1rem" }}>
                  {displayText}
                  {!expanded && (
                    <a
                      href="#"
                      onClick={toggleExpand}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                    >
                      Learn More
                    </a>
                  )}
                </Typography>
              </Box>
            </Stack>
          </div>
          <CustomButton backgroundColor="green" title=" Order Now" />
        </Stack>
      </Grid>
    </Grid>
  );
};
export default HomeFoodList;
