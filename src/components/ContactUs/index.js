import { Box, Button, Container, InputBase, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import bgImg from "../../assets/img/contact-bg.png";

const ContactUs = () => {
  const { t } = useTranslation(["contactus"]);
  return (
    <Container
      id="contact-us"
      sx={{
        color: "#fff",
        marginBottom: { sm: 2, xs: 1, md: 5 },
        paddingTop: { sm: 3, xs: 3, md: 20 },
        textAlign: "center",
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      }}
    >
      <Typography variant="p"> {t("span")} </Typography>
      <Typography variant="h4" m={3}>
        {" "}
        {t("header")}{" "}
      </Typography>
      <Box>
        <InputBase
          name="fullName"
          placeholder="Name"
          sx={{
            display: "block",
            margin: "0 auto",
            marginBottom: 2,
            width: { sm: "100%", xs: "100%", md: "60%" },
            color: "#999",
            fontWeight: "500",
            border: "1px solid transparent",
            borderRadius: 1,
            padding: 2,
            background: "#272f4c",
            transition: "all .3s ease",
            "&:focus-within": {
              backgroundColor: "#fff",
            },
          }}
        />
        <InputBase
          name="fullName"
          placeholder="Email"
          sx={{
            display: "block",
            margin: "0 auto",
            marginBottom: 2,
            width: { sm: "100%", xs: "100%", md: "60%" },
            color: "#999",
            fontWeight: "500",
            border: "1px solid transparent",
            borderRadius: 1,
            padding: 2,
            background: "#272f4c",
            transition: "all .3s ease",
            "&:focus-within": {
              backgroundColor: "#fff",
            },
          }}
        />
        <InputBase
          name="fullName"
          placeholder="Message"
          rows={8}
          multiline
          sx={{
            display: "block",
            margin: "0 auto",
            marginBottom: 2,
            width: { sm: "100%", xs: "100%", md: "60%" },
            color: "#999",
            fontWeight: "500",
            border: "1px solid transparent",
            borderRadius: 1,
            padding: 2,
            background: "#272f4c",
            transition: "all .3s ease",
            "&:focus-within": {
              backgroundColor: "#fff",
            },
          }}
        />

        <Button
          variant="contained"
          sx={{
            margin: "20px 0 10px",
            height: 50,
            width: { sm: "100%", xs: "100%", md: "60%" },
            backgroundColor: "#ed824e",
            border: "2px solid transparent",
            transition: "all .3s ease",
            "&:hover": {
              backgroundColor: "#ed824e",
              boxShadow: "0 3px 32px #ec75518a",
            },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;
