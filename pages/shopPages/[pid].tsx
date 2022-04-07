import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import VerticalImageBlock from "../../components/ImagesBlock/VerticalImageBlock/VerticalImageBlock";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import MainWrap from "../../components/MainWrap/MainWrap";
import { TStore } from "../../store/@types";
import styles from "./shopPages.module.scss";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { items } = useSelector((state: TStore) => state.itemsSlice);

  const currentItems = items.filter((item) =>
    item.type.includes(pid as string)
  );

  return (
    <div>
      <Header />
      <MainWrap>
        <LeftMenu />
        <div className={styles.main}>
          {currentItems && <VerticalImageBlock verticalImages={currentItems} />}
        </div>
      </MainWrap>
    </div>
  );
};

export default Post;
