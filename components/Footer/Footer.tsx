'use client'
import React from 'react';
import Link from 'next/link';
import { Box, Typography, Stack, Grid, Divider } from '@mui/material';
import { routes } from '../routes/route';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer: React.FC = () => {

  return (

    <>

    <Divider />
              {/* Copy-right */}
          <Box 
            width='100%' 
            sx={{display: { xs: 'block', md: 'flex'}}} 
            mt='10px'  
            alignItems="center"
            justifyContent='space-between'>

            <Stack direction='row' spacing={0} width='100%' justifyContent='center' alignItems='center'>

            <Typography variant='body1' fontSize='25px' color='#000000' fontWeight='300'>
              © 
              </Typography>
              <Typography variant='body1'  fontSize='15px' color='#000000'>
              {new Date().getFullYear()}
              </Typography>
            </Stack>
          

            
          </Box>
    </>
  )
}

export default Footer