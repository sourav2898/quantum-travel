import { Box, IconButton, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const SwitchLanguage = ({ color }) => {
  const [lang, setLang] = useState("EN");
  const { i18n, t } = useTranslation(["home"]);

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  const handleLanguageChange = (lang = "en") => {
    // console.log(lang);
    setLang(lang);
    i18n.changeLanguage(lang.toLowerCase());
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
          color,
        },
      }}
      onClick={() => handleLanguageChange(lang === "EN" ? "ES" : "EN")}
    >
      <LanguageIcon />
      <Typography variant="spanTitle" p={0} m={0}>
        {lang === "EN" ? "ES" : "EN"}
      </Typography>
    </Box>
  );
};

export default SwitchLanguage;
