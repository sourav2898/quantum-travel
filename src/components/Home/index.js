import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  useTheme,
  Link,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import homeImg from "../../assets/img/home_img.jpg";
import SpanTitle from "../Common/SpanTitle";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { t } = useTranslation(["home"]);
  return (
    <Container id="home" sx={{ color: "#fff" }}>
      {/* Quantum Metaverse */}
      <SpanTitle title={t("quantummetaverse")} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        mt={2}
      >
        <Box width={{ sm: "100%", md: "50%" }} data-aos="fade-right">
          <Typography
            variant="title"
            sx={{
              typography: { sm: "h3", xs: "h4" },
            }}
          >
            {t("title")}
          </Typography>
          <Typography
            variant="description"
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
          <Link
            href="#"
            sx={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <Button
              fullWidth
              variant="contained"
              sx={{
                margin: "20px 0 10px",
                height: 50,
                backgroundColor: "#ed824e",
                border: "2px solid transparent",
                transition: "all .3s ease",
                "&:hover": {
                  backgroundColor: "#ed824e",
                  boxShadow: "0 3px 32px #ec75518a",
                },
              }}
            >
              {t("gotoapp")}
            </Button>
          </Link>
          <Link
            href="https://quantum-metaverse.gitbook.io/quantum-english-1/"
            target="_blank"
            sx={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <Button
              fullWidth
              variant="contained"
              sx={{
                margin: "5px 0",
                height: 50,
                backgroundColor: "#00cde4",
                border: "2px solid transparent",
                transition: "all .3s ease",
                "&:hover": {
                  backgroundColor: "#00cde4",
                  boxShadow: "0 3px 32px #00e7ea8a",
                },
              }}
            >
              {t("whitepaper")}
            </Button>
          </Link>
        </Box>
        <Box
          width={{ sm: "100%", md: "45%" }}
          mt={{ xs: 5, md: 0 }}
          data-aos="fade-left"
        >
          <img width="100%" height="100%" src={homeImg} alt="home" />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
