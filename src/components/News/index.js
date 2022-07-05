import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import meatverseVid from "../../assets/videos/trees1.mp4";
import artGalleryVid from "../../assets/videos/trees2.mp4";
import museumVid from "../../assets/videos/trees3.mp4";

const News = () => {
  const { t } = useTranslation(["news"]);

  const list = [
    {
      title: t("metaverse"),
      video: meatverseVid,
    },
    {
      title: t("artgallery"),
      video: artGalleryVid,
    },
    {
      title: t("museum"),
      video: museumVid,
    },
  ];

  return (
    <Container
      id="news"
      sx={{
        color: "#fff",
        marginBottom: { sm: 2, xs: 1, md: 5 },
        paddingTop: { sm: 3, xs: 3, md: 20 },
      }}
    >
      <Typography sx={{ typography: { sm: "h3", xs: "h4" } }}>
        {t("threepilars")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        mt={2}
      >
        {list?.map((val) => {
          return (
            <Box
              key={val}
              sx={{ width: { sm: "100%", xs: "100%", md: "40%" } }}
              mb={3}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  mr={1}
                  sx={{
                    width: "3%",
                    height: "2px",
                    backgroundColor: "#fff",
                    borderRadius: "10%",
                  }}
                />
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "30px",
                    fontWeight: 100,
                    marginBottom: "3px",
                  }}
                >
                  {val?.title.toUpperCase()}
                </Typography>
              </Box>
              <video style={{ marginTop: 10 }} width={"100%"} autoPlay muted>
                <source src={val?.video} type="video/mp4" />
              </video>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default News;
