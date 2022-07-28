import React from "react";
import {
  Toolbar,
  IconButton,
  Container,
  Box,
  AppBar,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import logo from "../../assets/images/logo.png";
import logo from "../../assets/images/logo.svg";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";
import { useWindowSize } from "../../hooks/useWindowSize";

function HideOnScroll(props) {
  const { children } = props;
  const size = useWindowSize();
  const trigger = useScrollTrigger();
  return size.width >= 900 ? (
    <>
      <Fade appear={false} direction="down" in={!trigger}>
        {children}
      </Fade>
    </>
  ) : (
    <>{children}</>
  );
}

export const MenuItems = ({ navLink }) => {
  return (
    <>
      <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
        <Button
          sx={{ color: "black" }}
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "13.5px",
            cursor: "pointer",
            textTransform: "none",
          }}
        >
          {navLink}
        </Button>
      </Box>
    </>
  );
};

const ResponsiveAppBar = (props) => {
  const menus = [
    "Laptops",
    "Desktop PCs",
    "Networking Devices",
    "Printers & Scanners",
    "PC Parts",
    "All Other Products",
    "Repairs",
  ];

  return (
    <HideOnScroll {...props}>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: "white",
          color: "black",
          top: "44px",
        }}
        elevation={1}
      >
        <Container>
          <Toolbar disableGutters>
            <Box
              component="img"
              src={logo}
              alt="Company Logo"
              sx={{
                height: { xs: "23.56px", sm: "40.05px" },
                width: { xs: "19.69px", sm: "33.47px" },
                paddingRight: "2rem",
                pl: { xs: "1rem", md: 0 },
              }}
            />
            {menus.map((element, i) => {
              return <MenuItems navLink={element} key={i} />;
            })}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "end",
              }}
            >
              <IconButton size="large" color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};
export default ResponsiveAppBar;
