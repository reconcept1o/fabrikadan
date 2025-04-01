// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#0d47a1", color: "#fff", py: 3, textAlign: "center" }}>
      <Typography variant="body2">
        © 2025 F2C Platform. Tüm hakları saklıdır.
      </Typography>
    </Box>
  );
};

export default Footer;
