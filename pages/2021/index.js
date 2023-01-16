import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import styles from "../../styles/Home.module.css";
import fs from "fs";
import Wrap from "../../components/Home/components/Wrap";

const images = [
  {
    original: "2021/a_IMG.png",
    thumbnail: "2021/a_IMG.png",
    title: "4.3.21....🚀",
    description:
      "We got married! Uncertain of whether or not we'd be able to have a wedding, we decided to elope. On a perfectly sunny day in April, we exchanged vows and rings, and had a lovely picnic in a meadow.",
  },
  {
    original: "2021/b_IMG.png",
    thumbnail: "2021/b_IMG.png",
    title: "The attic",
    description:
      "Late last year, we bought a house built in the '70s, and it had its original insulation. Martinas spent a lot of 2021 in the attic putting in new insulation. After all of his hard work, our home has been a lot warmer this winter.",
  },
  {
    original: "2021/c_IMG.png",
    thumbnail: "2021/c_IMG.png",
    title: "Our garden",
    description:
      "We saw our backyard come to life this spring/summer. After having lived in the city for several years, we took advantage of having green space to grow veggies and flowers.",
  },
  {
    original: "2021/d_IMG.png",
    thumbnail: "2021/d_IMG.png",
    title: "Dahlias",
    description: "Lissa's proudest garden achievement.",
  },
  {
    original: "2021/g_IMG.png",
    thumbnail: "2021/g_IMG.png",
    title: "It's always sunny...",
    description:
      "in our house! Which is great. However, after having to wear his sunglasses indoors because of how bright it was, Martinas installed skylight blinds. The joys of home ownership!",
  },
  {
    original: "2021/h_IMG.png",
    thumbnail: "2021/h_IMG.png",
    title: "Desert travel",
    description:
      "We went to Arizona and Utah! Taking a break from fixing up our home, we had a summer holiday hiking around some desert landscapes. Here we are in a slightly cooler Sedona. Also, Martinas is the original #wireditgirl.",
  },
  {
    original: "2021/i_IMG.png",
    thumbnail: "2021/i_IMG.png",
    title: "I spy...",
    description: "Martinas! Can you spot him? Hint: bottom left",
  },
  {
    original: "2021/j_IMG.png",
    thumbnail: "2021/j_IMG.png",
    title: "Iceland",
    description:
      "Lissa had a blissful week in Iceland, escaping Maryland's summer heat (and terrifying cicadas). What a magical place! This is a photo of Diamond Beach at sunset.",
  },
  {
    original: "2021/k_IMG.png",
    thumbnail: "2021/k_IMG.png",
    title: "Family time",
    description: "We were lucky to see a lot of loved ones this year...",
  },
  {
    original: "2021/l_IMG.png",
    thumbnail: "2021/l_IMG.png",
    title: "Thankful",
    description: "...and to host our first Thanksgiving in our home.",
  },
  {
    original: "2021/m_IMG.png",
    thumbnail: "2021/m_IMG.png",
    title: "The half",
    description:
      "Lissa trained all summer to run her second marathon in October. This is her half marathon medal from her race in Philly, which was a fun run before the full marathon race.",
  },
  {
    original: "2021/n_IMG.png",
    thumbnail: "2021/n_IMG.png",
    title: "The full",
    description:
      "Lissa ran the Wineglass Marathon in upstate NY with her BLINK running group. 26.2 miles in the rain! She forgot to take a photo of her medal, but this was really good chocolate milk that she had at the end of the race. GO BLINKs!",
  },
  {
    original: "2021/o_IMG.png",
    thumbnail: "2021/o_IMG.png",
    title: "Rest and recovery",
    description:
      "But make it accidental! Post-marathon, Lissa sprained her ankle and couldn't run for months. She is grateful to Martinas and her dear friends who literally carried her, and pushed her around in a wheelchair. ",
  },
  {
    original: "2021/p_IMG.png",
    thumbnail: "2021/p_IMG.png",
    title: "Start up life",
    description: `Martinas has a business! Check out Offermarket.us if you haven't already.`,
  },
  {
    original: "2021/q_IMG.png",
    thumbnail: "2021/q_IMG.png",
    title: "Local fun",
    description:
      "We loved having beautiful spaces so closeby, like Glenstone Museum.",
  },
  {
    original: "2021/r_IMG.png",
    thumbnail: "2021/r_IMG.png",
    title: "DC day",
    description:
      "We're feeling like true suburbanites now, where we plan trips to DC. Here is Lissa in one of our favorite museums, the National Portrait Gallery.",
  },
  {
    original: "2021/s_IMG.png",
    thumbnail: "2021/s_IMG.png",
    title: "From Maryland Heights, with love",
    description:
      "Cheers to 2022! We wish you a healthy and joyful rest of the year, and look forward to safely seeing everyone in the new year! ",
  },
];

export async function getStaticProps() {
  const publicData = fs.readdirSync("./public");

  return {
    props: {
      publicData,
    },
  };
}

