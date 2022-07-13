import { Box, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import opengames from "../../assets/img/footer_img_left.webp";
import logo from "../../assets/img/logo.png";
import { Twitter, GitHub } from "@mui/icons-material";

const footerItems = [
  {
    img: opengames,
    header1: "OPEN GAMES BUILDERS® S.L.U. C/Francisco Tomas y Valiente, 1-1",
    header2: "46960 Aldaia (Valencia)",
    header3: "España",
    extLink: "elcorreoquequieres@correo.com",
    website: "info@opengamesbuilders.com ",
    twitter: "https://twitter.com/OGamesBuilders",
    discord: "https://t.co/CbmwpesQA1",
  },
  {
    img: logo,
    header1: "QUANTUM METAVERSE",
    header2: "Contactanos",
    extLink: "info@facops.org",
    website: "info@facops.org ",
    twitter: "https://twitter.com/QuantumMuseum",
    discord: "https://t.co/QrIOorEZ6b",
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {footerItems.map((value, index) => {
        return (
          <Box
            key={index}
            sx={{ width: "40%", color: "#999" }}
            p={3}
            textAlign="center"
          >
            <img width="80%" src={value?.img} alt="footer_open_games" />
            <Box sx={{ width: "70%", margin: "10px auto" }}>
              <Typography m={0}>{value?.header1}</Typography>
              <Typography>{value?.header2}</Typography>
              <Typography>{value?.header3}</Typography>
            </Box>
            <Link
              href={value?.extLink}
              target="_blank"
              sx={{ textDecoration: "none", color: "#fff", cursor: "pointer" }}
            >
              {" "}
              {value?.website}{" "}
            </Link>
            <Box>
              <Link
                href={value?.twitter}
                target="_blank"
                sx={{ textDecoration: "none", color: "#fff" }}
              >
                <IconButton
                  aria-label="linkedin"
                  size="small"
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "blue",
                    },
                  }}
                >
                  <Twitter />
                </IconButton>
              </Link>
              <Link
                href={value?.discord}
                target="_blank"
                sx={{ textDecoration: "none", color: "#fff" }}
              >
                <IconButton
                  aria-label="linkedin"
                  size="small"
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "blue",
                    },
                  }}
                >
                  <GitHub />
                </IconButton>
              </Link>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Footer;
