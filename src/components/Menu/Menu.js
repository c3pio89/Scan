import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Menu.css";
import NavBar from "./NavBar";
import store from "../../store/store";
import {authReset} from "../../func/authReset";

function Menu() {
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [menuStatus, setMenuStatus] = useState(store.getState().menuStatus);
  const [authStatus, setAuthStatus] = useState(
    localStorage.getItem("AuthStatus")
  );
  function handleMenu() {
    store.dispatch({ type: "CHANGE_MENU_STATUS" });
    setMenuStatus(!menuStatus);
  }

  function enterHandler() {
    handleMenu();
    navigate("/auth");
  }

  function exitHandler() {
    authReset(setAuthStatus, navigate);
    handleMenu();
  }

  return (
    <>
      <div
        className={menuStatus ? styles.menuButtonOpened : styles.menuButton}
        onClick={handleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        ref={menuRef}
        className={
          menuStatus ? styles.mobileMenuVisible : styles.mobileMenuHidden
        }
      >
        <nav className={styles.navMobile}>
          <NavBar handler={handleMenu} />
        </nav>
        <div className={styles.mobileAuth}>
          <Link to={"#"} className={styles.mobileRegister}>
            Зарегистрироваться
          </Link>
          {authStatus === "false" ? (
            <button onClick={enterHandler} className={styles.mobileEnter}>
              Войти
            </button>
          ) : (
            <button onClick={exitHandler} className={styles.mobileEnter}>
              Выйти
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Menu;
