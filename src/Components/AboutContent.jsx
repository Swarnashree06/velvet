import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import myimg from "../Assets/Images/about-2.jpg";
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={myimg}
            alt="picture"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              have a greate shop
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              Welcome to E-shopping, your ultimate online destination for
                fashion, electronics, home goods, etc.
                We are a team of passionate individuals dedicated to providing high-quality
                 products and exceptional customer service, all while making your shopping 
                 experience convenient, enjoyable, and affordable.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              we value integrity, innovation, and customer-centricity.
               We are committed to maintaining transparency in all of our operations, 
               staying ahead of the trends, and providing personalized service
                that meets your unique needs.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
