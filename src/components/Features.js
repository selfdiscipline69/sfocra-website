import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// SVG icons as components
const GamepadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
    <path d="M7,6H17A6,6 0 0,1 23,12A6,6 0 0,1 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18A6,6 0 0,1 1,12A6,6 0 0,1 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M18.5,9A1.5,1.5 0 0,0 17,10.5A1.5,1.5 0 0,0 18.5,12A1.5,1.5 0 0,0 20,10.5A1.5,1.5 0 0,0 18.5,9Z" />
  </svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
  </svg>
);

const FireIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
    <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
  </svg>
);

const PeopleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
    <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z" />
  </svg>
);

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
        sx={{ 
          flex: "1", 
          minWidth: { xs: '100%', md: '400px' }, // Take full width on mobile, 400px otherwise
          pr: { xs: 0, md: 3 } // Add some padding-right on larger screens
        }}
      >
        <motion.div variants={itemVariants}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: "bold", 
              mb: { xs: 3, md: '50px' }, // Adjust margin-bottom responsively (mb stands for margin-bottom)
              // Responsive font size
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' }, // Adjust h3 size
              textAlign: { xs: 'center', md: 'left' } // Center text on mobile
            }}
          >
            Features
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography variant="h6" sx={{ 
              mb: { xs: 2, md: '40px' }, // Adjust margin-bottom responsively
              // Responsive font size for feature text
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' }, // Adjust h6 size slightly
              textAlign: { xs: 'center', md: 'left' } // Center text on mobile
            }}>
            <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                // Center content within the box on mobile
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
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
                  <GamepadIcon />
                </Box>
              </motion.div>
              <strong>RPG Progression</strong> – Level up by completing daily quests
            </Box>
          </Typography>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Typography variant="h6" sx={{ 
              mb: { xs: 2, md: '40px' }, // Adjust margin-bottom responsively
              // Responsive font size for feature text
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' }, // Adjust h6 size slightly
              textAlign: { xs: 'center', md: 'left' } // Center text on mobile
            }}>
            <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                // Center content within the box on mobile
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
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
                  <TargetIcon />
                </Box>
              </motion.div>
              <strong>Mind & Body Quests</strong> – Study, train, and grow stronger
            </Box>
          </Typography>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Typography variant="h6" sx={{ 
              mb: { xs: 2, md: '40px' }, // Adjust margin-bottom responsively
              // Responsive font size for feature text
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' }, // Adjust h6 size slightly
              textAlign: { xs: 'center', md: 'left' } // Center text on mobile
            }}>
            <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                // Center content within the box on mobile
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
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
                  <FireIcon />
                </Box>
              </motion.div>
              <strong>Habit Tracking & Streaks</strong> – Build consistency over time
            </Box>
          </Typography>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Typography variant="h6" sx={{ 
              fontWeight: "bold", 
              opacity: 0.8, 
              mb: { xs: 4, md: '40px' }, // Adjust margin-bottom responsively
              // Responsive font size for feature text
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' }, // Adjust h6 size slightly
              textAlign: { xs: 'center', md: 'left' } // Center text on mobile
            }}>
            <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                // Center content within the box on mobile
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
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
                  <PeopleIcon />
                </Box>
              </motion.div>
              Social Progress Sharing (Coming Soon!)
            </Box>
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
          minWidth: { xs: '100%', md: '400px' }, // Take full width on mobile
          mt: { xs: 4, md: 0 } // Add margin-top on mobile to separate from text
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