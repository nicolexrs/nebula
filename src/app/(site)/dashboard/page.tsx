"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebaseConfig";
import type { User as FirebaseUser } from "firebase/auth";
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import Dashboard from '@/components/Dashboard/Dashboard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';

// Navigation items
const NAVIGATION: Navigation = [
  { kind: 'header', title: 'Main items' },
  { segment: 'Transaction', title: 'Trade', icon: <DashboardIcon /> },
  { segment: 'Assets', title: 'Assets' },
  { segment: 'Transactions', title: 'Transactions' },
  { segment: 'profile', title: 'Profile' },
];

function CustomThemeSwitcher() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<HTMLElement | null>(null);

  const toggleMenu = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setMenuAnchorEl(isMenuOpen ? null : event.currentTarget);
      setIsMenuOpen((prev) => !prev);
    },
    [isMenuOpen],
  );

  return (
    <>
      <Tooltip title="Settings" enterDelay={1000}>
        <div>
          <IconButton type="button" aria-label="settings" onClick={toggleMenu}>
            <SettingsIcon />
          </IconButton>
        </div>
      </Tooltip>
      <Popover
        open={isMenuOpen}
        anchorEl={menuAnchorEl}
        onClose={toggleMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        disableAutoFocus
      >
        <Box sx={{ p: 2 }}>
          <FormControl>
            <FormLabel id="theme-switcher-label">Theme</FormLabel>
            <RadioGroup aria-labelledby="theme-switcher-label" defaultValue="system" name="theme-switcher">
              <FormControlLabel value="light" control={<Radio />} label="Light" />
              <FormControlLabel value="system" control={<Radio />} label="System" />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Popover>
    </>
  );
}

export default function DashboardLayoutView() {
  const router = useRouter();
  const [user, setUser] = useState<{ userId: string; email: string } | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: FirebaseUser | null) => {
      if (user) {
        setUser({ userId: user.uid, email: user.email || "Unknown" });
      } else {
        router.push("/signin"); // Redirect if not authenticated
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <AppProvider navigation={NAVIGATION}>
      <DashboardLayout slots={{ toolbarActions: CustomThemeSwitcher }}>
        <Dashboard userId={user.userId} email={user.email} />
      </DashboardLayout>
    </AppProvider>
  );
}
