import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

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
            <strong>🗡️ Sigma =</strong> Striving for excellence and mastery in all areas of life.
          </Typography>
        </motion.div>
        
        <motion.div variants={textVariants}>
          <Typography variant="h6" sx={{ marginBottom: "30px", opacity: 0.9 }}>
            <strong>🧠 Focus + Aura =</strong> Directing your energy with clarity while developing your personal presence.
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