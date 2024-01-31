// ContactInfo.js

import React from "react";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Box } from "@mui/material";

const ContactInfo = () => {
  return (
    <div>
      <Typography variant="h6" mb={2}>
        Reach Us
      </Typography>

      <Box display="flex" alignItems="center" mb={1}>
        <EmailIcon sx={{ marginRight: 1 }} />
        <Typography>atomsrestocafe2024@gmail.com</Typography>
      </Box>

      <Box display="flex" alignItems="center" mb={1}>
        <InstagramIcon sx={{ marginRight: 1 }} />
        <Typography> atoms_resto_cafe</Typography>
      </Box>

      <Box display="flex" alignItems="center" mb={1}>
        <TwitterIcon sx={{ marginRight: 1 }} />
        <Typography>tech_with_gagan</Typography>
      </Box>

      <Box display="flex" alignItems="center" mb={1}>
        <PhoneAndroidIcon sx={{ marginRight: 1 }} />
        <Typography>7813040123</Typography>
      </Box>
    </div>
  );
};

export default ContactInfo;
