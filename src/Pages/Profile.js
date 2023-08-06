import React from "react";
import { IconButton, Avatar, Box, Typography } from "@mui/material";

function Profile() {
  return (
    <React.Fragment>
      <Box>
        <IconButton>
          <Avatar alt="Profile Photo" src="/static/images/avatar/2.jpg" />
        </IconButton>
        <Typography>Shubhamkar Suryawanshi</Typography>
      </Box>
      <Box>
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
            kshubhamkar.kop@gmail.com
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
