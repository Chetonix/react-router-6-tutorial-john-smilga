import React from "react";
import Navbar from "../components/StyledNavbar";
import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default SharedLayout;
