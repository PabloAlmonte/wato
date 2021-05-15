import React from 'react';
import { Apps, Settings } from '@material-ui/icons';
import { AppBar, Tabs, Tab } from '@material-ui/core';

export function NavigationComponent(){
  return <AppBar className="NavigationComponent">
    <Tabs value={0} centered>
      <Tab value={0} label="Home" icon={<Apps />} />
      <Tab value={1} label="Settings" icon={<Settings />} />
    </Tabs>
  </AppBar>
}