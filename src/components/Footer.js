import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ 
        width: "100%", 
        py: { xs: 4, md: 6 }, // Adjust vertical padding responsively
        backgroundColor: "black", 
        color: "white",
        boxSizing: 'border-box'
      }}>
      <Grid 
        container 
        spacing={{ xs: 3, md: 2 }} // Adjust spacing between grid items
        // Change justification based on screen size
        justifyContent={{ xs: 'center', md: 'flex-end' }} 
        sx={{ 
          maxWidth: "1200px", 
          margin: "0 auto", 
          // Adjust overall padding/margin for the grid container
          px: { xs: 2, sm: 4, md: 0 }, // Add horizontal padding on smaller screens
          pl: { md: 50 } // Keep left padding only on medium screens and up
          //textAlign: { xs: 'center', md: 'right' } // Apply text align to grid container might be easier
        }}
      >
        {/* Contact Section */}
        <Grid item xs={12} md={5} sx={{ 
            // Align text center on mobile, right otherwise
            textAlign: { xs: 'center', md: 'right' } 
          }}>
          <Typography variant="h6" sx={{ 
              fontWeight: "bold", 
              mb: 1,
              // Responsive font size for section titles
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}>
            Contact
          </Typography>
          <Typography variant="body2" sx={{ 
              // Responsive font size for body text
              fontSize: { xs: '0.8rem', md: '0.875rem' }
            }}>
            Have questions? Reach out to us at: <br />
            <strong>Email:</strong> support@sfocra.com <br />
            <strong>Phone:</strong> +44 1234 567890 <br />
            <strong>Phone:</strong> +852 6083 3502
          </Typography>
        </Grid>

        {/* Legal Section */}
        <Grid item xs={12} md={4} sx={{ 
            // Align text center on mobile, right otherwise
            textAlign: { xs: 'center', md: 'right' },
            // Add top margin on mobile to separate sections
            mt: { xs: 3, md: 0 }
          }}>
          <Typography variant="h6" sx={{ 
              fontWeight: "bold", 
              mb: 1,
              // Responsive font size for section titles
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}>
            Legal
          </Typography>
          <Link to="/privacy-policy" style={{ color: "white", display: "block", textDecoration: "none", marginBottom: "5px" }}>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.875rem' } }}>Privacy Policy</Typography>
          </Link>
          <Link to="/terms-of-service" style={{ color: "white", display: "block", textDecoration: "none", marginBottom: "5px" }}>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.875rem' } }}>Terms of Service</Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;