import React, { useState, useEffect } from 'react';
import supabase from './supabaseClient';

function SupabaseTest() {
  const [status, setStatus] = useState('Testing...');
  
  useEffect(() => {
    async function testConnection() {
      try {
        // Try a simple query
        const { data, error } = await supabase
          .from('waitlist_signups')
          .select('count')
          .limit(1);
        
        if (error) {
          console.error('Supabase error:', error);
          setStatus(`Connection failed: ${error.message}`);
        } else {
          setStatus('Connection successful!');
        }
      } catch (err) {
        console.error('Error testing Supabase:', err);
        setStatus(`Error: ${err.message}`);
      }
    }
    
    testConnection();
  }, []);
  
  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Supabase Connection Test</h2>
      <p>Status: {status}</p>
      <p>Supabase URL: {process.env.REACT_APP_SUPABASE_URL || 'Not found'}</p>
    </div>
  );
}

export default SupabaseTest; 