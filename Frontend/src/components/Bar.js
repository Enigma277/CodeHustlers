import React, { useState, useContext } from "react";
import style from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { AuthContext } from "../../App";
import AppBar from "@mui/material/AppBar";
import { Container } from "@mui/system";

const Header = () => {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useContext(AuthContext);
  const links = ["Practice", "Contests", "Events", "Compiler", "Blogs"];

  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const handleClick = (index) => {
    navigate(`/${links[index].toLowerCase()}`);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSignIn = () => {
    navigate(`/${"signin"}`);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("username");
    window.location.reload();
    document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <div className={style.header} id={style.theme}>
          <div className={style.topLeft}>
            <div className={style.logo}>
              <h3>Geekers</h3>
              {/* <img src={logo} alt="Not Found" /> */}
            </div>
            <HomeIcon
              cursor="pointer"
              onClick={() => {
                navigate("/home");
              }}
            />
          </div>
          <div className={style.topCenter}>
            <ul className={style.pages}>
              {links.map((link, index) => {
                return (
                  <li key={index} onClick={() => handleClick(index)}>
                    {link}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={style.topRight}>
            <div className={style.mode}>
              {darkMode ? (
                <LightModeIcon fontSize="small" onClick={handleDarkMode} />
              ) : (
                <DarkModeIcon fontSize="small" onClick={handleDarkMode} />
              )}
            </div>
            {/* <div className={style.searchBar}>
            <Input
              type="text"
              placeholder="Search..."
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon className={style.searchIcon} />
                </InputAdornment>
              }
            />
          </div> */}
            {window.localStorage.getItem("username") ? (
              <div className={style.avatar}>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>
                  {window.localStorage
                    .getItem("username")
                    .charAt(0)
                    .toUpperCase()}
                </Avatar>
                <div className={style.buttons}>
                  <button onClick={handleLogout} className={style.button}>
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className={style.buttons}>
                <button onClick={handleSignIn} className={style.button}>
                  SignIn
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;