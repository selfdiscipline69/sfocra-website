import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const [status, setStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        // Placeholder for authentication logic
        // Since we've removed Supabase, you'll need to implement a new auth solution here
        
        // Simulating success for now
        console.log('Email confirmation simulation');
        setStatus('success');
        
        // Redirect to home page after 3 seconds
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } catch (error) {
        console.error('Unexpected error:', error);
        setStatus('error');
        setErrorMessage('An unexpected error occurred');
      }
    };

    handleEmailConfirmation();
  }, [navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: { xs: '20px', sm: '40px' },
        backgroundColor: '#222',
        color: 'white',
      }}
    >
      {status === 'loading' && (
        <>
          <CircularProgress color="error" size={60} />
          <Typography variant="h5" sx={{ mt: 3, textAlign: 'center' }}>
            Verifying your email...
          </Typography>
        </>
      )}

      {status === 'success' && (
        <>
          <Box
            sx={{
              backgroundColor: 'green',
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <Typography variant="h4">✓</Typography>
          </Box>
          <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
            Email Confirmed!
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
            Your email has been verified successfully.
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.7 }}>
            Redirecting you to the homepage...
          </Typography>
        </>
      )}

      {status === 'error' && (
        <>
          <Box
            sx={{
              backgroundColor: 'red',
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <Typography variant="h4">✗</Typography>
          </Box>
          <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
            Verification Failed
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
            {errorMessage || 'There was a problem verifying your email.'}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.7 }}>
            Please try again or contact support for assistance.
          </Typography>
        </>
      )}
    </Box>
  );
};

export default Callback; 