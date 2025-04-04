import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// SVG icons as components
const SwordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
    <path d="M6.92,5H5L14,14L15,13.06M19.96,19.12L19.12,19.96C18.73,20.35 18.1,20.35 17.71,19.96L14.59,16.84L11.91,19.5L10.5,18.09L11.92,16.67L3,7.75V3H7.75L16.67,11.92L18.09,10.5L19.5,11.91L16.83,14.58L19.95,17.7C20.35,18.1 20.35,18.73 19.96,19.12Z" />
  </svg>
);

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
    <path d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z" />
  </svg>
);

const WhySFOCRA = () => {
  // Animation variants for staggered text animations
  const textVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

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
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={textVariants}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "40px" }}>
            Why "SFOCRA"?
          </Typography>
        </motion.div>

        <motion.div variants={textVariants}>
          <Typography variant="h6" sx={{ marginBottom: "20px", opacity: 0.9 }}>
            SFOCRA represents growth, transformation, and personal excellence.
          </Typography>
        </motion.div>

        <motion.div variants={textVariants}>
          <Typography variant="h6" sx={{ marginBottom: "20px", opacity: 0.9 }}>
            The name breaks down into three powerful concepts: 
            <strong>S</strong> for Sigma (excellence); 
            <strong>FOC</strong> - for Focus (clarity and determination);  and 
            <strong>RA</strong> for Aura (your personal energy and presence).
          </Typography>
        </motion.div>

        <motion.div variants={textVariants}>
          <Typography variant="h6" sx={{ marginBottom: "20px", opacity: 0.9 }}>
            In the context of self-improvement:
          </Typography>
        </motion.div>

        <motion.div variants={textVariants}>
          <Typography variant="h6" sx={{ marginBottom: "10px", opacity: 0.9 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                  <SwordIcon />
                </Box>
              </motion.div>
              <strong>Sigma =</strong> Striving for excellence and mastery in all areas of life.
            </Box>
          </Typography>
        </motion.div>
        
        <motion.div variants={textVariants}>
          <Typography variant="h6" sx={{ marginBottom: "30px", opacity: 0.9 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
              <strong>Focus + Aura =</strong> Directing your energy with clarity while developing your personal presence.
            </Box>
          </Typography>
        </motion.div>

        <motion.div variants={textVariants}>
          <Typography variant="h6" sx={{ marginBottom: "30px", opacity: 0.9 }}>
            Just like in RPGs where characters level up, SFOCRA is about leveling up your real-life skills—your body, mind, and habits—
            to become the best version of yourself.
          </Typography>
        </motion.div>

        <motion.div 
          variants={textVariants}
          whileHover={{ scale: 1.02 }}
        >
          <Typography
            variant="h6"
            sx={{ fontStyle: "italic", fontWeight: "bold", opacity: 0.8 }}
          >
            You are not stuck. You can evolve. You can grow. SFOCRA is the system that helps you do it.
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default WhySFOCRA;