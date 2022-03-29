import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';

import offersImages from '../static/offerImages.json';
import offersImages2 from '../static/offerImages2.json';
import gilrs1 from '../static/gilrs1.json';
import gilrs2 from '../static/girls2.json';
import ImagesBlock from '../components/ImagesBlock/ImagesBlock';
import Header from '../components/Header/Header';
import LeftMenu from '../components/LeftMenu/LeftMenu';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main className={styles.mainWrap}>
        <div className={styles.container}>
          <div className={styles.main}>
            <LeftMenu />
            <div className={styles.mainContent}>
              <ImagesBlock leftImages={offersImages} rightImages={gilrs1} />
              <ImagesBlock
                leftImages={offersImages2}
                rightImages={gilrs2}
                className={styles.imagesBlock}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
