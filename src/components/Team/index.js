import { Box, Container, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import SpanTitle from "../Common/SpanTitle";
import { useTranslation } from "react-i18next";
import jonatan from "../../assets/img/Jonatan.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Twitter } from "@mui/icons-material";
import teamList from "./teamList";

const Team = () => {
  const { t } = useTranslation(["team"]);
  return (
    <Container
      id="team"
      sx={{
        color: "#fff",
        marginBottom: { sm: 2, xs: 1, md: 5 },
        paddingTop: { sm: 3, xs: 3, md: 20 },
      }}
    >
      <SpanTitle title="Our Brain" />
      <Typography mt={3} mb={5} sx={{ typography: { sm: "h3", xs: "h4" } }}>
        AWESOME TEAM
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {teamList.map((value, index) => {
          return (
            <Box key={index} sx={{ display: "flex" }} m={3}>
              <Box
                sx={{
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  overflow: "hidden",
                  textAlign: "center",
                }}
                mr={3}
              >
                <img
                  src={value?.src}
                  alt="jonatan"
                  sx={{ objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  width: 180,
                }}
              >
                <Typography>{value?.name}</Typography>
                <Typography color="aliceblue" mb={3}>
                  {value?.designation}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  {value.twitter && (
                    <Link
                      href={value?.twitter}
                      target="_blank"
                      sx={{ textDecoration: "none", color: "#fff" }}
                    >
                      <IconButton
                        aria-label="twitter"
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
                  )}
                  {value?.linkedin && (
                    <Link
                      href={value?.linkedin}
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
                        <LinkedInIcon />
                      </IconButton>
                    </Link>
                  )}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default Team;
