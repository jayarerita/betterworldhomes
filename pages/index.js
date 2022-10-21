import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import styles from  "../styles/index.module.css"

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section id="welcome-section-id" className={utilStyles.welcomeSection}>
        <div id="welcome-image-header-id">
          <div className={styles.welcomeBanner}>
            Welcome
          </div>
          <div className={styles.usImage}>
            <Image
              src="/images/logo.png"
              height={144}
              width={144}
            />
          </div>
        </div>
        <div id="welcome-text-id">
          <p>
            We are Kathleen and Jake, the happy couple behind Better World Homes. We have always enjoyed working on our home designs and projects together and wanted to find a way to help others do the same while giving back to the community at the same time.
          </p>
          <p>
            Whether you use an affiliate link or purchase our plans for your next DIY item, you can feel good knowing all the proceeds go towards a good cause.
          </p>
          <p>
            There is plenty of free information an tools available too! Check out how you can make board and batten layout a breeze with our designer and learn how to conquer that custom project you have been dreaming about with a killer project plan.
          </p>
        </div>
      </section>
      <section id="nav-bar-id">
        <span>
          <Link href={'/counter'}>
            <a>Counter</a>
          </Link>
        </span>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Stories</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, subtitle }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.storyTitle}>{title}</a>
              </Link>
              <br />
              <medium className={utilStyles.storySubtitle}>{subtitle}</medium>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
