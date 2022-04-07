import React, { useState } from "react";
import Image from "next/image";
import styles from "./LikeComponent.module.scss";

export default function LikeComponent(props: { itemId: number }) {
  const { itemId } = props;

  const [like, setLike] = useState(false);
  const [likedImages, setLikedImages] = useState([""]);

  const onLike = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const { id } = event.target as HTMLImageElement;
    if (likedImages.includes(id)) {
      setLikedImages(likedImages.filter((item) => item != id));

      return;
    }
    setLikedImages([...likedImages, id]);
    setLike(!like);
  };

  // const likeImage = (item: {
  //   title: string;
  //   imageUrl: string;
  // }) => {
  //   return (
  //     <div className={styles.like}>
  //     <Image
  //       onClick={(event) => onLike(event)}
  //       id={item.title}
  //       src={
  //         likedImages.includes(item.title)
  //           ? "/images/mainContent/like.png"
  //           : "/images/mainContent/unlike.png"
  //       }
  //       alt={"like"}
  //       width={14}
  //       height={14}
  //     />
  //   </div>
  //   );
  // };

  return (
    <div className={styles.like}>
      <Image
        onClick={(event) => onLike(event)}
        id={`${itemId}`}
        src={
          likedImages.includes(`${itemId}`)
            ? "/images/mainContent/like.png"
            : "/images/mainContent/unlike.png"
        }
        alt={"like"}
        width={14}
        height={14}
      />
    </div>
  );
}
