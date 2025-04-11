import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <AppBar
      component={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      position="absolute"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: "10px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left - Logo and SFOCRA Title */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Box 
            component={Link}
            to="/"
            sx={{ 
              display: "flex", 
              alignItems: "center",
              textDecoration: "none"
            }}
          >
            <img 
              src="/white_logo.png" 
              alt="SFOCRA Logo" 
              style={{ 
                height: "90px", 
                marginRight: "15px" 
              }} 
            />
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: "bold", 
                color: "white",
                fontSize: { 
                  xs: '1.3rem',
                  sm: '1.8rem',
                  md: '2.5rem',
                },
              }}
            >
              SFOCRA
            </Typography>
          </Box>
        </motion.div>

        {/* Right - Navigation Links (Only Contact, No Background) */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              component={Link} 
              to="/contact"  
              sx={{ 
                color: "white", 
                textTransform: "none", 
                backgroundColor: "red", 
                borderRadius: "30px", 
                "&:hover": { 
                  backgroundColor: "darkred" 
                },
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
                padding: { xs: '6px 12px', sm: '8px 16px', md: '12px 24px' },
                marginRight: { xs: '10px', sm: '0' }
              }}
            >
              Contact
            </Button>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;