import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';
import { TImagesBlock } from './@types';
import styles from './ImagesBlock.module.scss';

export default function ImagesBlock(props: TImagesBlock) {
  const { leftImages, rightImages, className } = props;
  const [like, setLike] = useState(false);
  const [likedImages, setLikedImages] = useState(['']);

  const onLike = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const { id } = event.target as HTMLImageElement;
    if (likedImages.includes(id)) {
      setLikedImages(likedImages.filter((item) => item != id));

      return;
    }
    setLikedImages([...likedImages, id]);
    setLike(!like);
  };

  const likeImage = (item: { alt: string; imageUrl: string }) => {
    return (
      <div className={styles.like}>
        <Image
          onClick={(event) => onLike(event)}
          id={item.alt}
          src={
            likedImages.includes(item.alt)
              ? '/images/mainContent/like.png'
              : '/images/mainContent/unlike.png'
          }
          alt={'like'}
          width={14}
          height={14}
        />
      </div>
    );
  };
  return (
    <div className={classNames(styles.imagesBlockWrap, className)}>
      <div className={styles.leftBlock}>
        {leftImages
          .slice(-2)
          .reverse()
          .map((item, index) => {
            return (
              <div className={styles.leftBlockImage} key={index}>
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  width={540}
                  height={180}
                />
                {likeImage(item)}
                <div className={styles.imagesText}>
                  {item.title && (
                    <h4 className={styles.imageText}>{item.title}</h4>
                  )}
                  {item.description && (
                    <span className={styles.imageText}>{item.description}</span>
                  )}
                </div>
              </div>
            );
          })}
      </div>
      <div className={styles.rightBlock}>
        {rightImages
          .slice(-2)
          .reverse()
          .map((item, index) => {
            return (
              <div className={styles.rightBlockImage} key={index}>
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  width={260}
                  height={380}
                />

                {likeImage(item)}
              </div>
            );
          })}
      </div>
    </div>
  );
}
