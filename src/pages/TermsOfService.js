import React from "react";
import { Box, Typography } from "@mui/material";

const TermsOfService = () => {
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
        SFOCRA – Terms of Service
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        Last Updated: March 2025
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        Welcome to SFOCRA! These Terms of Service ("Terms") govern your use of the SFOCRA mobile application (the "App"). 
        By accessing or using the App, you agree to these Terms. If you do not agree, please do not use the App.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        1. Who Can Use the App
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        • You must be at least 13 years old to use the App. <br />
        • If you are under 18, you need permission from a parent or legal guardian. <br />
        • By using the App, you confirm that you meet these eligibility requirements.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        2. Your Account
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        • Some features may require you to create an account. <br />
        • You are responsible for keeping your login details secure. <br />
        • You must not share your account with others or allow unauthorized access. <br />
        • We may suspend or terminate your account if you violate these Terms.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        3. Acceptable Use
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        You agree to use the App in a lawful and respectful way. You must not: <br />
        • Use the App for any illegal, harmful, or misleading activities. <br />
        • Interfere with or disrupt the App's functionality or security. <br />
        • Copy, modify, or distribute any part of the App without permission. <br />
        • Violate any third-party rights (such as intellectual property).
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        4. Content Ownership & Usage
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        • All content, trademarks, and code in the App belong to SFOCRA. <br />
        • You may not use or copy any part of the App without our permission. <br />
        • If you submit content (such as progress updates or challenges), you allow us to use it within the App.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        5. Payments & Subscriptions (If Applicable)
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        • Some features may require a subscription or one-time payment. <br />
        • Payments are processed securely through the Apple App Store. <br />
        • Any refunds or cancellations must follow Apple's policies.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        6. Privacy & Data
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        • We collect and use your information according to our Privacy Policy (linked separately). <br />
        • We do not sell or share your personal data with third parties without your consent. <br />
        • You are responsible for protecting your own data, such as login credentials.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        7. Changes to the App
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        • We may update, change, or remove features of the App at any time. <br />
        • We are not responsible if changes affect how you use the App.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        8. Termination of Use
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        We may suspend or terminate your access to the App if you: <br />
        • Violate these Terms, <br />
        • Engage in harmful activities, or <br />
        • Misuse the App in any way. <br /><br />
        You can stop using the App at any time by deleting your account (if applicable) or uninstalling the App.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        9. Disclaimer & Limitation of Liability
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        • The App is provided "as is" and "as available" without warranties. <br />
        • We do not guarantee that the App will always work perfectly or without errors. <br />
        • We are not responsible for any damages or losses caused by using the App.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        10. Updates to These Terms
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        • We may update these Terms from time to time. <br />
        • If changes are significant, we will notify you via the App or email. <br />
        • Continued use of the App means you accept the updated Terms.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        11. Contact Information
      </Typography>
      <Typography variant="body1">
        If you have any questions or concerns about these Terms, you can contact us at: <br />
        📧 <strong>support@sfocra.com</strong>
      </Typography>
    </Box>
  );
};

export default TermsOfService;