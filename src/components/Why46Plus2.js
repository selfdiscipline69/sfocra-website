import React from "react";
import { Box, Typography } from "@mui/material";

const Why46Plus2 = () => {
  return (
    <Box
      sx={{
        width: "80%",
        height: "120",
        backgroundColor: "#222", // Dark background
        color: "white",
        padding: "100px 10%",
        textAlign: "left",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "40px" }}>
        Why “46+2”?
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: "20px", opacity: 0.9 }}>
        46+2 represents growth, transformation, and evolution.
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: "20px", opacity: 0.9 }}>
        The name is inspired by the idea that humans have 46 chromosomes, and the +2 symbolizes the next stage of development—
        both physically and mentally.
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: "20px", opacity: 0.9 }}>
        In the context of self-improvement:
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: "10px", opacity: 0.9 }}>
        <strong>46 =</strong> Your current self, with all your strengths and limitations.
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: "30px", opacity: 0.9 }}>
        <strong>+2 =</strong> Pushing beyond, evolving into something greater.
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: "30px", opacity: 0.9 }}>
        Just like in RPGs where characters level up, 46+2 is about leveling up your real-life skills—your body, mind, and habits—
        to become the best version of yourself.
      </Typography>

      <Typography
        variant="h6"
        sx={{ fontStyle: "italic", fontWeight: "bold", opacity: 0.8 }}
      >
        You are not stuck. You can evolve. You can grow. 46+2 is the system that helps you do it.
      </Typography>
    </Box>
  );
};

export default Why46Plus2;