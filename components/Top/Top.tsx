import React from 'react';
import { Stack, Typography, Box, Chip, } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Top = () => {

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (

    <ThemeProvider theme='theme'>

         <Stack direction='row' spacing={2} display='flex' alignItems='center'>

            <Box  sx={{paddingLeft: { md: '50px', xs: '25px'}}} py='40px' flexGrow='1' >

              <Stack direction='row' spacing={2} display='flex' alignItems='center'>

                  <CircleIcon sx={{color:'#17b978', fontSize: '10px !important',}} /> 

                  <Typography variant="subtitle2" fontWeight='400'>Active</Typography>

              </Stack>
            
            </Box>

            {/* Chip */}
            <Box  sx={{paddingRight: { md: '50px', xs: '25px'}}} py='40px' flexGrow='0' >

              <Stack direction='row' spacing={2} display='flex' alignItems='center'>

                <Chip
                  label="Api documentation"
                  onDelete={handleDelete}
                  deleteIcon={<ArrowCircleRightIcon sx={{color: '#616161'}} />}
                  variant="outlined"
                />

              </Stack>
            
            </Box>

            </Stack>

    </ThemeProvider>
  );
}

export default Top