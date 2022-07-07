import {
  Box,
  Container,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import roadMapImg from "../../assets/img/roadmap.png";

const RoadMap = () => {
  const { t } = useTranslation(["roadmap"]);
  const steps = [
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
  ];
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
      <img width="100%" src={roadMapImg} alt="roadmap" />
    </Container>
  );
};

export default RoadMap;
