import React from 'react'
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { Box } from '@mui/system';
const SearchOffer = () => {
    const searchBarStyles = {
        width: '100%',
        maxWidth: '716px',
        height: '44px',
        borderRadius: '24px',
        background: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
       
      };
    
      const inputStyles = {
        border: 'none',
        borderColor: 'transparent',
        textAlign: 'center',
        color: 'var(--gray-scale-gray-400, #98A2B3)',
      };
    
      const buttonStyles = {
        color: 'white',
        background: 'var(--primary-primary-500, #7A5AF8)',
        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        padding: '10px 20px',
        borderRadius: '24px',
      };
    
      const searchimgStyles = {
        marginRight: '8px',
      };
  return (
    <Container maxWidth="xxl">
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{px:{lg:'80px',xs:'0px'}}}>
          <Grid item xs={12} lg={6} sx={{ p: 2 }}>
          
          
          
          <Box sx={{  
            
      mt:2,
       
        borderRadius: '10px',
        background: '#ffffff'}}
        >
              <TextField
                sx={{
                  border: 'none',
                  background:'#fffff',
                  "& fieldset": { border: 'none' },
                }}
                placeholder="Search model or type"
                variant="outlined"
                InputProps={{
                  style: { ...inputStyles, textAlign: 'left' },
                }}
              />
</Box>
             
         
          </Grid>

         
         
        </Grid>

      </Container>
  )
}

export default SearchOffer
