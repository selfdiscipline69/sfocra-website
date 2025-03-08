import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: "10px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left - 46 + 2 Title */}
        <Typography 
          variant="h2" 
          sx={{ fontWeight: "bold", color: "black", cursor: "pointer" }}
          component={Link}
          to="/" // Clicking the title navigates to home
          style={{ textDecoration: "none" }}
        >
          46 + 2
        </Typography>

        {/* Right - Navigation Links (Only Contact, No Background) */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button 
            component={Link} 
            to="/contact"  
            sx={{ 
              color: "black", 
              textTransform: "none", 
              fontSize: "18px", 
              padding: "12px 24px",
              backgroundColor: "transparent", // ✅ No background color
              "&:hover": { backgroundColor: "transparent" } // Prevent background on hover
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;