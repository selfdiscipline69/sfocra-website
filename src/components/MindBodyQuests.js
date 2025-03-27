import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// SVG icons as components
const FitnessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
  </svg>
);

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
  </svg>
);

const TuneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
    <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
  </svg>
);

const MindBodyQuests = () => {
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
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Box
      sx={{
        width: "80%",
        backgroundColor: "#222", // Dark background like Why46Plus2
        color: "white",
        padding: "100px 10%",
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
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "40px" }}>
            Mind & Body Quests
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography variant="h6" sx={{ marginBottom: "20px", opacity: 0.9 }}>
            Balance your physical and mental development with targeted quests.
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
                <FitnessIcon />
              </Box>
            </motion.div>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Physical Quests: Workouts, running, yoga, and more
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
                <BrainIcon />
              </Box>
            </motion.div>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Mental Quests: Reading, meditation, learning, and problem-solving
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
                <TuneIcon />
              </Box>
            </motion.div>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Customizable difficulty levels to match your current abilities
            </Typography>
          </Box>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", opacity: 0.8 }}>
            Develop a stronger body and sharper mind simultaneously.
          </Typography>
        </motion.div>
      </Box>

      {/* Right Side: Image */}
      <Box sx={{ flex: "1", textAlign: "center", minWidth: "400px" }}>
        <motion.img
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src="/images/mind-body.png" // Add this image to public/images folder
          alt="Mind & Body Quests"
          style={{ width: "100%", maxWidth: "350px", borderRadius: "20px" }}
        />
      </Box>
    </Box>
  );
};

export default MindBodyQuests; 