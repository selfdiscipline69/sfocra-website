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
        {/* Left - 46 + 2 Title */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Typography 
            variant="h2" 
            sx={{ fontWeight: "bold", color: "white", cursor: "pointer" }}
            component={Link}
            to="/" // Clicking the title navigates to home
            style={{ textDecoration: "none" }}
          >
            46 + 2
          </Typography>
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
                fontSize: "18px", 
                padding: "12px 24px",
                backgroundColor: "red", // Added red background color
                borderRadius: "30px", // Added rounded corners
                "&:hover": { 
                  backgroundColor: "darkred" // Changed hover effect to a darker red
                } 
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