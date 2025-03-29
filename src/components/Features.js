import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Features = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

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
      <Box 
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        sx={{ flex: "1", minWidth: "400px" }}
      >
        <motion.div variants={itemVariants}>
          <Typography 
            variant="h3" 
            sx={{ fontWeight: "bold", marginBottom: "50px" }} // Increased bottom margin for more height
          >
            Features
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography variant="h6" sx={{ marginBottom: "40px" }}>
            <strong>🎮 RPG Progression</strong> – Level up by completing daily quests
          </Typography>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Typography variant="h6" sx={{ marginBottom: "40px" }}>
            <strong>🎯 Mind & Body Quests</strong> – Study, train, and grow stronger
          </Typography>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Typography variant="h6" sx={{ marginBottom: "40px" }}>
            <strong>🔥 Habit Tracking & Streaks</strong> – Build consistency over time
          </Typography>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Typography variant="h6" sx={{ fontWeight: "bold", opacity: 0.8, marginBottom: "40px" }}>
            👥 Social Progress Sharing (Coming Soon!)
          </Typography>
        </motion.div>
      </Box>

      {/* Right Side: Images */}
      <Box 
        sx={{ 
          flex: "1", 
          display: "flex", 
          justifyContent: "space-around", 
          flexWrap: "wrap", 
          gap: "20px", 
          minWidth: "400px" 
        }}
      >
        {/* First Image */}
        <Box sx={{ textAlign: "center" }}>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/images/iphone-mockup.png" // Make sure this image is in the "public/images" folder
            alt="SFOCRA App Preview"
            style={{ maxWidth: "300px", height: "auto", borderRadius: "20px" }}
          />
        </Box>
        
        {/* Second Image */}
        <Box sx={{ textAlign: "center" }}>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src="/images/iphone-stats.png" // Add this second image to public/images folder
            alt="SFOCRA Stats Screen"
            style={{ maxWidth: "300px", height: "auto", borderRadius: "20px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Features;