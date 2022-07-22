import { Box, Typography } from "@mui/material";
import React from "react";

const Stepper = ({ steps }) => {
  return (
    <>
      {steps?.map((value, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "80%",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                display: { md: "block", sm: "none", xs: "none" },
                width: "20%",
                textAlign: "right",
                marginRight: 2,
              }}
              variant="h6"
            >
              {" "}
              {value?.label}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: 2,
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: "2px solid #00cde4",
                  backgroundColor: "black",
                  marginBottom: 0,
                  padding: 0,
                }}
              />
              {index !== steps.length - 1 && (
                <Box
                  sx={{
                    width: 2,
                    backgroundColor: "#00cde4",
                    height: { md: 150, sm: 235, xs: 235 },
                  }}
                />
              )}
            </Box>
            <Box
              sx={{
                width: { md: 150, sm: 60, xs: 60 },
                height: 2,
                backgroundColor: "#00cde4",
                marginRight: 2,
                marginTop: 1,
              }}
            />
            <Box
              sx={{ width: { md: "40%", sm: "100%", xs: "100%" }, margin: 0 }}
            >
              <Typography
                sx={{
                  display: { md: "none", sm: "block", xs: "block" },
                }}
                variant="h6"
              >
                {" "}
                {value?.label}
              </Typography>
              <Typography variant="description">
                {" "}
                {value?.description}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default Stepper;
