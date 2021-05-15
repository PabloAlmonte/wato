import { AppBar, Box, IconButton, Toolbar, Typography } from "@material-ui/core";
import { MoreVert, Share } from "@material-ui/icons";
import React from "react";

export function HeaderComponent() {
  return <AppBar>
    <Toolbar style={{ paddingRight: 0 }}>
      <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Quick Whatsapp Message</Typography>
        <div>
          <IconButton color="inherit">
            <Share />
          </IconButton>
          <IconButton color="inherit">
            <MoreVert />
          </IconButton>
        </div>
      </Box>
    </Toolbar>
  </AppBar>
}