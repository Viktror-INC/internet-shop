import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import MainWrap from "../../components/MainWrap/MainWrap";
import { TStore } from "../../store/@types";
import { setItemCart } from "../../store/slice/shoppingCart/shoppingCartSlice";
import styles from "./itemPage.module.scss";

const Post = () => {
  const router = useRouter();
  const { pid, id } = router.query;
  const { items } = useSelector((state: TStore) => state.itemsSlice);
  const [showNotify, setShowNotify] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  const dispatch = useDispatch();

  const currentItem = items.filter(
    (item) =>
      Number(item.id) == Number(id) &&
      item.title.toLowerCase().replace(/\s/g, "-") == pid
  )[0];

  if (currentItem) {
    const setItemToCart = () => {
      setDisabledButton(true);
      dispatch(setItemCart(currentItem));
      setShowNotify(true);

      setTimeout(() => {
        setShowNotify(false);
        setDisabledButton(false);
      }, 1000);
    };

    return (
      <div>
        <Header />
        <MainWrap>
          <LeftMenu />
          <div className={styles.itemWrap}>
            <div className={styles.imageWrap}>
              <Image
                src={currentItem.imageUrl}
                alt={currentItem.title}
                width={350}
                height={500}
              />
            </div>
            <div className={styles.descriptionBlock}>
              <h3>{currentItem.title}</h3>
              <span className={styles.title}>{currentItem.title}</span>
              <span className={styles.price}>
                Price: {currentItem.price} UAH
              </span>
              {/* <button>To shopping cart</button> */}
              <Button
                disabled={disabledButton}
                text={"To shopping cart"}
                onClick={() => setItemToCart()}
              />
            </div>
          </div>
        </MainWrap>
        <div
          className={classNames(styles.notify, {
            [styles.showNotify]: showNotify,
          })}
        >
          <span>Item Added</span>
        </div>
      </div>
    );
  }

  return null;
};

export default Post;
