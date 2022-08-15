import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { headerLink } from "../config";


export default function DrawerNav() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 150 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {headerLink.map(([title, url]) => (
        <a href={url}>
            <ListItem key={title} disablePadding>
                <ListItemButton>
                <p>{title}</p>
                </ListItemButton>
            </ListItem>
        </a>
        ))}
      </List>
    </Box>
  );

  return (
      <div>
          {/* ['left', 'right', 'top', 'bottom' */}
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}> 
                <MenuOpenIcon className='icon-md' style={{fill:"white"}} />
              </Button>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
