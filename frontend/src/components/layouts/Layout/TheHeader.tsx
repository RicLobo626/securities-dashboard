import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Insights } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "@tanstack/react-router";

export const TheHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const pages = [{ text: "Home", to: "/" }];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Insights sx={{ display: { color: "white" }, mr: 1 }} />

          <Typography
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2rem" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Securities
          </Typography>

          <Box component="nav" sx={{ display: { xs: "none", sm: "flex", marginLeft: "auto" } }}>
            {pages.map((page) => (
              <Button component={Link} key={page.text} to={page.to} color="inherit">
                {page.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", sm: "none", marginLeft: "auto" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              keepMounted
            >
              {pages.map((page) => (
                <MenuItem
                  component={Link}
                  to={page.to}
                  color="inherit"
                  key={page.text}
                  onClick={handleCloseNavMenu}
                >
                  {page.text}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
