'use client'
import { ThemeProvider } from "@mui/material/styles";
import { 
  Box, 
  Typography, 
  Stack, 
  Button, 
  Grid, 
  Avatar, 
  Divider, 
  AvatarGroup, 
  Paper, 
  IconButton,
  InputBase,
  OutlinedInput,
  InputAdornment,
  FormControl,
  Input,
  InputLabel,
  TextField,
 } from "@mui/material";
import theme from "../../Theme";
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NearMeIcon from '@mui/icons-material/NearMe';
import DirectionsIcon from '@mui/icons-material/Directions';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Click = styled(Button)({ 
  // border: '2px solid #3d5af1',
  backgroundColor: '#ee8844',
  color: '#FFFFFF',
  borderRadius: '12px',
  height: '58px',
  width: '58px',
  boxShadow: 'none',
  textTransform: 'none',
  padding: '6px 12px',
  
})


const Search = () => {
  return (
    <ThemeProvider theme={theme}>

        
        <FormControl variant="standard">

          <Stack direction='row' spacing={2} display='flex' alignItems='center'>

            {/* Paper */}
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 450, height: '55px', boxShadow: 'none',  border: '2px solid #dee1ec', borderRadius: '12px'}}>

              {/* InputBase */}
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Maps"
              inputProps={{ 'aria-label': 'search google maps' }}/>

              {/* DirectionIcon */}
            <IconButton type="button" sx={{ p: '10px' }} aria-label="directions">
              <ArrowDropDownIcon/>
            </IconButton>
            
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

              {/* Search Icon */}
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          {/* Click Button */}
          <Click><NearMeIcon /> </Click>

          </Stack>
       

        </FormControl>

    </ThemeProvider>
  )
}

export default Search