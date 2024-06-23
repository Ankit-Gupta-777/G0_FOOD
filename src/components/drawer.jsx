import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import '../App.css';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      {/* <List>
        {['Home', 'Groceries', 'Pages'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <div style={{display:'flex',gap:'20px',width:'90%',margin:'auto'}}>
      <MailIcon /> 
        <Link to='/' className='drawer_Link'> 
        Home
        </Link>
        </div>
        <div style={{display:'flex',gap:'20px',width:'90%',margin:'auto'}}>
      <InboxIcon /> 
        <Link to='/' className='drawer_Link'> 
        Groceries
        </Link>
        </div>
        <div style={{display:'flex',gap:'20px',width:'90%',margin:'auto'}}>
      <InboxIcon /> 
        <Link to='/' className='drawer_Link'> 
        Pages
        </Link>
        </div>
      <Divider />
      <h3>Connect with us</h3>
      <div style={{display:'flex',gap:'20px',width:'90%',margin:'auto'}}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 25 6 C 13.421 6 4 13.8225 4 23.4375 C 4 29.5615 7.9466406 35.308891 14.306641 38.462891 C 14.002641 39.407891 13.106781 41.078594 12.175781 42.433594 C 11.934781 42.784594 11.943312 43.248797 12.195312 43.591797 C 12.387313 43.853797 12.688 44 13 44 C 13.099 44 13.196922 43.984078 13.294922 43.955078 C 15.723922 43.205078 18.33525 41.748125 19.78125 40.328125 C 20.690757 40.521855 21.616419 40.653703 22.548828 40.742188 C 24.940677 42.755685 28.244614 43.990234 31.841797 43.990234 C 33.013255 43.990234 34.188265 43.852989 35.337891 43.585938 C 36.384344 44.315325 37.521711 44.58987 38.572266 44.947266 A 1.0001 1.0001 0 0 0 39.742188 43.466797 C 39.384102 42.897562 39.169632 42.658155 38.972656 42.199219 C 42.649396 40.192133 44.947266 36.757832 44.947266 32.994141 C 44.947266 31.942129 44.761563 30.933224 44.4375 29.976562 C 45.433437 27.955018 46 25.753191 46 23.4375 C 46 13.8225 36.579 6 25 6 z M 31.841797 24 C 38.068957 24 42.947266 28.140009 42.947266 32.994141 C 42.947266 35.969675 41.145727 38.76769 37.958984 40.482422 A 1.0001 1.0001 0 0 0 37.957031 40.484375 C 37.326022 40.824847 37.074008 41.499264 37.072266 42.189453 C 36.896198 42.102293 36.592201 42.04088 36.447266 41.9375 A 1.0001 1.0001 0 0 0 36.445312 41.935547 C 36.12793 41.710906 35.739477 41.583984 35.345703 41.583984 C 35.199513 41.583984 35.052625 41.601246 34.910156 41.634766 C 33.901002 41.871228 32.868502 41.990234 31.841797 41.990234 C 25.614637 41.990234 20.736328 37.848273 20.736328 32.994141 C 20.736421 28.140011 25.614637 24 31.841797 24 z M 26.703125 31.056641 A 1.976 1.976 0 1 0 26.703125 35.007812 A 1.976 1.976 0 1 0 26.703125 31.056641 z M 32.236328 31.056641 A 1.976 1.976 0 1 0 32.236328 35.007812 A 1.976 1.976 0 1 0 32.236328 31.056641 z M 37.769531 31.056641 A 1.976 1.976 0 1 0 37.769531 35.007812 A 1.976 1.976 0 1 0 37.769531 31.056641 z"></path>
</svg>
        <Link to='/contact' className='drawer_Link'> 
        Mail
        </Link>
        </div>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
      <svg xmlns="http://www.w3.org/2000/svg"  style={{fill:'#fff'}} x="0px" y="0px" width="64" height="64" viewBox="0 0 72 72">
<path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
</svg>

      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
