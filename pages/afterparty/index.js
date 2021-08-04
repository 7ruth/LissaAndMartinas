import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lissa & Martinas</title>
        <meta name="description" content="Lissa & Martinas" />
        <link rel="icon" href="/favicon.ico" />
        <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
      </Head>

      <main>
        <div style={{ overflowY: "scroll", margin: "0 5%" }}>
          <h1 className={styles.title}>Lissa & Martinas</h1>
          <h2 style={{ margin: "10px auto", textAlign: "center" }}>
            September 3, 2021
          </h2>
          <div
            style={{
              position: "relative",
              margin: "7% auto",
              height: "300px",
              width: "235px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Image
              layout="fill"
              alt={"Lissa & Martinas"}
              src={"/image_1.jpeg"}
            />
          </div>

          <h2>After party</h2>
          <p>Let the party continue!</p>

          <h2>Location</h2>
          <p>
            Our House
            <br />
            11808 Silent Valley Ln
            <br />
            Gaithersburg, MD 20878
          </p>

          <h2>Time</h2>
          <p>9pm</p>
        </div>
      </main>
    </div>
  );
}
