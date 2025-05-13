import React, { useState } from "react";
import { Box, TextField, Typography, Button, Grid, MenuItem, Snackbar, Alert } from "@mui/material";
import Footer from "../components/Footer"; // ✅ Import Footer
import supabase from "../supabaseClient"; // Import Supabase client

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Send Contact Form Data to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email) {
      setSnackbar({
        open: true,
        message: "Please enter your email.",
        severity: "error"
      });
      return;
    }

    setLoading(true);

    try {
      // Insert data into Supabase table
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            first_name: formData.firstName || "",
            last_name: formData.lastName || "",
            email: formData.email,
            phone: formData.phone || "",
            inquiry_type: formData.inquiryType || "General",
            message: formData.message || "",
            created_at: new Date(),
            subscribed_to_newsletter: true // Subscribing by default
          }
        ]);

      if (error) {
        throw error;
      }

      // Success - show snackbar instead of alert
      setSnackbar({
        open: true,
        message: "Your message has been sent successfully!",
        severity: "success"
      });
      
      // Set submitted state to show success message
      setSubmitted(true);
      
      // Reset form data
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
      
    } catch (error) {
      console.error("❌ Error:", error);
      setSnackbar({
        open: true,
        message: "Something went wrong. Please try again later.",
        severity: "error"
      });
    }

    setLoading(false);
  };

  // Handle resetting the form
  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    });
  };

  return (
    <>
      <Box 
        sx={{ 
          width: "100%", 
          py: { xs: 10, sm: 15, md: 20 }, 
          display: "flex", 
          justifyContent: "center", 
          backgroundImage: "url('/images/contact-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          color: "white",
          px: { xs: 2, sm: 3, md: 0 }
        }}
      >
        <Box 
          sx={{ 
            maxWidth: { xs: '95%', sm: '80%', md: '600px' }, 
            width: "100%", 
            backgroundColor: "rgba(34, 34, 34, 0.85)", 
            p: { xs: 3, sm: 4, md: 5 }, 
            borderRadius: "20px", 
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            position: "relative",
            zIndex: 2,
            backdropFilter: "blur(10px)",
            minHeight: { xs: '500px', sm: '550px', md: '600px' } // Set consistent minimum height
          }}
        >
          <Typography variant="h4" sx={{ 
              fontWeight: "bold", 
              mb: 3, 
              textAlign: "center",
              fontSize: { xs: '1.8rem', sm: '2rem', md: '2.125rem' }
            }}>
            Contact Us
          </Typography>

          {submitted ? (
            <Box sx={{ 
              textAlign: "center", 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: { xs: '350px', sm: '400px', md: '450px' } // Match approximate form height
            }}>
              <Typography variant="h6" sx={{ 
                  color: "#4caf50", 
                  fontWeight: "bold",
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' },
                  mb: 3
                }}>
                Thank you! Your message has been sent.
              </Typography>
              
              <Button
                variant="contained"
                sx={{ 
                  mt: 2, 
                  py: { xs: 1, sm: 1.2 }, 
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  borderRadius: "10px", 
                  backgroundColor: "red", 
                  color: "white",
                  "&:hover": {
                    backgroundColor: "darkred"
                  } 
                }}
                onClick={handleReset}
              >
                Send Another Message
              </Button>
            </Box>
          ) : (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* First Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    variant="outlined"
                    value={formData.firstName}
                    onChange={handleChange}
                    InputLabelProps={{ sx: { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
                    inputProps={{ sx: { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
                    sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "5px" }}
                  />
                </Grid>

                {/* Last Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    variant="outlined"
                    value={formData.lastName}
                    onChange={handleChange}
                    InputLabelProps={{ sx: { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
                    inputProps={{ sx: { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
                    sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "5px" }}
                  />
                </Grid>
              </Grid>

              {/* Email */}
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                variant="outlined"
                sx={{ mt: 2, backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "5px" }}
                value={formData.email}
                onChange={handleChange}
                InputLabelProps={{ sx: { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
                inputProps={{ sx: { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
              />

              {/* Phone Number */}
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                variant="outlined"
                sx={{ mt: 2, backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "5px" }}
                value={formData.phone}
                onChange={handleChange}
                InputLabelProps={{ sx: { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
                inputProps={{ sx: { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
              />

              {/* Inquiry Type Dropdown */}
              <TextField
                select
                fullWidth
                label="Inquiry Type"
                name="inquiryType"
                variant="outlined"
                sx={{ mt: 2, backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "5px" }}
                value={formData.inquiryType}
                onChange={handleChange}
                InputLabelProps={{ sx: { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
                SelectProps={{ sx: { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
              >
                <MenuItem value="" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>Select an option</MenuItem>
                <MenuItem value="Support" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>Technical Support</MenuItem>
                <MenuItem value="Feedback" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>Feedback & Suggestions</MenuItem>
                <MenuItem value="Collaboration" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>Business Collaboration</MenuItem>
                <MenuItem value="Other" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>Other Inquiry</MenuItem>
              </TextField>

              {/* Message */}
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                variant="outlined"
                multiline
                rows={5}
                sx={{ mt: 2, backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "5px" }}
                value={formData.message}
                onChange={handleChange}
                InputLabelProps={{ sx: { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
                inputProps={{ sx: { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
              />

              {/* Submit Button with Loading State */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ 
                  mt: 3, 
                  py: { xs: 1.2, sm: 1.5 }, 
                  fontSize: { xs: '1rem', sm: '1rem' },
                  borderRadius: "10px", 
                  backgroundColor: "red", 
                  color: "white",
                  "&:hover": {
                    backgroundColor: "darkred"
                  } 
                }}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </Box>
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

      {/* ✅ Footer Added Below */}
      <Footer />
    </>
  );
};

export default ContactUsSection;