import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import getDesignTokens from './BaseStyle';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DayView from './Day/Day';
import WeekView from './Week/Week';

export default function Base() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [view, setView] = React.useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItem = (value) => {
    setAnchorEl(null);
    setView(value)
  }

  const darkModeTheme = createTheme(getDesignTokens('dark'));

  return (
    <ThemeProvider theme={darkModeTheme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={() => handleMenuItem('Cycle')}>Cycle</MenuItem> */}
                <MenuItem onClick={() => handleMenuItem('Week')}>Week</MenuItem>
                {/* <MenuItem onClick={() => handleMenuItem('Day')}>Day</MenuItem> */}
        </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    {view === 'Day' && (
        <DayView/>
    )}
    {view === 'Week' && (
        <WeekView/>
    )}
    </ThemeProvider>
  );
}
