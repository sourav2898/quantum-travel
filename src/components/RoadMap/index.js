import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import roadMapImg from "../../assets/img/roadmap.png";
import Stepper from "./Stepper";
import bgImg from "../../assets/img/roadMap_bg_img.png";

const RoadMap = () => {
  const { t } = useTranslation(["roadmap"]);
  const steps = {
    englishSteps: [
      {
        label: "Select campaign settings",
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
      },
      {
        label: "Create an ad group",
        description:
          "An ad group contains one or more ads which target a shared set of keywords.",
      },
      {
        label: "Create an ad",
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
      },
    ],
    spainSteps: [
      {
        label: "DISEÑO INICIAL",
        description: `Diseño y conceptualización del proyecto QUANTUM pzfra el proyecto fisico. Q1 2021`,
      },
      {
        label: "UBICACIÓN",
        description: `Contacto con entidades interesadas en alojar el proyecto QUANTUM fisico. Q2 2021`,
      },
      {
        label: "DISEÑO METAVERSO",
        description: `Diseño y conceptualización del proyecto QUANTUM para el proyecto virtal. Q1 2022`,
      },
      {
        label: "VIRTUALIZACIÓN",
        description: `Selección y virtualización de piezas para NFT de juego, galería y y museo. Q1 2022`,
      },
      {
        label: "CREACIÓN METAVERSO",
        description: `Busqueda de socios y empresas apra la creación y promoción de QUANTUM METAVERSE. Q2 2022`,
      },
      {
        label: "SUBASTA INICIAL",
        description: `Creación de la primera subasta de piezas QUANTUM. Q3 2022`,
      },
      {
        label: "INAUGURACIÓN",
        description: `Inauguración galería de arte THE ART OF NATURE en el metaverso. .Q4 2023`,
      },
      {
        label: "INAUGURACIÓN",
        description: `Inauguración NFT GAME DINIPETREA en el metaverso. .Q1 2023`,
      },
      {
        label: "INAUGURACIÓN",
        description: `Inauguración Museo QUANTUM en el metaverso. .Q2 2023`,
      },
      {
        label: "CONSTRUCCIÓN",
        description: `Inicio construcción QUANTUM fisico. .Q3 2023`,
      },
    ],
  };
  return (
    <Container
      id="roadmap"
      sx={{
        color: "#fff",
        marginBottom: { sm: 2, xs: 1, md: 5 },
        paddingTop: { sm: 3, xs: 3, md: 20 },
      }}
    >
      <Typography width="100%" color="#666" fontWeight="500" textAlign="center">
        {t("ourway")}
      </Typography>
      <Typography
        variant="h3"
        width="100%"
        fontWeight="500"
        textAlign="center"
        mb={{ xs: 3, sm: 3, md: 8 }}
      >
        {t("roadmap")}
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${bgImg})`,
          // backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }}
      >
        <img
          width="100%"
          src={roadMapImg}
          alt="roadmap"
          style={{ opacity: 0.7 }}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: 5,
          }}
        >
          <Stepper steps={steps[t("steps")]} />
        </Box>
      </Box>
    </Container>
  );
};

export default RoadMap;
