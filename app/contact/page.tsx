'use client';
import { ThemeProvider, styled } from "@mui/material/styles";
import theme from "../../components/Theme";
import { Box, Typography, Stack, Grid, Avatar, Button } from '@mui/material';
import User from '../../public/assets/images/User.jpeg';
import CircleIcon from '@mui/icons-material/Circle';

const Hire = styled(Button)({ 
  backgroundColor: '#000000',
  fontSize: '20px', 
  color: '#FFFFFF',
  fontWeight: '600',
  borderRadius: '25px',
  height: '50px',
  width: '250px',
  boxShadow: 'none',
  textTransform: 'none',
  padding: '6px 12px',
  lineHeight: 1.5,
  
})

const page = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box mt='4em'>
        <Grid container>
          {/* Grid 1 */}
          <Grid item md={4} px='50px'>

            <Box py='40px' sx={{ border: '1px solid #e5e7eb', borderRadius:'20px', width: '100%', height:'100vh',}}>

              <Stack direction='column' spacing={4} display='flex'  alignItems='center'>

                <Avatar alt="Remy Sharp" src={User.src} sx={{ width: 150, height: 150 }}/>
                <Typography variant='h5' fontWeight='900' color='#10316B'>MOBOLAKU FELIX</Typography>
                <Hire variant='contained' 
              startIcon={<CircleIcon sx={{ fontSize: '25px !important', }} />}
                >Get in Touch</Hire>
              </Stack>

            </Box>
            
          </Grid>
          {/* Grid 2 */}
          <Grid item md={8}>

          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default page