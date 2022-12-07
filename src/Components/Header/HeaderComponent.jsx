import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import BlogComponent from "../BodyComponent/BlogComponent";
import Link from "../BodyComponent/Link";
import Notification from "../BodyComponent/Notification";
import Logout from "../BodyComponent/Logout";
import { useStyles } from "./HeaderStyles";

export default function HeaderComponent() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <BrowserRouter>

      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      {/* // registerian our routes  */}
      <Box className={classes.wrapper}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path="/blog" element={<BlogComponent />} />
          <Route path='/link' element={<Link />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>

      </Box>
    </BrowserRouter>
  );
}