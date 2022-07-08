import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import SpanTitle from "../Common/SpanTitle";
import games_builders from "../../assets/img/partners/game_builders.png";
import facops from "../../assets/img/partners/facops_fundation.png";
import dinopetria from "../../assets/img/partners/dinopetria.png";
import fantom from "../../assets/img/partners/fantom.svg";
import ingeniousc from "../../assets/img/partners/ignesious.png";

const Partners = () => {
  const list = [
    {
      img: games_builders,
      title: "OPEN GAMES BUILDERS",
      link: "https://opengamesbuilders.com/",
    },
    {
      img: facops,
      title: "FACOPS FOUNDATION",
      link: "https://www.facops.net/",
    },
    {
      img: dinopetria,
      title: "DINOPETRIA",
      link: "http://www.dinopetrea.es/",
    },
    {
      img: fantom,
      title: "FANTOM FOUNDATION",
      link: "https://fantom.foundation/",
    },
    {
      img: ingeniousc,
      title: "INGENIOUSC",
      link: "https://www.ingeniousc.com/",
    },
  ];

  return (
    <Container
      id="partners"
      sx={{
        color: "#fff",
        marginBottom: { sm: 2, xs: 1, md: 5 },
        paddingTop: { sm: 3, xs: 3, md: 20 },
      }}
    >
      <SpanTitle title="OUR FRIENDS" />
      <Typography mt={2} sx={{ typography: { sm: "h3", xs: "h4" } }}>
        PARTNERS
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {list.map((val, index) => {
          return (
            <>
              <Link
                key={index}
                href={val?.link}
                target="_blank"
                sx={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#fff",
                  opacity: 0.5,
                  "&:hover": {
                    opacity: 1,
                  },
                  textAlign: "center",
                }}
                mr={5}
              >
                <img width={200} src={val?.img} alt={val?.title} />
                <Typography variant="h5"> {val?.title} </Typography>
              </Link>
            </>
          );
        })}
      </Box>
    </Container>
  );
};

export default Partners;
