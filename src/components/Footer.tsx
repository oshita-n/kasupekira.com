import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Footer: NextPage = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kasupekira ©2021
        </a>
      </footer>
    </div>
  )
}

export default Footer
