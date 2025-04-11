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
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/images/knight-red-moon.png')",
        backgroundSize: "cover",
        backgroundPosition: { xs: '60% center', sm: '60% center', md: '60% center' },
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "left",
        padding: { xs: '15% 5%', sm: '10% 5%', md: '5%' },
        color: "white",
        marginLeft: "0",
        marginRight: "0",
        boxSizing: "border-box",
        overflow: 'hidden'
      }}
    >
      
      {/* Overlay for better text visibility */}
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      /> */}

      {/* Content on top of the background image */}
      <Box sx={{ 
          position: "relative", 
          zIndex: 2, 
          maxWidth: { xs: '90%', sm: '70%', md: '50%' },
          textAlign: { xs: 'left', sm: 'left' },
          mt: { xs: '13vh', sm: '15vh', md: '20vh' },
          mx: { xs: 'initial', sm: 'initial' }
        }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h2" sx={{ 
              mt: 2,
              fontSize: { xs: '1.6rem', sm: '2.2rem', md: '3rem' },
              lineHeight: { xs: 1.3, sm: 1.4 }
            }}>
            SFOCRA is a gamified self-improvement app that helps you level up your mind and body.
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
              padding: { xs: '10px 20px', sm: '12px 24px' },
              fontSize: { xs: '1rem', sm: '1.125rem'},
              borderRadius: "30px",
              transition: "all 0.3s ease",
            }}
            onClick={() => navigate("/download")}
          >
            Download Now iOS
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;