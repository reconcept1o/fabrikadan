// src/pages/AboutPage.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header için boşluk */}
      <Box sx={{ pt: '80px' }} />

      {/* İçerik */}
      <Box sx={{ flexGrow: 1, py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1e88e5' }}>
            Hakkımızda
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            F2C Platform, fabrikadan tüketiciye doğrudan satış modeliyle maliyetleri düşürmeyi ve kaliteli ürünleri uygun fiyatlarla sunmayı hedefler. Toplu sipariş sistemiyle hem üreticilere hem de tüketicilere kazanç sağlar.
          </Typography>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default AboutPage;