import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Menu as MenuIcon } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

export default function AppNavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Erl's Car Shop
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
