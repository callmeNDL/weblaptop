import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import useStyles from './appBar.styles';
import favicon from '../../assets/imgs/favicon.png';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';

const PrimarySearchAppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector((state) => state.user);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {!user.userId && (
        <MenuItem onClick={handleMenuClose}>
          <p
            onClick={() => {
              navigate('/signin');
            }}
          >
            Sign In
          </p>
        </MenuItem>
      )}

      <MenuItem onClick={handleMenuClose}>
        <p
          onClick={() => {
            navigate('/signup');
          }}
        >
          Sign Up
        </p>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <p
          onClick={() => {
            navigate('/profile');
          }}
        >
          My account
        </p>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.AppBar} style={{ boxShadow: 'none' }}>
          <Toolbar style={{ backgroundColor: 'white' }}>
            <img className={classes.img} src={favicon} alt="img-logo" onClick={handleClick} />
            <div className={classes.searchContainer}>
              <div className={classes.SearchBox}>
                <input type="text" className={classes.searchInput} placeholder="Nhập từ khoá cần tìm" />
                <button className={classes.searchButton}>
                  <SearchIcon />
                </button>
              </div>
            </div>
            <Box sx={{ flexGrow: 1 }} />
            <Box className={classes.Profile} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="82869E">
                <Badge badgeContent={4} color="error">
                  <ShoppingCartIcon
                    color="#82869E"
                    onClick={() => {
                      navigate('/cart');
                    }}
                  />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="#82869E"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="#82869E"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </Box>
    </Container>
  );
};

export default PrimarySearchAppBar;
