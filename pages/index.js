import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import styles from "../styles/Home.module.css";
import fs from "fs";
import Wrap from "../components/Home/components/Wrap";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import { useState, useLayoutEffect } from "react";

const images = [
  {
    original: "2022/a_IMG.png",
    thumbnail: "2022/a_IMG.png",
    title: "Annual Tradition",
    description:
      "Martinas started the year with the annual boys' ski trip. Lissa joined for part of the flight, staying in   Seattle, while the rest of the group continued to Lake Tahoe. ",
  },
  {
    original: "2022/b_IMG.png",
    thumbnail: "2022/b_IMG.png",
    title: "The Lads",
    description:
      "Martinas and the guys enjoyed Lake Tahoe's 'Heavenly' views, and took advantage of the powdery slopes.",
  },
  {
    original: "2022/c_IMG.png",
    thumbnail: "2022/c_IMG.png",
    title: "Nailed It",
    description: "An iconic photo of our friend, Danny.",
  },
  {
    original: "2022/e_IMG.mov",
    thumbnail: "2022/e_IMG.mov",
    title: "Winter Escape",
    video: true,
    description:
      "In February, Lissa met her friends, Treeni and Ellie, in Miami. It wasn't the quite the escape from colder (read: DC and London) climates, but the trip was still relaxing (except for maybe the airboat tour) walking around the city, and seeing all kinds of wildlife in the Everglades.",
  },
  {
    original: "2022/d_IMG.mov",
    thumbnail: "2022/d_IMG.mov",
    video: true,
    title: "Beach life",
    description:
      "Lissa also got to see family in Florida, visiting her Uncle Randy who not only took her to see the house that he and Lissa's dad grew up in, but also drove her by Tiger Wood's house on Jupiter Island.",
  },
  {
    original: "2022/f_IMG.mov",
    thumbnail: "2022/f_IMG.mov",
    video: true,
    title: "Joshua Tree",
    description:
      "One of Lissa's favorite trips this year was in March, hiking around Joshua Tree and exploring different parts of southern California with her friend, Jamie (who flew in from Seattle, so seen here soaking up the sun).",
  },
  {
    original: "2022/g_IMG.png",
    thumbnail: "2022/g_IMG.png",
    title: "Dad turns 70!",
    description:
      "This year we celebrated Dad's 70th birthday! After a couple years of virtual and smaller celebrations, we were lucky to have many friends and family members gather for dad's surprise party.",
  },
  {
    original: "2022/j_IMG.mov",
    thumbnail: "2022/j_IMG.mov",
    video: true,
    title: "Teleworking in Chicago",
    description:
      "Having more flexibility to work remotely this year allowed Lissa to visit her friend, Amy, in Chicago, where they worked during the day and had fun the rest of the time biking in the sun, eating Oberweiss ice cream and seeing an orchestral Taylor Swift concert.",
  },
  {
    original: "2022/k_IMG.mov",
    thumbnail: "2022/k_IMG.mov",
    video: true,
    title: "More beach trips",
    description:
      "Lissa started a new job in April, that took her to coastal cities and beaches several times this year. In June, she took a trip to Virginia Beach to see these magnificent offshore wind turbines.",
  },
  {
    original: "2022/l_IMG.png",
    thumbnail: "2022/l_IMG.png",
    title: "DC meetup",
    description:
      "We loved seeing more friends in person this year, after having so many virtual meetups to keep in touch. Here we are at a favorite museum with friends Treeni and Luke.",
  },
  {
    original: "2022/m_IMG.png",
    thumbnail: "2022/m_IMG.png",
    title: "Weekend getaway",
    description:
      "One of the trips Lissa took with her 'triplet' friends, Ann and Emily, was to a baby goat farm in North Carolina.",
  },
  {
    original: "2022/n_IMG.mov",
    thumbnail: "2022/n_IMG.mov",
    video: true,
    title: "Wedding season begins",
    description:
      "We attended our first wedding of the year in July, celebrating our friend, Karthik, who got married in upstate New York. Highlights included two ceremonies, rainbows, raw bar cocktail hour, dancing to a live band and spending a weekend with friends.",
  },
  {
    original: "2022/o_IMG.png",
    thumbnail: "2022/o_IMG.png",
    title: "Boys Trip",
    description:
      "Celebrating a friend, Igor's, bachelor party in Banff was a highlight for Martinas. He can't wait to return to the Canadian Rockies!",
  },
  {
    original: "2022/p_IMG.png",
    thumbnail: "2022/p_IMG.png",
    title: "Tennis with the pros",
    description: `Lissa's cousin, David, visited the family in August. Everyone got to enjoy Maryland crabs, and dad and Lissa even had time to play some tennis with the visiting pro!`,
  },
  {
    original: "2022/s_IMG.mov",
    thumbnail: "2022/s_IMG.mov",
    video: true,
    title: "Горько!",
    description:
      "We celebrated our friends Igor and Ruslana's wedding in September. Highlights include pre- wedding boys hangout, lots of dancing and laughing and post-wedding late night McNuggets and Big Macs.",
  },
  {
    original: "2022/t_IMG.mov",
    thumbnail: "2022/t_IMG.mov",
    video: true,
    title: "Harry Potter and Haunted Houses",
    description:
      "Also in September, Lissa took a trip with Jamie to Florida, where they relaxed on the beach and took a quick trip to Orlando to run around Harry Potter World, and be frightened at the Weeknd's Haunted House.  ",
  },
  {
    original: "2022/u_IMG.png",
    thumbnail: "2022/u_IMG.png",
    title: "Bridesmaids and new friends",
    description:
      "In October, Lissa was a bridesmaid for her friend Cynthia's wedding. It was a perfectly sunny weekend spent with old and new friends.",
  },
  {
    original: "2022/v_IMG.png",
    thumbnail: "2022/v_IMG.png",
    title: "Auntie and Uncle life",
    description:
      "Later in October, we stopped in Washington to see family. We were greeted by Lissa's cousin, Kristen's, three adorable kids.",
  },
  {
    original: "2022/w_IMG.png",
    thumbnail: "2022/w_IMG.png",
    title: "Destination: Hawaii",
    description:
      "One of the highly anticipated trips of the year was in October to Hawaii, where Martinas was a groomsman for our friend Danny. Highlights include reuniting with friends, Lydia and Jen, water slides and eating all the poke together.",
  },
  {
    original: "2022/x_IMG.png",
    thumbnail: "2022/x_IMG.png",
    title: "Kayaking to the Mokes",
    description:
      "One of the best things we did in Hawaii was getting out on the water to kayak to the Mokulua Island bird sanctuaries.",
  },

  {
    original: "2022/z_IMG.png",
    thumbnail: "2022/z_IMG.png",
    title: "BLINKs are back",
    description:
      "Lissa started running again with her BLINKs, John, Julie and Nicole, reuniting for the Turkey Trot 10k on Thanksgiving Day.",
  },
  {
    original: "2022/aa_IMG.png",
    thumbnail: "2022/aa_IMG.png",
    title: "Thankful",
    description:
      "We are so grateful that we live close to family, and it is becoming an annual tradition to celebrate Thanksgiving with both sides of our families together.   ",
  },

  {
    original: "2022/cc_IMG.png",
    thumbnail: "2022/cc_IMG.png",
    title: "Christmas walk",
    description:
      "We ended the year with some freezing temperatures, but also a chance to enjoy a winter walk with all the siblings + Mike, Cory and Boogie.",
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
  const [windowDimensions, setWindowDimensions] = useState(null);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    console.log("windowDimensions_1");
    console.log(windowDimensions);
  }, []);

  useLayoutEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <h1 className={styles.title}>2022: Reunions & Celebrations</h1>
        {windowDimensions && (
          <Box sx={{ display: "flex" }}>
            {console.log("windowDimensions.width * 0.9_4")}
            {console.log(windowDimensions.width * 0.9)}
            <ImageList
              sx={{
                width: `${
                  windowDimensions.width < 500
                    ? windowDimensions.width * 0.9
                    : 600
                }px`,
                margin: "auto",
              }}
              cols={1}
              rowHeight={600}
              // sx={{ width: 500, height: 450 }}
            >
              {images.map((item) => (
                <ImageListItem
                  sx={{
                    width: `${
                      windowDimensions.width < 500
                        ? windowDimensions.width * 0.9
                        : 600
                    }px`,
                    height: 400,
                    margin: "auto auto 33px auto",
                    "& .MuiImageListItem-img": {
                      overflow: "hidden",
                      height: "inherit",
                    },
                  }}
                  cols={1}
                  key={item.img}
                >
                  {!item.video ? (
                    /*eslint-disable */
                    <img
                      width={`${
                        windowDimensions.width < 500
                          ? windowDimensions.width * 0.9
                          : 600
                      }`}
                      height="400"
                      // src={`${item.original}?w=248&fit=crop&auto=format`}
                      src={`${item.original}?w=600&h=400&fit=crop&auto=format`}
                      // srcSet={`${item.original}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      srcSet={`${item.original}?w=600&h=400&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  ) : (
                    /*eslint-enable */
                    <video
                      width={`${
                        windowDimensions.width < 500
                          ? windowDimensions.width * 0.9
                          : 600
                      }`}
                      height="400"
                      controls
                    >
                      <source src={item.original} type="video/mp4"></source>
                    </video>
                  )}
                  <ImageListItemBar
                    sx={{
                      "& .MuiImageListItemBar-title": {
                        fontSize: "22px",
                        marginTop: "3px",
                        fontWeight: 550,
                      },
                      "& .MuiImageListItemBar-subtitle": {
                        fontSize: "14px",
                        textOverflow: "initial !important",
                        overflow: "visible !important",
                        whiteSpace: "inherit !important",
                      },
                    }}
                    title={item.title}
                    subtitle={item.description}
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        )}
      </main>
    </div>
  );
}
