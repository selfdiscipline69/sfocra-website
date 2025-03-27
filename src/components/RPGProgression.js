import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// SVG icons as components
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
  </svg>
);

const RPGProgression = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  // Floating animation for the level-up image
  const floatingAnimation = {
    y: [0, -15, 0], // Move up 15px and back down
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }
  };

  return (
    <Box
      sx={{
        width: "80%",
        backgroundColor: "#222", 
        color: "white", 
        padding: "100px 10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {/* Left Side: Image */}
      <Box sx={{ flex: "1", textAlign: "center", minWidth: "400px" }}>
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          animate={floatingAnimation}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src="/images/level-up.png" // Add this image to public/images folder
          alt="RPG Progression"
          style={{ width: "100%", maxWidth: "350px", borderRadius: "20px" }}
        />
      </Box>

      {/* Right Side: Text Content */}
      <Box 
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        sx={{ flex: "1", minWidth: "400px" }}
      >
        <motion.div variants={itemVariants}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "40px" }}>
            RPG Progression
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography variant="h6" sx={{ marginBottom: "20px", opacity: 0.9 }}>
            Transform your self-improvement journey into an exciting role-playing adventure.
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "20px" }}>
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <Box 
                sx={{ 
                  backgroundColor: 'red', 
                  color: 'white', 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '10px',
                  fontWeight: 'bold'
                }}
              >
                <StarIcon />
              </Box>
            </motion.div>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Earn XP for every completed task and watch your character level up
            </Typography>
          </Box>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "20px" }}>
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <Box 
                sx={{ 
                  backgroundColor: 'red', 
                  color: 'white', 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '10px',
                  fontWeight: 'bold'
                }}
              >
                <TrophyIcon />
              </Box>
            </motion.div>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Unlock achievements and badges as you hit milestones
            </Typography>
          </Box>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "20px" }}>
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <Box 
                sx={{ 
                  backgroundColor: 'red', 
                  color: 'white', 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '10px',
                  fontWeight: 'bold'
                }}
              >
                <ChartIcon />
              </Box>
            </motion.div>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Track your progress with intuitive, gamified visualizations
            </Typography>
          </Box>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", opacity: 0.8 }}>
            Make self-improvement feel less like work and more like play.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default RPGProgression; 