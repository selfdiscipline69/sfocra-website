import React, { useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import supabase from "../supabaseClient";

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Extract hash parameters from URL
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    
    // Check for access_token which indicates successful email verification
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");
    
    if (accessToken && refreshToken) {
      // User has verified their email, you could:
      // 1. Set a session with the tokens
      // 2. Update the user's status in waitlist_signups
      const setSession = async () => {
        const { data, error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken
        });
        
        if (!error && data) {
          console.log("Email verification successful");
          // You could update user status in the waitlist table here if needed
        }
      };
      
      setSession();
    }
  }, []);

  return (
    <>
      <Container maxWidth="md">
        <Box 
          sx={{ 
            textAlign: "center", 
            py: { xs: 12, md: 16 },
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              component="h1"
              sx={{ 
                mb: 4, 
                color: "#e32636", 
                fontWeight: "bold",
                fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' } 
              }}
            >
              Thank You!
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4,
                maxWidth: "800px",
                mx: "auto",
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                lineHeight: 1.6
              }}
            >
              Your email has been confirmed and you're now officially on our waitlist! 
              We'll keep you updated with our progress and let you know when SFOCRA is ready.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/")}
              sx={{ 
                mt: 2,
                backgroundColor: "red",
                fontWeight: "bold",
                padding: "12px 30px",
                fontSize: "1.1rem",
                borderRadius: "30px",
                "&:hover": {
                  backgroundColor: "darkred"
                }
              }}
            >
              Return Home
            </Button>
          </motion.div>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ThankYouPage; 