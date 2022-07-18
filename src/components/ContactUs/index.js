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
            border: "1px solid lightgray",
            borderRadius: 1,
            padding: 2,
            background: "#fff",
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
            border: "1px solid lightgray",
            borderRadius: 1,
            padding: 2,
            background: "#fff",
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
            border: "1px solid lightgray",
            borderRadius: 1,
            padding: 2,
            background: "#fff",
          }}
        />

        <Button
          variant="contained"
          sx={{
            margin: "20px 0 10px",
            height: 50,
            width: { sm: "100%", xs: "100%", md: "60%" },
            backgroundColor: "#ed824e",
            "&:hover": {
              backgroundColor: "#ed824e",
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
