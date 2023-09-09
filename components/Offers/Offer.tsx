'use client';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Theme";
import { Typography, Box, Grid } from "@mui/material";


const Offer = () => {
  return (
    <ThemeProvider theme={theme}>

        <Box width='100%'>

            <Grid container>

                <Grid item md={6} px='50px' py='130px'>

                    <Box>

                        <Box>

                            <Typography color='#000000' variant='h4' fontWeight='800'>Serices Offered</Typography>

                        </Box>

                        <Box display='flex' alignItems='center' justifyContent='center' py='10px'>

                        <Box sx={{ transform: 'rotate(180deg)', zIndex: 1, flex: 0.2, backgroundColor: '#BE6A15', width: '2px !important', height: { md: '30px', xs: '150px' }, }} mr='10px'></Box>
                            <Typography color='#303a52' style={{ flex: 20 }} align='left' variant='h6' fontWeight='400'>
                            Web design and Development
                            </Typography>
                            
                    </Box>

              </Box>
                   
                </Grid>
                <Grid item md={6} display='flex' alignItems='center' justifyContent='center'>

                    <Box pr='20px'>
                        <Typography align='left' variant='body1' fontWeight='400' fontSize='16px' color='#303a52'>
                            We are excited to announce our upcoming event that will take place on [date] at [time].
                            This event will be a great opportunity for all of us to come together and celebrate
                            our organization's achievements as well as plan for the future.
                        </Typography>
                        <Typography align='left' variant='body1' fontWeight='400' fontSize='16px' color='#303a52'>
                            We are excited to announce our upcoming event that will take place on [date] at [time].
                            This event will be a great opportunity for all of us to come together and celebrate
                            our organization's achievements as well as plan for the future.
                        </Typography>
                        
                    </Box>

                </Grid>
            </Grid>
        </Box>
    </ThemeProvider>
  )
}

export default Offer