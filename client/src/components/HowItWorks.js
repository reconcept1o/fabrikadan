// src/components/HowItWorks.js
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { howItWorksSteps } from "../data/mockData";

const HowItWorks = () => {
  const updatedSteps = [
    ...howItWorksSteps,
    {
      title: "Akıllı Sözleşmelerle Şeffaf Süreç",
      description:
        "Gecikme veya iptal durumlarında haklarınız otomatik olarak korunur. Şeffaf ve adil bir süreç için akıllı sözleşmeler!",
      icon: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
      link: "/features/akillisozlesmeler",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#fff", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1e88e5", textAlign: "center" }}
        >
          Nasıl Çalışır?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {updatedSteps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{ textAlign: "center", boxShadow: 3, borderRadius: 2 }}
                >
                  <CardMedia
                    component="img"
                    image={step.icon}
                    alt={step.title}
                    sx={{ width: 80, height: 80, mx: "auto", mt: 2 }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: "bold", color: "#1e88e5" }}
                    >
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {step.description}
                    </Typography>
                    {step.link && (
                      <Button
                        component={Link}
                        to={step.link}
                        variant="text"
                        sx={{
                          mt: 2,
                          color: "#1e88e5",
                          "&:hover": { color: "#1565c0" },
                        }}
                      >
                        Detaylı Bilgi
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
