import React from "react";
import Image from "next/image";
import defaultMenuList from "../../static/leftMenuList.json";
import styles from "./LeftMenu.module.scss";
import { TLeftMenu } from "./@types";
import Link from "next/link";

export default function LeftMenu(props: TLeftMenu) {
  const { menuList } = props;
  return (
    <div className={styles.leftMenu}>
      <h3>Explore</h3>
      <ul className={styles.leftMenuList}>
        {menuList
          ? menuList.map((item, index) => {
              return (
                <li key={index}>
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={22}
                    height={22}
                  />
                  <span>{item.name}</span>
                </li>
              );
            })
          : defaultMenuList.map((item, index) => {
              return (
                <li key={index}>
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={22}
                    height={22}
                    layout="fixed"
                  />

                  <Link
                    href={`/shopPages/${item.name
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    <a>
                      <span>{item.name}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
      </ul>
      <div className={styles.helpWrap}>
        <Image
          src={"/images/header/chat.png"}
          alt="chat"
          width={18}
          height={18}
        />
        <span>Help Center</span>
      </div>
    </div>
  );
}
