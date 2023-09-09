'use client'
import { styled } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material/styles";
import Image from 'next/image';
import LogoImg from '../../public/assets/images/fender-bender.png'
import { AppBar, Toolbar, Box, Typography, Stack, Button, useMediaQuery } from "@mui/material";
import DrawerComponent from '../Drawer/DrawerComp';
import theme from "../Theme";
import Link from 'next/link';
import { routes } from '../routes/route';
import SearchIcon from '@mui/icons-material/Search';


const SignUp = styled(Button)({ 
    border: '2px solid #3d5af1',
    backgroundColor: '#FFFFFF',
    color: '#3d5af1',
    fontWeight: '600',
    borderRadius: '5px',
    height: '35px',
    width: '100px',
    boxShadow: 'none',
    textTransform: 'none',
    padding: '6px 12px',
    lineHeight: 1.5,
    
})

const Header = () => {

    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (

    <ThemeProvider theme={theme}>

        <AppBar position='static' sx={{backgroundColor: '#FFFFFF', boxShadow: 'none'}}>

            <Toolbar>

                <Box flexGrow='1' sx={{paddingLeft: { md: '20px', xs: '5px'}}}>

                    <Link href="/" style={{textDecoration: 'none'}}>

                        <Stack direction='row' spacing={1} display='flex' alignItems='center'>

                            {/* <Image src={LogoImg} alt='logo-image' width={30} /> */}
                            <Typography variant="h5" color='#3d5af1' fontWeight='900'>TM</Typography>
                           
                        </Stack>

                    </Link>  

                </Box>

                { isMobile ? (

                    <Box sx={{width: '100%', display: 'flex', marginRight: '0px', justifyContent:'end'}}>
                    <DrawerComponent />
                    </Box>

                ) : (

                    <Box flexGrow='0' display='flex' alignItems='center' justifyContent='center' gap={4} px='10px'>

                    <Stack direction='row' spacing={4}>

                        {routes.map((page) => (

                            <>
                                                
                            <Link
                            key={page.key}
                            href={page.path} style={{textDecoration: 'none'}}>         

                                <Typography color='#000000' variant="body2" fontWeight='bold'>

                                    {page.title}

                                </Typography>

                                </Link>

                                </>

                            ))}

                     </Stack>


                        <SearchIcon sx={{color: '#000000'}}/>
        
                    <SignUp variant='contained'>Sign Up</SignUp>

                </Box>
                    
                )}

                

            </Toolbar>

        </AppBar>

    </ThemeProvider>

  )
}

export default Header;