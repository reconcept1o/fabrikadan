// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import GuestPage from "./components/GuestPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import { Container, Typography, Box } from "@mui/material";

const ProductsPage = () => (
  <Box
    sx={{
      background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Box sx={{ pt: "80px" }} />
    <Box sx={{ flexGrow: 1, py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1e88e5" }}
        >
          Ürünler
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Ürünler sayfası yapım aşamasında...
        </Typography>
      </Container>
    </Box>
  </Box>
);

const OffersPage = () => (
  <Box
    sx={{
      background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Box sx={{ pt: "80px" }} />
    <Box sx={{ flexGrow: 1, py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1e88e5" }}
        >
          Teklifler
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Teklifler sayfası yapım aşamasında...
        </Typography>
      </Container>
    </Box>
  </Box>
);

const FactoriesPage = () => (
  <Box
    sx={{
      background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Box sx={{ pt: "80px" }} />
    <Box sx={{ flexGrow: 1, py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1e88e5" }}
        >
          Fabrikalarım
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Fabrikalarım sayfası yapım aşamasında...
        </Typography>
      </Container>
    </Box>
  </Box>
);

const WarehousesPage = () => (
  <Box
    sx={{
      background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Box sx={{ pt: "80px" }} />
    <Box sx={{ flexGrow: 1, py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1e88e5" }}
        >
          Depolarım
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Depolarım sayfası yapım aşamasında...
        </Typography>
      </Container>
    </Box>
  </Box>
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<GuestPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/factories" element={<FactoriesPage />} />
        <Route path="/warehouses" element={<WarehousesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
