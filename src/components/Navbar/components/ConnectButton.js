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
        "&:hover": {
          backgroundColor: "#20c997",
        },
        margin: 2,
      }}
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectButton;
