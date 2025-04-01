// src/pages/GuestPage.js (Sadece "Güncel Teklifler" bölümü güncellendi)
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
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { mockOffers } from "../data/mockData";
import Footer from "../components/Footer";
import Carousel from "react-material-ui-carousel";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GavelIcon from "@mui/icons-material/Gavel";

// Import your local home image
import homeBanner from "../assests/home.jpg";

// Ürün Kategorileri için veri
const productCategories = [
  {
    name: "Gıda",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Zeytinyağı, bal, baklava ve daha fazlası.",
  },
  {
    name: "Tekstil",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Tişört, şapka ve diğer tekstil ürünleri.",
  },
  {
    name: "Züccaciye",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Bardak, tabak ve mutfak gereçleri.",
  },
  {
    name: "Medikal",
    image:
      "https://images.unsplash.com/photo-1580281658626-ee379f5cce78?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Medikal ürünler ve ekipmanlar.",
  },
];

// Öne Çıkan Üreticiler için veri
const featuredProducers = [
  {
    name: "Kenan Bey (Şelale)",
    location: "Balıkesir",
    products: "Pirinç, Peynir, Kırmızı Et",
    description: "5-6 çalışanıyla doğal ürünler üreten bir marka.",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Zekeriya Bey",
    location: "Sakarya",
    products: "Çeşitli Ürünler",
    description: "Gimdes sertifikalı üretim yapan bir üretici.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
];

// Neden F2C? için veri
const whyF2C = [
  {
    title: "Daha Uygun Fiyatlar",
    description: "Toplu siparişle maliyetleri düşürüyoruz.",
    icon: "💰",
  },
  {
    title: "Doğrudan Üreticiden",
    description: "Aracısız, doğrudan fabrikadan tüketiciye.",
    icon: "🏭",
  },
  {
    title: "Şeffaf Süreç",
    description: "Sipariş sürecini adım adım takip edin.",
    icon: "📋",
  },
  {
    title: "Güvenli Ödeme",
    description: "Sanal POS ile güvenli ve taksitli ödeme.",
    icon: "🔒",
  },
];

// Öne Çıkan Özellikler için veri
const features = [
  {
    title: "Kargo Entegrasyonu",
    description:
      "Siparişlerinizi anbean takip edin! Teslimat gecikirse %1 telafi.",
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: "#1e88e5" }} />,
    link: "/features/kargo",
  },
  {
    title: "E-Fatura",
    description: "Otomatik e-fatura ile kağıt israfına son!",
    icon: <ReceiptIcon sx={{ fontSize: 40, color: "#1e88e5" }} />,
    link: "/features/efatura",
  },
  {
    title: "Sanal POS",
    description: "3D Secure ile güvenli ve taksitli ödeme.",
    icon: <CreditCardIcon sx={{ fontSize: 40, color: "#1e88e5" }} />,
    link: "/features/sanalpos",
  },
  {
    title: "Akıllı Sözleşmeler",
    description: "Şeffaf ve adil süreç için otomatik işlemler.",
    icon: <GavelIcon sx={{ fontSize: 40, color: "#1e88e5" }} />,
    link: "/features/akillisozlesmeler",
  },
];

// Ortak stiller
const sectionTitleStyles = {
  fontWeight: "bold",
  color: "#1e88e5",
  textAlign: "center",
};

const cardStyles = {
  boxShadow: 2,
  borderRadius: 2,
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": { boxShadow: 6 },
};

