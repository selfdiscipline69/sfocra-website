import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", py: 6, backgroundColor: "black", color: "white" }}>
      <Grid 
        container 
        spacing={2} 
        justifyContent="flex-end" // ✅ Moves everything more to the right
        sx={{ maxWidth: "1200px", margin: "0 auto", pl: 50 }} // ✅ Added right padding (pr: 10) to shift content
      >
        {/* Contact Section */}
        <Grid item xs={12} md={5} sx={{ textAlign: "right" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Contact
          </Typography>
          <Typography variant="body2">
            Have questions? Reach out to us at: <br />
            <strong>Email:</strong> support@46plus2.com <br />
            <strong>Phone:</strong> +44 1234 567890
          </Typography>
        </Grid>

        {/* Legal Section */}
        <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Legal
          </Typography>
          <Link to="/privacy-policy" style={{ color: "white", display: "block", textDecoration: "none", marginBottom: "5px" }}>
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" style={{ color: "white", display: "block", textDecoration: "none", marginBottom: "5px" }}>
            Terms of Service
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;