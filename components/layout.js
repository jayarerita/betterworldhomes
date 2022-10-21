import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Better World Homes'
export const siteTitle = 'Better World Homes'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins"/>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tenor+Sans"/>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content="/images/logo.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <section className={styles.banner}>
            <div>
            <div className={styles.bannerBlock}>
              <div className={`${styles.bannerText} ${styles.left}`}>
                helping make your
              </div>
              <div className={`${styles.bannerText} ${styles.left}`}>
                home and
              </div>
            </div>
            </div>
            <div className={styles.centerLogo}>
              <Image
                priority
                src="/images/logo.png"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt="logo"
              />
            </div>
            <div className={styles.bannerBlock}>
              <div className={`${styles.bannerText} ${styles.right}`}>
                the world a better
              </div>
              <div className={`${styles.bannerText} ${styles.right}`}>
                place to live
              </div>
            </div>
          </section>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/logo.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt="logo"
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
        <section className={styles.navSection}>
        <span>
          <a href="/" className={styles.btnGreen}>
            design tools
          </a>
        </span>
        <span>
          <a href="/" className={styles.btnGreen}>
            stories
          </a>
        </span>
        <span>
          <a href="/" className={styles.btnGreen}>
            plans
          </a>
        </span>
        <span>
          <a className={styles.btnGreen} href="/">
            about
          </a>
        </span>
        </section>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
