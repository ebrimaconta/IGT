import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { Menu as MenuIcon } from '@material-ui/icons';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import Logo from './Logo';
import LogoMob from './LogoMob';

const pages = ['Lorem ipsum', 'Lorem Ipsum', 'Lorem Ipsum'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const btnSX = {
    my: 2,
    color: 'black',
    display: 'block',
    marginRight: '10px',
    width: { xs: '120px', lg: '180px' },
  };

  const btnX = {
    my: 2,
    color: 'white',
    display: 'block',
    marginRight: '10px',
    width: { xs: '120px', lg: '180px' },
  };

  return (
    <AppBar position='static' sx={{ backgroundColor: { md: 'white', xs: '#003459' } }}>
      <Container maxWidth='xl'>
        <Toolbar sx={{ padding: { xs: 'none', md: '0 9rem' }, minHeight: 36 }}>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, flexGrow: 1, color: 'black' }}
          >
            <Logo />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
              <Typography>Menu</Typography>
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'black' }}
          >
            <LogoMob />
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button onClick={handleCloseNavMenu} sx={btnSX}>
              Lorem ipsum
            </Button>
            <Button onClick={handleCloseNavMenu} sx={btnX} variant='contained'>
              Lorem Ipsum
            </Button>
            <Button onClick={handleCloseNavMenu} sx={btnX} variant='contained'>
              Lorem Ipsum
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
