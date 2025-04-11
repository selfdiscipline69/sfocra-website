import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer"; // Assuming Footer is needed here too

const DownloadPage = () => {
  return (
    <>
      <Box sx={{ 
          textAlign: "center", 
          // Adjust padding responsively
          p: { xs: 4, sm: 6, md: 8 },
          // Add top padding to account for potential absolute Navbar
          pt: { xs: 12, sm: 15 },
          minHeight: 'calc(100vh - 100px)' // Example: Calculate min height minus footer
         }}>
        <Typography variant="h1" sx={{ 
            mb: 2, 
            // Responsive font size for h1
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}>
            Download SFOCRA
        </Typography>
        <Typography variant="body1" sx={{ 
            // Responsive font size for body text
            fontSize: { xs: '1rem', md: '1.1rem' }
          }}>
            The app will be available soon!
        </Typography>
        {/* Add download buttons or links here when ready */}
      </Box>
      <Footer />
    </>
  );
};

export default DownloadPage;