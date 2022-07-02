import { Box, IconButton, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";

const SwitchLanguage = ({ color }) => {
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
    >
      <LanguageIcon />
      <Typography p={0} m={0}>
        ES
      </Typography>
    </Box>
  );
};

export default SwitchLanguage;
