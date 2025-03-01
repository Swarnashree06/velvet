import { Box, Typography } from "@mui/material";
import React from "react";
import backimg from "../Assets/Images/velwet1.webp"
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage:`url(${backimg})`
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "white",
          }}
          gutterBottom
        >
        The Velvet Cart
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "white" }}
        >
         "Elegance in Every Click"
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "white" }}
        >
         Description:
         The Velvet Cart is the epitome of softness and sophistication.
          Our handpicked collection is designed to cater to those who appreciate the finer things in life.
           Shop with ease and grace, and transform your everyday experience with products
            that embody elegance and luxury.
        </Typography>
       
      </Box>
    </Box>
  );
}
