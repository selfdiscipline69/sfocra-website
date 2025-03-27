import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw", // Changed from 89vw to full width
        height: "100vh", // Ensure full height
        backgroundImage: "url('/images/knight-red-moon.png')",
        backgroundSize: "cover", // Ensures it covers the entire screen
        backgroundPosition: "60% center", // Slightly shifted to the right
        backgroundRepeat: "no-repeat", // Prevents tiling
        backgroundAttachment: "fixed", // Optional: Creates a parallax effect
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        padding: "5%",
        color: "white",
        marginLeft: "0", // Ensure no margin
        marginRight: "0", // Ensure no margin
        boxSizing: "border-box", // Include padding in width calculation
      }}
    >
      
      {/* Overlay for better text visibility */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

      {/* Content on top of the background image */}
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "50%" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h2" sx={{ mt: 2 }}>
            46+2 is a gamified self-improvement app that helps you level up your mind and body.
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "red",
              color: "white",
              padding: "12px 24px",
              fontSize: "18px",
              borderRadius: "30px",
              transition: "all 0.3s ease",
            }}
            onClick={() => navigate("/download")} // Navigate to Download Page
          >
            Download Now iOS
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;