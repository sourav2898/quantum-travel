import {
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ConnectButton from "./ConnectButton";
import SwitchLanguage from "./SwitchLanguage";
import pages from "./Pages";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const DrawerItem = ({ close }) => {
  return (
    <div>
      <Toolbar>
        <IconButton
          size="small"
          color="inherit"
          sx={{
            mr: 2,
          }}
          onClick={close}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {pages()?.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <Link
                  href={`#${text.toLowerCase()}`}
                  onClick={close}
                  key={text}
                  sx={{
                    display: "block",
                    color: "#212529",
                    cursor: "pointer",
                    textDecoration: "none",
                    fontSize: 20,
                  }}
                >
                  {text}
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SwitchLanguage />
        <ConnectButton display={{ xs: "block", md: "none" }} />
      </Box>
    </div>
  );
};

export default DrawerItem;
