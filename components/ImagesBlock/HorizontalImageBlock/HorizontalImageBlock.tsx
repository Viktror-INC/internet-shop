import React, { useState } from "react";
import Image from "next/image";
import styles from "./HorizontalImageBlock.module.scss";
import { THorizontalImageBlock } from "./@types";
import LikeComponent from "../LikeComponent/LikeComponent";

export default function HorizontalImageBlock(props: THorizontalImageBlock) {
  const { HorizontalImages } = props;

  return (
    <ul className={styles.leftBlock}>
      {HorizontalImages &&
        HorizontalImages.map((item, index) => {
          return (
            <li className={styles.leftBlockImage} key={index}>
              <Image
                src={item.imageUrl}
                alt={item.alt}
                width={540}
                height={180}
              />
              <LikeComponent itemId={item.id} />
              <div className={styles.imagesText}>
                {item.title && (
                  <h4 className={styles.imageText}>{item.title}</h4>
                )}
                {item.description && (
                  <span className={styles.imageText}>{item.description}</span>
                )}
              </div>
            </li>
          );
        })}
    </ul>
  );
}
