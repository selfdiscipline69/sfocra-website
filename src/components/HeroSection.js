import React, { useState } from "react";
import { Box, Typography, Button, TextField, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import supabase from "../supabaseClient";

const HeroSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleWaitlistSignup = async (e) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setSnackbar({
        open: true,
        message: "Please enter a valid email address",
        severity: "error"
      });
      return;
    }

    setLoading(true);

    try {
      // Insert email into Supabase waitlist table
      const { data, error } = await supabase
        .from('waitlist_signups')
        .insert([{ 
          email: email,
          created_at: new Date(),
          source: 'website_hero'
        }]);

      if (error) {
        if (error.code === '23505') {
          // Unique constraint error - email already exists
          setSnackbar({
            open: true,
            message: "You're already on our waitlist!",
            severity: "info"
          });
        } else {
          throw error;
        }
      } else {
        setSnackbar({
          open: true,
          message: "You've been added to our waitlist!",
          severity: "success"
        });
        setEmail("");
      }
    } catch (error) {
      console.error("Error signing up for waitlist:", error);
      setSnackbar({
        open: true,
        message: "Something went wrong. Please try again later.",
        severity: "error"
      });
    }

    setLoading(false);
  };

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
          mt: { xs: '5vh', sm: '15vh', md: '20vh' },
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
        
        {/* Waitlist Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box component="form" 
            onSubmit={handleWaitlistSignup}
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: 2,
              width: '100%',
              mt: 3
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '5px',
                width: { xs: '100%', sm: '70%' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                },
              }}
            />
            <Button 
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                bgcolor: 'red',
                color: 'white',
                padding: { xs: '10px 15px', sm: '12px 24px' },
                width: { xs: '100%', sm: 'auto' },
                fontSize: '1rem',
                borderRadius: '5px',
                '&:hover': {
                  bgcolor: 'darkred',
                },
                whiteSpace: 'nowrap'
              }}
            >
              {loading ? "Signing up..." : "Join Waitlist"}
            </Button>
          </Box>
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
              mt: 5,
              backgroundColor: "red",
              color: "white",
              padding: { xs: '5px 10px', sm: '12px 24px' },
              fontSize: { xs: '1rem', sm: '1.125rem'},
              borderRadius: "30px",
              transition: "all 0.3s ease",
            }}
            onClick={() => navigate("/download")}
          >
            Download (ios)
          </Button>
        </motion.div>
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default HeroSection;