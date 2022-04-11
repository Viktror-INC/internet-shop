import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import menuList from "../../static/menuList.json";
import classNames from "classnames";
import LogIn from "../LogIn/LogIn";
import { useSelector } from "react-redux";
import { TStore } from "../../store/@types";
import { getFullPrice } from "../../utils/getFullPrice/getFullPrice";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const [showRightPanel, setShowRightPanel] = useState(false);
  const { cart } = useSelector((state: TStore) => state.shoppingCart);
  const [currentItems, setCurrentItems] = useState(cart);

  const fullPriceBlock = () => {
    const itemPrice = getFullPrice(cart);
    return (
      <div className={styles.fullPrice}>
        <span className={styles.total}>Total:</span>
        <span>{itemPrice} Uah</span>
      </div>
    );
  };

  const rightPanel = () => {
    return (
      <div
        className={classNames(styles.rightPanel, {
          [styles.rightPanelActive]: showRightPanel,
        })}
      >
        <div
          onClick={() => setShowRightPanel(false)}
          className={styles.emptyBlock}
        ></div>
        <div className={styles.rightPanelItemsWrap}>
          <h2>Shopping cart</h2>
          <ul className={styles.rightPanelItems}>
            {[...currentItems].reverse().map((item, index) => {
              return (
                <li key={index}>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={50}
                    height={80}
                  />
                  <div className={styles.priceBlock}>
                    <span>
                      <Link
                        href={
                          item.id && item.title
                            ? `/itemPage/${item.title
                                ?.toLowerCase()
                                .replace(/\s/g, "-")}?id=${item.id}`
                            : "/"
                        }
                      >
                        <a onClick={() => setShowRightPanel(false)}>
                          {item.title}
                        </a>
                      </Link>
                    </span>
                    <span>{item.price} Uah</span>
                  </div>
                </li>
              );
            })}
          </ul>
          {fullPriceBlock()}
        </div>
      </div>
    );
  };

  useEffect(() => {
    setCurrentItems(cart);
  }, [cart]);

  return (
    <header>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <div className={styles.logoSearchWrap}>
            <div className={styles.logo}>
              <Link href={"/"}>
                <a>
                  <Image
                    src={"/images/header/logo.png"}
                    alt="Logo"
                    width={90}
                    height={45}
                    layout="responsive"
                  />
                </a>
              </Link>
            </div>

            <div className={styles.search}>
              <div className={styles.searchImage}>
                <Image
                  src={"/images/header/search.png"}
                  alt="search"
                  width={18}
                  height={18}
                  layout="responsive"
                />
              </div>
              <input placeholder="Search store" />
            </div>
          </div>
          <div className={styles.menuWrap}>
            <div className={styles.mainMenuButtonWrap}>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className={classNames(styles.menuButton, {
                  [styles.menuButtonActive]: showMenu,
                })}
              >
                <span>Menu</span>
              </button>
              <div
                className={classNames(styles.mainMenuWrap, {
                  [styles.mainMenuWrapActive]: showMenu,
                })}
              >
                <ul className={styles.mainMenu}>
                  {menuList.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={item.link}>
                          <a>{item.name}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className={styles.userMenu}>
              <button className={styles.userButton}>
                <Image
                  src={"/images/mainContent/unlike.png"}
                  alt="basket"
                  width={20}
                  height={20}
                  layout="fixed"
                />
              </button>
              <button
                className={styles.userButton}
                onClick={() => {
                  setShowRightPanel(true);
                  setCurrentItems(cart);
                }}
              >
                <Image
                  src={"/images/header/basket.png"}
                  alt="basket"
                  width={24}
                  height={24}
                  layout="fixed"
                />
              </button>
              <LogIn />
            </div>
          </div>
        </div>
      </div>
      {rightPanel()}
    </header>
  );
}
