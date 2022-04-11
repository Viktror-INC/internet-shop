import React, { useCallback, useState } from "react";
import Image from "next/image";
import styles from "./LogIn.module.scss";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { TStore } from "../../store/@types";
import { setLogin } from "../../store/slice/login/loginSlice";
import { setUserData } from "../../store/slice/userData/userDataSlice";
import { setShoppingCart } from "../../store/slice/shoppingCart/shoppingCartSlice";
import { getData } from "../../utils/getData/getData";

export default function LogIn() {
  const [showLoginTab, setShowLoginTab] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useSelector((state: TStore) => state.loginSlice);
  const dispatch = useDispatch();

  const logIn = useCallback(async () => {
    let isCancelled = false;

    setDisabledButton(true);

    const data = await getData(
      "https://624339c0b6734894c15c6729.mockapi.io/login"
    );

    const loginned = data.filter(
      (item: { login: string; password: string }) =>
        item.login.toLocaleLowerCase() == userLogin.toLocaleLowerCase() &&
        item.password == password
    );

    if (loginned[0]) {
      dispatch(setUserData(loginned[0]));
      dispatch(setShoppingCart(loginned[0].cartItems));
      dispatch(setLogin(true));
      setUserLogin("");
      setPassword("");
      setShowLoginTab(false);
    }

    setDisabledButton(false);
    return () => {
      isCancelled = true;
    };
  }, [dispatch, password, userLogin]);

  const logOut = useCallback(() => {
    let isCancelled = false;
    dispatch(setLogin(false));
    dispatch(setUserData([]));
    dispatch(setShoppingCart([]));
    return () => {
      isCancelled = true;
    };
  }, [dispatch]);

  return (
    <div className={styles.logInWrap}>
      <button
        data-testid="loginButton"
        onClick={() => {
          if (!login) {
            setShowLoginTab(true);
          }
        }}
        className={styles.logInButton}
      >
        {login ? (
          <>
            <Image
              src={"/images/logIn/person.png"}
              alt="person"
              width={24}
              height={24}
              layout="fixed"
            />
          </>
        ) : (
          <Image
            src={"/images/logIn/lockeduser.png"}
            alt="person"
            width={24}
            height={24}
            layout="fixed"
          />
        )}
      </button>
      {login && (
        <ul className={styles.loginedUserMenu}>
          <li data-testid="logOut" onClick={() => logOut()}>
            Log out
          </li>
        </ul>
      )}
      {showLoginTab && (
        <div data-testid="logInTabWrap" className={styles.logInTabWrap}>
          <div className={styles.logInTab}>
            <input
              placeholder="Login"
              value={userLogin}
              onChange={(event) => setUserLogin(event.target.value)}
            />
            <input
              placeholder="Password"
              value={[password]}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              text={"Log in"}
              onClick={() => logIn()}
              dataTestId={"submitButton"}
            />
            <button
              data-testid="closeButton"
              onClick={() => setShowLoginTab(false)}
              disabled={disabledButton}
              className={styles.closeButton}
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}
