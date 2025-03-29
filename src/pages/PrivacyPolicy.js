import React from "react";
import { Box, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box 
      sx={{ 
        padding: "120px 10%", // ✅ Adjusted padding to move content down
        backgroundColor: "#222", 
        color: "white", 
        minHeight: "100vh" 
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "30px" }}>
        SFOCRA – Privacy Policy
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        Last Updated: March 2025
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        Welcome to SFOCRA! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use the SFOCRA mobile application (the "App").
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        By using the App, you agree to the terms outlined in this policy. If you do not agree, please do not use the App.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        1. Information We Collect
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        <strong>1.1 Information You Provide to Us</strong><br />
        • Account Information: If you create an account, we may collect your name, email address, and password. <br />
        • User-Generated Content: Any data you voluntarily submit in the App, such as progress updates, challenges, or fitness logs. <br />
        • Customer Support: If you contact us for support, we may collect your name, email, and message content.
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        <strong>1.2 Information We Collect Automatically</strong><br />
        • Usage Data: We collect information about how you use the App, such as interactions, features used, and time spent. <br />
        • Device Information: We may collect device type, operating system, IP address, and unique device identifiers.
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        <strong>1.3 Information from Third Parties (If Applicable)</strong><br />
        • If you log in or connect with third-party services (e.g., Apple Sign-In, fitness tracking apps), we may receive basic profile information as permitted by those services.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        2. How We Use Your Information
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        We use your data to:<br />
        • Provide, improve, and personalize the App experience. <br />
        • Track progress and maintain user stats. <br />
        • Enhance security and prevent fraud. <br />
        • Provide customer support. <br />
        • Send important updates or service-related notifications. <br /><br />
        We do not sell your personal data to third parties.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        3. How We Share Your Information
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        We may share your information only in these cases:<br />
        • With service providers that help us operate and improve the App (e.g., cloud storage, analytics).<br />
        • For legal reasons, such as responding to law enforcement requests or protecting user safety.<br />
        • With your consent, if you choose to share your progress with others.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        4. Data Retention & Security
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        • We store your data only as long as necessary for the App's functionality. <br />
        • We use encryption and security measures to protect your information. <br />
        • You can request account deletion or data removal by contacting us at support@sfocra.com.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        5. Your Privacy Rights
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        Depending on your location, you may have rights such as:<br />
        • Accessing your data (request a copy of your information).<br />
        • Requesting data deletion (removing personal data from our system).<br />
        • Opting out of tracking (if applicable).<br /><br />
        To exercise these rights, email us at support@sfocra.com.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        6. Children's Privacy
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        • The App is not intended for users under 13 years old.<br />
        • If we learn that we have collected personal data from a child under 13, we will delete it immediately.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        7. Third-Party Services
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        • The App may contain links or integrations with third-party services.<br />
        • We are not responsible for their privacy practices.<br />
        • Please review their privacy policies before using third-party features.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        8. Changes to This Policy
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        • We may update this Privacy Policy from time to time.<br />
        • If significant changes occur, we will notify you via the App or email.<br />
        • Continued use of the App means you accept the updated policy.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        9. Contact Us
      </Typography>
      <Typography variant="body1">
        For privacy-related questions, contact us at:<br />
        📧 <strong>support@sfocra.com</strong>
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;