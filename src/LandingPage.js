import React from "react";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
} from "@mui/material";
import tabLogo from './images/landing_logo.svg'
const LandingPage = () => {

  return (
    <Box
      sx={{
        display: { md: "block", lg: "flex" },
        justifyContent: "center",
        alignItems: "center",
        m: 5,
        flexDirection: "column",
      }}
    >
        <Box sx={{ background: "white", borderRadius: "30px", alignItems: "center",display: 'flex'}}>
            <img src={tabLogo}></img>
        </Box>
    </Box>
  );
};

export default LandingPage;
