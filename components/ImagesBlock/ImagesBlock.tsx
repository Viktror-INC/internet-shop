import classNames from "classnames";

import React from "react";
import { TImagesBlock, TLeftImages, TRightImages } from "./@types";
import HorizontalImageBlock from "./HorizontalImageBlock/HorizontalImageBlock";
import styles from "./ImagesBlock.module.scss";
import VerticalImageBlock from "./VerticalImageBlock/VerticalImageBlock";

export default function ImagesBlock(props: TImagesBlock) {
  const { leftImages, rightImages } = props;

  const getFirstPart = (allItems: TRightImages | TLeftImages) => {
    return allItems.slice(-4).slice(0, 2);
  };

  const getEndPart = (allItems: TRightImages | TLeftImages) => {
    return allItems.slice(-2);
  };

  return (
    <div className={styles.imagesBlockWrap}>
      <HorizontalImageBlock HorizontalImages={getFirstPart(leftImages)} />
      <VerticalImageBlock
        wrapBlockInner={false}
        verticalImages={getFirstPart(rightImages)}
      />
      <HorizontalImageBlock HorizontalImages={getEndPart(leftImages)} />
      <VerticalImageBlock
        wrapBlockInner={false}
        verticalImages={getEndPart(rightImages)}
      />
    </div>
  );
}
