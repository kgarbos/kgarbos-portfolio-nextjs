import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Hidden, Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const ResponsiveMenu: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleListItemClick = (item) => {
    if (drawerOpen) {
      if (item.href.startsWith("#")) {
        const targetId = item.href.replace("#", "");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView();
        }
      }
      setDrawerOpen(false);
    }
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Skills', href: '/skills' },
    { text: 'Projects', href: '/projects' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '#contact' },
  ];

  const drawer = (
    <Box sx={{ width: '250px' }}>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component="a" href={item.href} onClick={() => handleListItemClick(item)} sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { animation: `${pulse} 1s infinite` } }}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#333', borderBottom: '1px solid #777', position: 'relative' }}>
        <img src="/bitmoji.png" alt="Bitmoji Face" style={{ position: 'absolute', left: 0, top: '35%', transform: 'translateY(-50%)', width: '80px', height: '80px' }} />

        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component="a" href="/" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { animation: `${pulse} 0.8s infinite` }, marginLeft: '70px' }}>
              Krzysztof Garbos
            </Typography>
          </div>
          <Hidden mdUp>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdDown>
            <Box sx={{ display: 'flex' }}>
              {menuItems.map((item) => (
                <Typography
                  key={item.text}
                  component="a"
                  href={item.href}
                  sx={{ marginRight: 2, textDecoration: 'none', color: 'inherit', '&:hover': { animation: `${pulse} 1s infinite` } }}
                >
                  {item.text}
                </Typography>
              ))}
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
};

export default ResponsiveMenu;