export default function Home(props) {
  const customRender = (item) => {
    // customize your own slide below
    return (
      // <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <img // eslint-disable-line @next/next/no-img-element
          className="image-gallery-image"
          // style={{ transform: "rotate(90deg)" }}
          src={item.original}
          alt={item.originalAlt}
          srcSet={item.srcSet}
          sizes={item.sizes}
          title={item.originalTitle}
        />
        {(item.description || item.title) && (
          <div className="image-gallery-description">
            <div className="image-gallery-description-title">{item.title}</div>
            <div className="image-gallery-description-text">
              {item.description}
            </div>
          </div>
        )}
      </div>
      // <div className="image-gallery-image">
      // </div>
    );
  };

  const sorted = props.publicData
    .filter((item) => {
      return item.indexOf("IMG") !== -1;
    })
    .sort(function (a, b) {
      return a - b;
    });

  console.log(sorted);

  const galleryRef = useRef(null);

  const startGallery = () => {
    console.log(galleryRef?.current);

    galleryRef?.current?.fullScreen();
  };
  // useEffect(() => {
  //   (async () => {
  //   })();
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Lissa & Martinas</title>
        <meta name="description" content="Lissa & Martinas" />
        <link rel="icon" href="/favicon.ico" />
        <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
      </Head>

      <main>
        <Wrap style={{ margin: "0 5%", margin: "1%" }}>
          <h1 className={styles.title}>2021 Highlights</h1>
          {/* <button onClick={() => startGallery()}> For best experience..</button> */}
          <ImageGallery
            ref={galleryRef}
            autoPlay={false}
            items={images}
            renderItem={customRender}
          />

          {/* <div style={{ width: "80%", margin: "0 auto" }}>
            {sorted.map((item, i) => {
              return (
                <div
                  // style={{
                  //   width: "100%",
                  //   height: "20vh",
                  // }}
                  key={`image_${i}`}
                >
                  <div
                    style={{
                      position: "relative",
                      margin: "30px auto auto auto",
                      width: "800px",
                      height: "800px",
                      // width: "auto",
                      // height: "30vh",
                      marginTop: "10px",
                    }}
                  >
                    <Image src={`/${item}`} layout={"fill"} />
                  </div>
                  {captions[i] && (
                    <div>
                      <h2 style={{ marginBottom: 0 }}>{captions[i].title}</h2>
                      <code>{captions[i].description}</code>
                    </div>
                  )}
                </div>
              );
            })}
          </div> */}
          {/* <h2 style={{ margin: "10px auto", textAlign: "center" }}>
            September 3, 2021
          </h2> */}
          {/* <div
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
          </div> */}

          {/* <h2>Are you coming?</h2>
          <p>
            {" "}
            <a
              style={{ color: "blue", textDecorate: "underline" }}
              href={
                "https://docs.google.com/forms/u/1/d/e/1FAIpQLSemTLftJwi9-YNPDOvLUr3tWcyJldN2gjAfjlFSG5irZaY1rQ/viewform?usp=send_form"
              }
            >
              RSVP
            </a>
          </p>
          <h2>Location</h2>
          <p>
            The Corn Crib
            <br />
            Rocklands Farm Winery
            <br />
            14531 Montevideo Rd, Poolesville, MD 20837
          </p>

          <h2>Time</h2>
          <p>5pm-9pm</p>

          <h2>Details</h2>
          <p>
            We made it official on April 3, 2021, and are excited to (finally)
            celebrate with family and friends! Join us for an evening of food
            and drink in an outdoor space. xx L+M
          </p>

          <h2>Accommodation</h2>

          <p>
            We have not booked out any hotel rooms, but please reach out to us
            if you have any questions about where to stay.
          </p>

          <h2>What to wear</h2>

          <p>
            Ladies: summer dress, jumpsuit, jeans and a nice top, comfortable
            shoes
          </p>

          <p>Gents: shorts, jeans, a polo or button up, comfortable shoes</p>
          <p>
            There will be benches and picnic blankets for seating, so dress for
            the weather, and be comfortable!
          </p>
          <p>Please remember to bring a face covering.</p>
          <p>Examples below:</p>

          <div>
            <a
              data-pin-do="embedBoard"
              data-pin-board-width="400"
              data-pin-scale-height="240"
              data-pin-scale-width="80"
              href="https://www.pinterest.com/lissamei/dress-code/"
            ></a>
          </div>

          <h2>Gifts</h2>
          <p>
            {" "}
            We do not have a registry, but if you would like to give a gift,
            please contribute to our{" "}
            <a
              style={{ color: "blue", textDecorate: "underline" }}
              href={"http://www.wanderable.com/hm/LissaandMartinas"}
            >
              honeymoon fund.
            </a>
          </p>
          <p>Or directly at: Venmo: @LissaEng, @Martinas-Terskin</p> */}

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
        </Wrap>
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
