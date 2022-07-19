import { Button } from "@mui/material";
import React from "react";

const ConnectButton = ({ display }) => {
  return (
    <Button
      variant="contained"
      sx={{
        display: display,
        backgroundColor: "#10cb6c",
        height: "50px",
        width: "180px",
        border: "2px solid transparent",
        transition: "all .3s ease",
        "&:hover": {
          backgroundColor: "#20c997",
          boxShadow: "0 3px 32px #00e7ea8a",
        },
        margin: 2,
      }}
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectButton;
