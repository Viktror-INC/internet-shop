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

export default function LogIn() {
  const [showLoginTab, setShowLoginTab] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useSelector((state: TStore) => state.loginSlice);
  const { userData } = useSelector((state: TStore) => state.userDataSlice);
  const dispatch = useDispatch();

  console.log("userData", userData);

  const logIn = useCallback(async () => {
    setDisabledButton(true);
    const { data } = await axios.get(
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
  }, [dispatch, password, userLogin]);

  const logOut = useCallback(() => {
    dispatch(setLogin(false));
    dispatch(setUserData([]));
    dispatch(setShoppingCart([]));
  }, [dispatch]);

  return (
    <div className={styles.logInWrap}>
      <button
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
          <li onClick={() => logOut()}>Log out</li>
        </ul>
      )}
      {showLoginTab && (
        <div className={styles.logInTabWrap}>
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
            <Button text={"Log in"} onClick={() => logIn()} />
            <button
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
