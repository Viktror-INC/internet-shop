import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

import offersImages from "../static/offerImages.json";
import gilrs from "../static/gilrs.json";
import ImagesBlock from "../components/ImagesBlock/ImagesBlock";
import Header from "../components/Header/Header";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import MainWrap from "../components/MainWrap/MainWrap";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <MainWrap>
        <LeftMenu />
        <div className={styles.mainContent}>
          <ImagesBlock
            leftImages={offersImages}
            rightImages={gilrs}
            wrapBlockInner={false}
          />
        </div>
      </MainWrap>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
