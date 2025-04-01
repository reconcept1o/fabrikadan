// src/pages/ContactPage.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Footer from '../components/Footer';

const ContactPage = () => {
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
            İletişim
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Bizimle iletişime geçmek için: info@f2cplatform.com
          </Typography>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default ContactPage;