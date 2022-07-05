import { Box, Typography } from "@mui/material";
import React from "react";

const SpanTitle = ({ title }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        mr={1}
        sx={{
          width: "5%",
          height: "1px",
          backgroundColor: "#fff",
          borderRadius: "10%",
        }}
      />
      <Typography variant="p">{title}</Typography>
    </Box>
  );
};

export default SpanTitle;
