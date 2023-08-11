import React from "react";
import { IconButton, Avatar, Box, Typography } from "@mui/material";
import bg from "../assets/bg1.jpg";
import prof from "../assets/prof.png";

function Profile() {
  return (
    <React.Fragment>
      <Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <img width="100%" src={bg} alt="Background" />
        </Box>
        <Box
          sx={{
            width: "10%",
            marginX: "auto",
          }}
        >
          <img width="100%" src={prof} alt="Logo" />
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" component="h6">
          Shubhamkar Suryawanshi
        </Typography>
        <Box>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: "400" }}
          >
            Address:{" "}
          </Typography>{" "}
          <Typography variant="subtitle2" component="span">
            Shahupuri, Kolhapur 416001
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: "400" }}
          >
            Email:
          </Typography>{" "}
          <Typography variant="subtitle2" component="span">
            shubhamkar.kop@gmail.com
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: "400" }}
          >
            Phone Number:
          </Typography>{" "}
          <Typography variant="subtitle2" component="span">
            8485060710
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Profile;
