import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lissa & Martinas</title>
        <meta name="description" content="Lissa & Martinas" />
        <link rel="icon" href="/favicon.ico" />
        <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
      </Head>

      <main className={styles.main}>
        <div style={{ overflowY: scroll }}>
          <h1 className={styles.title}>Lissa & Martinas</h1>
          <h2>Address</h2>
          <p>
            The Corn Crib
            <br />
            Rocklands Farm Winery
            <br />
            14531 Montevideo Rd, Poolesville, MD 20837
          </p>

          <h2>Accommodation</h2>

          <p>
            We have not booked out any hotel rooms, but please reach out to us
            if you have any questions about where to stay.
          </p>

          <h2>Dress Code</h2>

          <p>
            Ladies: summer dress, jumpsuit, jeans and a nice top, comfortable
            shoes
          </p>

          <p>Gents: shorts, jeans, a polo or button up, comfortable shoes</p>
          <p>
            There will be benches and picnic blankets for seating, so dress for
            the weather, look nice, but be comfortable!
          </p>
          <p>Please remember to bring a face covering</p>
          <p>examples below:</p>

          <div>
            <a
              data-pin-do="embedBoard"
              data-pin-board-width="400"
              data-pin-scale-height="240"
              data-pin-scale-width="80"
              href="https://www.pinterest.com/lissamei/dress-code/"
            ></a>
          </div>

          <h1>Wedding Events</h1>

          <p>Thursday Family Dinner: Indian food</p>
          <p>Friday Winery Picnic: Tacos</p>
          <p>Friday After Party: Booze, champagne toasts</p>
          <p>
            Saturday Out of Town guests brunch: bagels, donuts, fruit, juices
          </p>

          <h2>Registry</h2>
          <p>http://www.wanderable.com/hm/LissaandMartinas</p>
          <p>Or directly at: Venmo: @LissaEng, @Martinas-Terskin</p>

          {/* <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
     */}
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
