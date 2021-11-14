import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Kasupekira
        </h1>

        <p className={styles.description}>
          ものづくりプラットフォームの作成、ハードウェアの企画、デザイン、製造
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Webで使える3Dプリンターのスライサー開発</h2>
            <p>通常の3Dプリンターのスライスと建築関係の3Dプリンターにも対応するソフトウェアを開発します。</p>
          </div>

          <div className={styles.card}>
            <h2>Webで使える3DCADの開発" </h2>
            <p>AIによる画像からの3Dモデルの作成、モデルのAR機能など最新の機能も取り入れて開発します。</p>
          </div>

          <div className={styles.card}>
            <h2>ハードウェアの企画、デザイン、製造</h2>
            <p>ハードウェアのプロダクトデザインをし製造し、ユーザーが使えるところまで届けます。</p>
          </div>

          <div className={styles.card}>
            <h2>3Dプリンターのシェアリングエコノミー事業</h2>
            <p>
              パートナーの3Dプリンターでモデルを印刷し、格安で届けます。
            </p>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default Home
