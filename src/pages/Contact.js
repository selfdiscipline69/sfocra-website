import React, { useState } from "react";
import { Box, TextField, Typography, Button, Grid, MenuItem } from "@mui/material";
import Footer from "../components/Footer"; // ✅ Import Footer

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Send Contact Form Data to Backend API
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim() || "Anonymous",
          email: formData.email,
          phone: formData.phone || "",
          inquiryType: formData.inquiryType || "General",
          message: formData.message || "",
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
        alert("✅ Your message has been sent!");
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <>
      <Box 
        sx={{ 
          width: "100%", 
          py: 20, 
          display: "flex", 
          justifyContent: "center", 
          backgroundImage: "url('/images/contact-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          color: "white"
        }}
      >

        
        <Box 
          sx={{ 
            maxWidth: "600px", 
            width: "100%", 
            backgroundColor: "rgba(34, 34, 34, 0.85)", 
            p: 5, 
            borderRadius: "20px", 
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            position: "relative",
            zIndex: 2,
            backdropFilter: "blur(10px)"
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
            Contact Us
          </Typography>

          {submitted ? (
            <Typography variant="h6" sx={{ color: "#4caf50", textAlign: "center", mt: 3, py: 10, fontWeight: "bold" }}>
              Thank you! Your message has been sent.
            </Typography>
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
              >
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Support">Technical Support</MenuItem>
                <MenuItem value="Feedback">Feedback & Suggestions</MenuItem>
                <MenuItem value="Collaboration">Business Collaboration</MenuItem>
                <MenuItem value="Other">Other Inquiry</MenuItem>
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
              />

              {/* Submit Button with Loading State */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ 
                  mt: 3, 
                  py: 1.5, 
                  fontSize: "16px", 
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

      {/* ✅ Footer Added Below */}
      <Footer />
    </>
  );
};

export default ContactUsSection;