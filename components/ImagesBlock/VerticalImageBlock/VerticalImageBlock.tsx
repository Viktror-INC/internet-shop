import React, { useState } from "react";
import Image from "next/image";
import styles from "./VerticalImageBlock.module.scss";
import classNames from "classnames";
import { TVerticalImageBlock } from "./@types";
import LikeComponent from "../LikeComponent/LikeComponent";
import Link from "next/link";

export default function VerticalImageBlock(props: TVerticalImageBlock) {
  const { verticalImages, wrapBlockInner = true } = props;

  return (
    <ul
      className={classNames(styles.rightBlock, {
        [styles.wrapRightBlock]: wrapBlockInner,
      })}
    >
      {verticalImages &&
        verticalImages.map((item, index) => {
          return (
            <li className={classNames(styles.rightBlockImage)} key={index}>
              <Link
                href={
                  item.id && item.title
                    ? `/itemPage/${item.title
                        ?.toLowerCase()
                        .replace(/\s/g, "-")}?id=${item.id}`
                    : "/"
                }
              >
                <a>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={260}
                    height={380}
                  />
                  {item.title && (
                    <div className={styles.imageSaleBlock}>
                      <h4 className={styles.imageText}>{item.title}</h4>
                      <span className={styles.imageText}>
                        {item.description}
                      </span>
                      <span>{item.price} UAH</span>
                    </div>
                  )}
                </a>
              </Link>
              <LikeComponent itemId={item.id} />
            </li>
          );
        })}
    </ul>
  );
}