const GuestPage = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Hero Banner (Ana Karşılama) */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "80vh" },
          backgroundImage: `url(${homeBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          pt: "80px",
        }}
      >
        <Box
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.6)",
            p: { xs: 3, md: 5 },
            borderRadius: 2,
            maxWidth: "90%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.8rem", md: "3.5rem" },
              }}
            >
              Fabrikadan Tüketiciye (F2C) Platformu
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 4, fontSize: { xs: "1rem", md: "1.5rem" } }}
            >
              Üreticiden doğrudan uygun fiyatlarla toplu sipariş verin,
              aracıları ortadan kaldırın! <br/
> Teklif al -Teklif ver maliyetleri düşür ...
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#ff9800",
                color: "#fff",
                fontSize: { xs: "1rem", md: "1.2rem" },
                px: 4,
                py: 1.5,
                borderRadius: 2,
                "&:hover": { bgcolor: "#f57c00" },
              }}
              component={Link}
              to="/register"
              aria-label="Hemen Kayıt Ol"
            >
              Hemen Kayıt Ol
            </Button>
          </motion.div>
        </Box>
      </Box>

      {/* Neden F2C? */}
      <Box sx={{ py: 6, bgcolor: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={sectionTitleStyles}>
            Neden F2C?
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            sx={{ textAlign: "center", mb: 4, maxWidth: "800px", mx: "auto" }}
          >
            F2C ile üreticilerden doğrudan ürün alarak hem maliyetleri düşürün
            hem de şeffaf bir satın alma süreci yaşayın.
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {whyF2C.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      ...cardStyles,
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      p: 2,
                      bgcolor: "#fff",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h2" sx={{ fontSize: "3rem", mb: 2 }}>
                        {item.icon}
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: "bold",
                          color: "#1e88e5",
                          minHeight: "3rem",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Öne Çıkan Özellikler */}
      <Box sx={{ py: 4, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={sectionTitleStyles}>
            Öne Çıkan Özellikler
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box sx={{ textAlign: "center", p: 2 }}>
                    {feature.icon}
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", color: "#1e88e5", mt: 1 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                    <Button
                      component={Link}
                      to={feature.link}
                      variant="text"
                      sx={{
                        mt: 1,
                        color: "#1e88e5",
                        "&:hover": { color: "#1565c0" },
                      }}
                      aria-label={`Detaylı bilgi: ${feature.title}`}
                    >
                      Detaylı Bilgi
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Ürün Kategorileri (Carousel) */}
      <Box sx={{ py: 6, bgcolor: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={sectionTitleStyles}>
            Ürün Kategorileri
          </Typography>
          <Carousel
            autoPlay
            animation="slide"
            indicators
            navButtonsAlwaysVisible
            cycleNavigation
            sx={{ mt: 4 }}
          >
            {productCategories.map((category, index) => (
              <Box key={index} sx={{ px: 2 }}>
                <Card sx={{ ...cardStyles, mx: "auto", maxWidth: 300 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={category.image}
                    alt={category.name}
                    sx={{
                      objectFit: "cover",
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    }}
                    loading="lazy"
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: "bold", color: "#1e88e5" }}
                    >
                      {category.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {category.description}
                    </Typography>
                    <Button
                      component={Link}
                      to="/products"
                      variant="text"
                      sx={{
                        mt: 2,
                        color: "#1e88e5",
                        "&:hover": { color: "#1565c0" },
                      }}
                      aria-label={`Kategoriye göz at: ${category.name}`}
                    >
                      Kategoriye Göz At
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Carousel>
        </Container>
      </Box>

      {/* Güncel Teklifler (Trendyol/Amazon Tarzı) */}
      <Box sx={{ py: 6, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={sectionTitleStyles}>
            Güncel Teklifler
          </Typography>
          <Grid container spacing={2}>
            {mockOffers.map((offer) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={offer.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      ...cardStyles,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid #e0e0e0",
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="220"
                      image={offer.image}
                      alt={offer.title}
                      sx={{
                        objectFit: "contain",
                        bgcolor: "#f5f5f5",
                        p: 2,
                        borderBottom: "1px solid #e0e0e0",
                      }}
                      loading="lazy"
                    />
                    <CardContent sx={{ flexGrow: 1, p: 2 }}>
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                          fontWeight: "medium",
                          color: "#333",
                          fontSize: "1rem",
                          lineHeight: 1.3,
                          minHeight: "3rem",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {offer.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "bold", color: "#d81b60" }}
                        >
                          {offer.totalPrice} TL
                        </Typography>
                        {/* Eğer indirim varsa eklenebilir */}
                        {/* <Typography
                          variant="body2"
                          sx={{ color: "#888", textDecoration: "line-through" }}
                        >
                          {offer.originalPrice || "1000"} TL
                        </Typography> */}
                      </Box>
                      <Chip
                        label={`Bitiş: ${offer.endDate}`}
                        size="small"
                        sx={{
                          bgcolor: "#ff6d00",
                          color: "#fff",
                          fontWeight: "bold",
                          mb: 2,
                        }}
                      />
                    </CardContent>
                    <Box sx={{ p: 2, pt: 0 }}>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#ff6d00",
                          color: "#fff",
                          "&:hover": { bgcolor: "#e65100" },
                          borderRadius: 2,
                          textTransform: "none",
                          width: "100%",
                          fontWeight: "bold",
                          fontSize: "0.9rem",
                          py: 1,
                        }}
                        onClick={() =>
                          alert("Teklife katılmak için kayıt olun!")
                        }
                        aria-label={`Teklife katıl: ${offer.title}`}
                      >
                        Teklife Katıl
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Kargo Takip Süreci */}
      <Box sx={{ py: 6, bgcolor: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={sectionTitleStyles}>
            Kargo Takip Süreci
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            sx={{ textAlign: "center", mb: 4, maxWidth: "800px", mx: "auto" }}
          >
            Siparişlerinizi Yurtiçi Kargo, MNG Kargo ve Aras Kargo ile entegre
            bir şekilde takip edin. Teslimatlar 7+1 gün içinde kapınızda!
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Ürün Hazırlama",
                description:
                  "Üreticiler ürünlerinizi 3 gün içinde paketler ve kargoya hazırlar.",
              },
              {
                title: "Kargoya Teslim",
                description:
                  "Ürünler LIFO mantığıyla yüklenir ve kargoya teslim edilir.",
              },
              {
                title: "Teslimat",
                description:
                  "Ürünler 7+1 gün içinde size ulaşır. Gecikmelerde %1 günlük iade!",
              },
            ].map((step, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card sx={{ ...cardStyles, textAlign: "center" }}>
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
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* E-Fatura ve Güvenli Ödeme */}
      <Box sx={{ py: 6, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#1e88e5" }}
              >
                E-Fatura ve Güvenli Ödeme
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Siparişlerinizin faturaları otomatik olarak oluşturulur ve
                dijital ortamda size ulaştırılır. Sanal POS ile 3D Secure ve
                taksit seçenekleriyle güvenli ödeme yapın!
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  component={Link}
                  to="/features/efatura"
                  variant="outlined"
                  sx={{ color: "#1e88e5", borderColor: "#1e88e5" }}
                  aria-label="E-Fatura hakkında bilgi al"
                >
                  E-Fatura Hakkında
                </Button>
                <Button
                  component={Link}
                  to="/features/sanalpos"
                  variant="outlined"
                  sx={{ color: "#1e88e5", borderColor: "#1e88e5" }}
                  aria-label="Ödeme seçeneklerini keşfet"
                >
                  Ödeme Seçenekleri
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1556740714-a8395b3c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="E-Fatura ve Güvenli Ödeme Süreci"
                sx={{ borderRadius: 2, maxHeight: 300, objectFit: "cover" }}
                loading="lazy"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Akıllı Sözleşmeler */}
      <Box sx={{ py: 6, bgcolor: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Akıllı Sözleşmeler ile Şeffaf İşlemler"
                sx={{ borderRadius: 2, maxHeight: 300, objectFit: "cover" }}
                loading="lazy"
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#1e88e5" }}
              >
                Akıllı Sözleşmelerle Şeffaf İşlemler
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Gecikme cezaları ve paydaş ödemeleri otomatik olarak uygulanır.
                Şeffaf ve güvenilir bir süreç için F2C yanınızda!
              </Typography>
              <Button
                component={Link}
                to="/features/akillisozlesmeler"
                variant="outlined"
                sx={{ color: "#1e88e5", borderColor: "#1e88e5" }}
                aria-label="Akıllı Sözleşmeler hakkında daha fazla bilgi al"
              >
                Daha Fazla Bilgi
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Öne Çıkan Üreticiler */}
      <Box sx={{ py: 6, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={sectionTitleStyles}>
            Öne Çıkan Üreticiler
          </Typography>
          <Grid container spacing={4}>
            {featuredProducers.map((producer, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card sx={cardStyles}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={producer.image}
                      alt={`${producer.name} - ${producer.location}`}
                      sx={{
                        objectFit: "cover",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      }}
                      loading="lazy"
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "bold", color: "#1e88e5" }}
                      >
                        {producer.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Konum: {producer.location}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Ürünler: {producer.products}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        paragraph
                      >
                        {producer.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Kayıt Ol Çağrısı */}
      <Box sx={{ py: 6, bgcolor: "#1e88e5", textAlign: "center" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          Hemen Kayıt Ol ve Tekliflere Katıl!
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#ff9800",
            color: "#fff",
            fontSize: "1.2rem",
            px: 4,
            py: 1.5,
            borderRadius: 2,
            "&:hover": { bgcolor: "#f57c00" },
          }}
          component={Link}
          to="/register"
          aria-label="Hemen Kayıt Ol ve Tekliflere Katıl"
        >
          Kayıt Ol
        </Button>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default GuestPage;
