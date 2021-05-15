import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export function HeaderComponent(){
  return <AppBar>
    <Toolbar>
      <Typography>Quick Whatsapp Message</Typography>
    </Toolbar>
  </AppBar>
}