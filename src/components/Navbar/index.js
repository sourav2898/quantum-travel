import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import ConnectButton from "./components/ConnectButton";
import SwitchLanguage from "./components/SwitchLanguage";
import { Drawer, Link } from "@mui/material";
import DrawerItem from "./components/DrawerItem";
import pages from "./components/Pages";
import { useTranslation } from "react-i18next";
import logo from "../../assets/img/logo.png";

const drawerWidth = 240;

const Navbar = () => {
  const { t } = useTranslation(["home"]);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="sticky"
      elevation={4}
      sx={{
        backgroundColor: "rgba(0,0,0,.4)",
      }}
    >
      <Toolbar data-aos="fade-down">
        <Link
          href="#home"
          sx={{
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, width: { xs: 100, sm: 150, md: 200 } }}
          >
            <img width="100%" src={logo} alt="logo" />
          </IconButton>
        </Link>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "none", md: "space-around" },
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              color: "#dee2e6",
            }}
          >
            {pages()?.map((page) => (
              <Link
                variant="spanTitle"
                target={`${page === "WhitePaper" ? "_blank" : ""}`}
                href={`${
                  page === "WhitePaper"
                    ? "https://firebasestorage.googleapis.com/v0/b/quantummuseum-c3312.appspot.com/o/whitepaper%2FOPEN%20GAMES%20WHITEPAPER%201.0.pdf?alt=media&token=fee11190-3108-4ee3-897b-b68957dcdc32"
                    : "#" + page.toLowerCase()
                }`}
                key={page}
                sx={{
                  m: 2,
                  display: "block",
                  color: "#dee2e6",
                  cursor: "pointer",
                  textDecoration: "none",
                  fontSize: 20,
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                {page}
              </Link>
            ))}
            <SwitchLanguage color="#fff" />
          </Box>
          <ConnectButton display={{ xs: "none", md: "block" }} />
        </Box>
        {/* Drawer Icon */}
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        {/* Drawer */}
        <Box
          sx={{
            display: { sm: "block", md: "none" },
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
          }}
        >
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <DrawerItem close={handleDrawerToggle} />
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
