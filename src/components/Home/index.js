import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import homeImg from "../../assets/img/home_img.jpg";

const Home = () => {
  const { t } = useTranslation(["home"]);
  return (
    <Container id="#home" sx={{ color: "#fff", marginBottom: 5 }}>
      {/* Quantum Metaverse */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          mr={1}
          sx={{
            width: "5%",
            height: "1px",
            backgroundColor: "#fff",
            borderRadius: "10%",
          }}
        />
        <Typography variant="p">{t("quantummetaverse")}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        mt={2}
      >
        <Box width={{ sm: "100%", md: "50%" }}>
          <Typography sx={{ typography: { sm: "h3", xs: "h4" } }}>
            {t("title")}
          </Typography>
          <Typography
            component="p"
            mt={{ xs: 2, sm: 2, md: 5 }}
            sx={{
              fontSize: "18px",
              lineHeight: "1.85",
            }}
          >
            {" "}
            {t("desc")}{" "}
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{
              margin: "20px 0 10px",
              height: 50,
              backgroundColor: "#ed824e",
              "&:hover": {
                backgroundColor: "#ed824e",
              },
            }}
          >
            {t("gotoapp")}
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              margin: "5px 0",
              height: 50,
              backgroundColor: "#00cde4",
              "&:hover": {
                backgroundColor: "#00cde4",
              },
            }}
          >
            {t("whitepaper")}
          </Button>
        </Box>
        <Box width={{ sm: "100%", md: "45%" }} mt={{ xs: 5, md: 0 }}>
          <img width="100%" height="100%" src={homeImg} alt="home" />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
