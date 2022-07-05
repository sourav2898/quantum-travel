import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import aboutImg from "../../assets/img/about_img.png";
import SpanTitle from "../Common/SpanTitle";

const About = () => {
  const { t } = useTranslation(["about"]);

  return (
    <Container
      id="about"
      sx={{
        color: "#fff",
        marginBottom: { sm: 2, xs: 1, md: 5 },
        paddingTop: { sm: 3, xs: 3, md: 20 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        mt={2}
        mb={{ sm: 5, xs: 5, md: 15 }}
      >
        <Box width={{ sm: "100%", md: "50%" }}>
          <Typography sx={{ typography: { sm: "h3", xs: "h4" } }}>
            {t("title")}
          </Typography>
          <Typography
            component="p"
            mt={{ xs: 2, sm: 2, md: 0 }}
            sx={{
              fontSize: "18px",
              lineHeight: "1.85",
            }}
          >
            {" "}
            {t("desc")}{" "}
          </Typography>
        </Box>
        <Box width={{ sm: "100%", md: "45%" }} mt={{ xs: 5, md: 0 }}>
          <img width="100%" height="100%" src={aboutImg} alt="home" />
        </Box>
      </Box>

      <SpanTitle title={t("info")} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        mt={2}
      >
        <Box width={{ sm: "100%", md: "55%" }}>
          <Typography sx={{ typography: { sm: "h3", xs: "h4" } }}>
            {t("quantummetaverse")}
          </Typography>
          <Typography sx={{ typography: { sm: "h3", xs: "h4" } }}>
            {t("metaversedesc")}
          </Typography>
          <Typography
            component="p"
            mt={{ xs: 2, sm: 2, md: 0 }}
            sx={{
              fontSize: "18px",
              lineHeight: "1.85",
            }}
          >
            {t("span")}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
