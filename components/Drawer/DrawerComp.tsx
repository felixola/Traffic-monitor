import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemButton,
} from "@mui/material";
import Link from 'next/link';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Theme";
import { routes } from "../routes/route";
import MenuIcon from '@mui/icons-material/Menu';
import './Drawer.css';



const DrawerComponent: React.FC = () => {
  
    const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Drawer open={openDrawer}  onClose={() => setOpenDrawer(false)} anchor="right" >

        <List>
              
          {routes.map((page) => (
            <>
           
          <ListItem onClick={() => setOpenDrawer(false)} >

          <Link       key={page.id}
                      href={page.path}
                      color="black"
                      className='link'>
            <ListItemButton  sx={{
            ":hover": {
              backgroundColor: "#FFFFFF"}}}>
              <ListItemText primary={page.title} />
              </ListItemButton>
            </Link>
          
          </ListItem>

          </>


          ))}
        
        </List>

      </Drawer>
   

      <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ marginLeft: 'auto'}}>
        <MenuIcon sx={{color: '#000000'}}/>
      </IconButton>


      </ThemeProvider>
  );
}
export default DrawerComponent;