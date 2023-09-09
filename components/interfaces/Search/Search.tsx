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
  OutlinedInput,
  InputAdornment,
  FormControl,
  Input,
  InputLabel,
  TextField,
 } from "@mui/material";
import theme from "../../Theme";
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = styled(OutlinedInput)({ 
  backgroundColor: '#FFFFFF',

  "& fieldset": { border: '2px solid #dee1ec' },

  
})


const Search = () => {
  return (
    <ThemeProvider theme={theme}>

        
        <FormControl variant="standard">

        <SearchBar
            size='small'
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"><SearchIcon/> </InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>

    </ThemeProvider>
  )
}

export default Search