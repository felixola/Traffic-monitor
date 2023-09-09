import React from 'react';
import { Stack, Typography, Box, } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Top = () => {
  return (
    <ThemeProvider theme='theme'>

         <Stack direction='row'>

            <Box  sx={{paddingLeft: { md: '50px', xs: '27px'}}} py='40px' flexGrow='1'>

              <Stack direction='row' spacing={2} display='flex' alignItems='center'>

                  <CircleIcon sx={{color:'#17b978', fontSize: '10px !important',}} /> 

                  <Typography variant="body1" fontWeight='500'>Congestion control</Typography>

              </Stack>
            
            </Box>

            <Box  sx={{paddingRight: { md: '50px', xs: '25px'}}} py='40px' flexGrow='0' >

            <Stack direction='row' spacing={2} display='flex' alignItems='center'>

                <NotificationsIcon sx={{color:'#3d5af1', fontSize: '20px !important',}} /> 

            </Stack>
            
            </Box>

            </Stack>
    </ThemeProvider>
  )
}

export default Top