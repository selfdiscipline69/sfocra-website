import React from "react";
import { Box, Typography } from "@mui/material";

const Features = () => {
  return (
    <Box
      sx={{
        width: "80%",
        backgroundColor: "#222", // Dark background
        color: "white",
        padding: "100px 10% 80px", // Increased top padding to push the title higher
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {/* Left Side: Text Content */}
      <Box sx={{ flex: "1", minWidth: "400px" }}>
        <Typography 
          variant="h3" 
          sx={{ fontWeight: "bold", marginBottom: "50px" }} // Increased bottom margin for more height
        >
          Features
        </Typography>

        <Typography variant="h6" sx={{ marginBottom: "40px" }}>
          <strong>RPG Progression</strong> – Level up by completing daily quests
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "40px" }}>
          <strong>Mind & Body Quests</strong> – Study, train, and grow stronger
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "40px" }}>
          <strong>Habit Tracking & Streaks</strong> – Build consistency over time
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold", opacity: 0.8, marginBottom: "40px" }}>
          Social Progress Sharing (Coming Soon!)
        </Typography>
      </Box>

      {/* Right Side: iPhone Image Mockup */}
      <Box sx={{ flex: "1", textAlign: "left", minWidth: "400px" }}>
        <img
          src="/images/iphone-mockup.png" // Make sure this image is in the "public/images" folder
          alt="46+2 App Preview"
          style={{ width: "100%", maxWidth: "350px", borderRadius: "20px" }}
        />
      </Box>
    </Box>
  );
};

export default Features;