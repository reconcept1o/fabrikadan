// src/components/Header.js
import React, { useState, useEffect, useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InventoryIcon from '@mui/icons-material/Inventory'; // Ürünler için ikon
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; // Teklifler için ikon
import FactoryIcon from '@mui/icons-material/Factory'; // Fabrikalarım için ikon
import WarehouseIcon from '@mui/icons-material/Warehouse'; // Depolarım için ikon

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.9 },
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'transparent',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          background: 'linear-gradient(90deg, #1e88e5 0%, #1565c0 100%)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontWeight: 'bold',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.5rem',
              }}
            >
              F2C
            </Typography>
          </motion.div>

          {/* Navigasyon Linkleri */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                color="inherit"
                component={Link}
                to="/"
                startIcon={<HomeIcon />}
                sx={{
                  mx: 1,
                  color: '#fff',
                  fontWeight: 'medium',
                  textTransform: 'none',
                  '&:hover': { color: '#ffeb3b' },
                }}
              >
                Ana Sayfa
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                color="inherit"
                component={Link}
                to="/products"
                startIcon={<InventoryIcon />}
                sx={{
                  mx: 1,
                  color: '#fff',
                  fontWeight: 'medium',
                  textTransform: 'none',
                  '&:hover': { color: '#ffeb3b' },
                }}
              >
                Ürünler
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                color="inherit"
                component={Link}
                to="/offers"
                startIcon={<LocalOfferIcon />}
                sx={{
                  mx: 1,
                  color: '#fff',
                  fontWeight: 'medium',
                  textTransform: 'none',
                  '&:hover': { color: '#ffeb3b' },
                }}
              >
                Teklifler
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                color="inherit"
                component={Link}
                to="/factories"
                startIcon={<FactoryIcon />}
                sx={{
                  mx: 1,
                  color: '#fff',
                  fontWeight: 'medium',
                  textTransform: 'none',
                  '&:hover': { color: '#ffeb3b' },
                }}
              >
                Fabrikalarım
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                color="inherit"
                component={Link}
                to="/warehouses"
                startIcon={<WarehouseIcon />}
                sx={{
                  mx: 1,
                  color: '#fff',
                  fontWeight: 'medium',
                  textTransform: 'none',
                  '&:hover': { color: '#ffeb3b' },
                }}
              >
                Depolarım
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                color="inherit"
                component={Link}
                to="/about"
                startIcon={<InfoIcon />}
                sx={{
                  mx: 1,
                  color: '#fff',
                  fontWeight: 'medium',
                  textTransform: 'none',
                  '&:hover': { color: '#ffeb3b' },
                }}
              >
                Hakkımızda
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                color="inherit"
                component={Link}
                to="/contact"
                startIcon={<ContactMailIcon />}
                sx={{
                  mx: 1,
                  color: '#fff',
                  fontWeight: 'medium',
                  textTransform: 'none',
                  '&:hover': { color: '#ffeb3b' },
                }}
              >
                İletişim
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                color="inherit"
                sx={{
                  mx: 1,
                  bgcolor: '#fff',
                  color: '#1e88e5',
                  fontWeight: 'medium',
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 3,
                  '&:hover': { bgcolor: '#f5f5f5' },
                }}
                onClick={() => alert('Login sayfasına yönlendiriliyorsunuz...')}
              >
                Login
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                color="inherit"
                sx={{
                  mx: 1,
                  bgcolor: '#ff9800',
                  color: '#fff',
                  fontWeight: 'medium',
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 3,
                  '&:hover': { bgcolor: '#f57c00' },
                }}
                onClick={() => alert('Register sayfasına yönlendiriliyorsunuz...')}
              >
                Register
              </Button>
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Header;