import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const Header: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kasupekira</title>
        <meta name="description" content="Kasupekira" />
        <link rel="icon" href="/kasupekira.png" />
      </Head>
    </div>
  )
}

export default Header
