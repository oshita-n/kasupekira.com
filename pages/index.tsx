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
          ものづくりプラットフォームの開発、提供
        </p>

        <h2>3Dプリンターのシェアリングエコノミー事業</h2>
        <p>
          3Dプリンターを所有するパートナーが印刷したモデルを類似サービスよりも安くお届けします。<br />
          また、ユーザーによる評価機能を取り入れ品質を高める努力もしていきます。
        </p>
        <br />
        <img src="3dshare.png" width="700px"/> 
        <br />
        <h2>
          ご連絡・ご相談
        </h2>
        <p>oshita-n@whispon.com</p>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
