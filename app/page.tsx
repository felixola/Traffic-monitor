'use client'
import { ThemeProvider } from "@mui/material/styles";
import { 
  Box, 
  Typography,
  Stack, 
    } from "@mui/material";
import theme from "../components/Theme";
import Top from "../components/Top/Top";
import Search from "../components/interfaces/Search/Search";
import Cards from "../components/MapCards/Cards";
import '../styles/global.css';


export default function Home() {

  return (

    <ThemeProvider theme={theme}>

      <Box className='background' width='100%' height='100%' >

      {/* sub nav */}
      <Top />   

      <Box height='56vh' display='flex' alignItems='center' justifyContent='center'>

        <Stack direction='column'>

          {/* Header */}
          <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap={2}>

            <Typography className='header_text'  sx={{ fontSize: { md: '100px', xs: '60px'}, textAlign: {md: 'left', xs: 'center'}}} fontWeight='900' marginTop='0px !important' lineHeight='1'>

                <span style={{color: '#ee8844',}}>TRAFFIC</span> ANALYZER

            </Typography>

            <Box sx={{ paddingLeft: {md: '0px', xs: '20px', }, paddingRight: {md: '0px', xs: '20px'}}}>
              <Typography sx={{fontSize: { md: '22px', xs: '16px'}, textAlign: {md: 'center', xs: 'center'}}} color='#595a5c'>First web-based on traffic prediction and 
              known technology where using latest technology. </Typography>  
            </Box>

            

          </Box>
     
            {/* Search */}

           <Box display='flex' alignItems='center' justifyContent='center' mt='30px'>

            <Search />

          </Box>

        </Stack>

      </Box>

     
    </Box>


      <Box width='100%' display='flex' justifyContent='center' mt='0.0em'>

        <Cards />

      </Box>


    </ThemeProvider>
  )
}
