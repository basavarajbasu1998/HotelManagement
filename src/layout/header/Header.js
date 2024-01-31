import MenuIcon from "@mui/icons-material/Menu";
import { Collapse, Container, Popover, Stack, styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { NavItem } from "./NavItem";

// import { dsd } from '../../../../public/assets/images/dashlogo.png';

// import sasd from './dashlogo.png'

const drawerWidth = 240;

const HEADER_MOBILE = 60;

const HEADER_DESKTOP = 92;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const ImageResponssive = styled("div")(({ theme }) => ({
  width: 300,
  [theme.breakpoints.down("sm")]: {
    width: 200,
  },
  [theme.breakpoints.down("xs")]: {
    width: 200,
  },
}));

const ActiveLink = ({ to, activeClassName, ...rest }) => {
  return <NavLink to={to} activeClassName={activeClassName} {...rest} />;
};

const StyledActiveLink = styled(ActiveLink)(({ theme }) => ({
  fontWeight: "bold",
  textDecoration: "none",
  "&.active": {
    position: "relative",
    color: "#4fd8ff",
    "&::after": {
      content: "''",
      position: "absolute",
      left: 0,
      bottom: "-2px", // Adjust the value to control the gap
      width: "100%",
      height: "2px",
      color: "#4fd8ff",
      background: theme.palette.primary.main,
    },
  },
}));

function DashNav(props) {
  // const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // const isSmallScreen = useMediaQuery('(max-width:600px)');
  // const fontSize = isSmallScreen ? '5px' : '20px';

  // const { window } = props;

  const [openIndex, setOpenIndex] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const mobHandleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const login = () => {
    navigate("/auth/login");
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MENU
      </Typography>
      <Divider />
      <List>
        {NavItem.map((nav, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => {
                  if (nav.subMenu) {
                    mobHandleClick(index);
                  } else {
                    navigate(nav.path);
                    handleDrawerToggle();
                  }
                }}
              >
                <ListItemText primary={nav.name} />
                {nav.subMenu &&
                  (openIndex === index ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </ListItem>

            {nav.subMenu && (
              <Collapse
                sx={{ bgcolor: "Gainsboro" }}
                in={openIndex === index}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {nav.subMenu.map((subNav, subIndex) => (
                    <ListItem key={subIndex} disablePadding>
                      <ListItemButton
                        sx={{ textAlign: "center" }}
                        onClick={() => {
                          navigate(subNav.path);
                          handleDrawerToggle();
                        }}
                      >
                        <ListItemText primary={subNav.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
        <Button
          sx={{ fontSize: 16 }}
          onClick={login}
          variant="contained"
          size="large"
        >
          Login
        </Button>
      </List>
    </Box>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar
          component="nav"
          sx={{ maxHeight: 120, backgroundColor: "white", color: "black" }}
        >
          <StyledToolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* <Searchbar /> */}

            <Stack direction="row" alignItems="center">
              <Stack>
                <Stack>
                  <ImageResponssive>
                    {/* <img src="/assets/logos/ditec-login-logo.png" /> */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qQkQ3Aks8cErwgNVDhZsNGo7YWVo0Xl9sQ&usqp=CAU" height={100} />
                  </ImageResponssive>
                </Stack>
              </Stack>
              {/* </Hidden> */}
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            <Stack
              direction="row"
              alignItems="center"
              spacing={{
                xs: 0.5,
                sm: 1,
              }}
            >
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Box onMouseLeave={handleClose}>
                  <Stack
                    direction="row"
                    alignItems={"center"}
                    spacing={4}
                    onMouseLeave={handleClose}
                  >
                    {NavItem.map((nav, index) => (
                      <>
                        <StyledActiveLink
                          key={index}
                          to={nav?.path}
                          activeClassName="active"
                        >
                          <Button
                            sx={{
                              color: "black",
                              fontSize: "16px",
                              fontWeight: "normal",
                            }}
                            onMouseEnter={nav.subMenu ? handleClick : null}
                            // onMouseLeave={nav.subMenu ? handleClose : null}
                          >
                            {nav?.name}
                          </Button>
                        </StyledActiveLink>
                        {nav.subMenu && (
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                          >
                            <Box onMouseLeave={handleClose}>
                              {nav.subMenu.map((subNav, index) => (
                                <Stack
                                  // onMouseLeave={handleClose}
                                  direction={"column"}
                                  p={2}
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                  display={"flex"}
                                  spacing={0.5}
                                >
                                  <StyledActiveLink
                                    key={index}
                                    to={subNav.path}
                                    onClick={handleClose}
                                    activeClassName="active"
                                  >
                                    {subNav.name}
                                  </StyledActiveLink>

                                  {/* <Divider sx={{ mt: 5 }} flexItem /> */}
                                </Stack>
                              ))}
                            </Box>
                          </Popover>
                        )}
                      </>
                    ))}
                    <Button
                      sx={{
                        fontSize: 16,
                        backgroundColor: "#09c8ff",
                        boxShadow: 0,
                        ":hover": {
                          backgroundColor: "#4fd8ff",
                        },
                      }}
                      onClick={() => {
                        navigate("/atom/login");
                      }}
                      variant="contained"
                      size="large"
                    >
                      Login
                    </Button>
                  </Stack>
                </Box>
              </Box>
              <Stack>
                <Divider light={false} flexItem={true} orientation="vertical" />
              </Stack>
              {/* <LanguagePopover />
          <NotificationsPopover /> */}
            </Stack>
          </StyledToolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              // display: { xl: 'block', sm: 'none' },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

DashNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashNav;
