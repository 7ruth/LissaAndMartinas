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
    title: "Yearly tradition",
    description:
      "Martinas started the year with the annual boys ski trip, something he's been doing with friends since high school. Lissa joined for part of the journey, staying in Seattle while the rest of the group continued on to Lake Tahoe.",
  },
  {
    original: "2022/b_IMG.png",
    thumbnail: "2022/b_IMG.png",
    title: "The Lads",
    description:
      "Lake Tahoe had amazing views, and Martinas hopes to be back there soon.",
  },
  {
    original: "2022/c_IMG.png",
    thumbnail: "2022/c_IMG.png",
    title: "Nailed It",
    description: "",
  },
  {
    original: "2022/e_IMG.mov",
    thumbnail: "2022/e_IMG.mov",
    title: "Escaping the cold",
    video: true,
    description:
      "In February, Lissa took a trip to Miami to meet up with friends who flew in from London. It was a fun reunion, and highlights included spotting crocodiles on an airboat tour, seeing all kinds of wildlife in the Everglades and spotting a Portuguese Man-o'-War on South Beach.",
  },
  {
    original: "2022/d_IMG.mov",
    thumbnail: "2022/d_IMG.mov",
    video: true,
    title: "Beach life",
    description:
      "Lissa also got to see family in Florida, visiting her Uncle who not only took her to see the house that he and Lissa's dad grew up in, but also drove her by Tiger Wood's house on Jupiter Island.",
  },
  {
    original: "2022/f_IMG.mov",
    thumbnail: "2022/f_IMG.mov",
    video: true,
    title: "Joshua Tree",
    description:
      "One of Lissa's favorite trips this year was in March, hiking around Joshua Tree and exploring different parts of southern California with a friend.",
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
      "Having more flexibility to work remotely this year allowed Lissa to visit a friend in Chicago in May, where they worked during the day and had fun the rest of the time biking in the sun, eating Oberweiss ice cream and seeing an orchestral Taylor Swift concert.",
  },
  {
    original: "2022/k_IMG.mov",
    thumbnail: "2022/k_IMG.mov",
    video: true,
    title: "More beach trips",
    description:
      "Lissa started a new job in April, that took her to coastal cities (read: beaches) several times this year. In June, she took a trip in June to Virginia Beach to see these magnificent offshore wind turbines.",
  },
  {
    original: "2022/l_IMG.png",
    thumbnail: "2022/l_IMG.png",
    title: "DC meetup",
    description:
      "Martinas and Lissa loved seeing more friends in person this year, after having so many virtual meetups to keep in touch.",
  },
  {
    original: "2022/m_IMG.png",
    thumbnail: "2022/m_IMG.png",
    title: "Weekend getaway",
    description:
      "One of the trips Lissa took with friends she had not seen in awhile was to a baby goat farm in North Carolina.",
  },
  {
    original: "2022/n_IMG.mov",
    thumbnail: "2022/n_IMG.mov",
    video: true,
    title: "Wedding season begins",
    description:
      "Martinas and Lissa attended their first wedding of the year in July, celebrating a high school friend who got married in upstate New York. Highlights included two ceremonies, rainbows, raw bar cocktail hour, dancing to a live band and spending a weekend with friends.",
  },
  {
    original: "2022/o_IMG.png",
    thumbnail: "2022/o_IMG.png",
    title: "Banff",
    description: "",
  },
  {
    original: "2022/p_IMG.png",
    thumbnail: "2022/p_IMG.png",
    title: "Tennis with the pros",
    description: `.`,
  },
  {
    original: "2022/s_IMG.png",
    thumbnail: "2022/s_IMG.png",
    title: "Горько!",
    description: " ",
  },
  {
    original: "2022/t_IMG.mov",
    thumbnail: "2022/t_IMG.mov",
    video: true,
    title: "Harry Potter, Love Bugs and The Weeknd",
    description:
      "Cheers to 2022! We wish you a healthy and joyful rest of the year, and look forward to safely seeing everyone in the new year! ",
  },
  {
    original: "2022/u_IMG.png",
    thumbnail: "2022/u_IMG.png",
    title: "Bridesmaids and new friends",
    description: " ",
  },
  {
    original: "2022/v_IMG.png",
    thumbnail: "2022/v_IMG.png",
    title: "Auntie and Uncle life",
    description: " ",
  },
  {
    original: "2022/w_IMG.png",
    thumbnail: "2022/w_IMG.png",
    title: "Destination: Hawaii",
    description:
      "One of the highly anticipated trips of this year was for another high school friend's wedding in Hawaii.",
  },
  {
    original: "2022/x_IMG.mov",
    thumbnail: "2022/x_IMG.mov",
    title: "Sea turtles in the wild",
    description: " ",
    video: true,
  },
  {
    original: "2022/y_IMG.mov",
    thumbnail: "2022/y_IMG.mov",
    title: "Home away from home",
    description: " ",
    video: true,
  },
  {
    original: "2022/z_IMG.png",
    thumbnail: "2022/z_IMG.png",
    title: "BLINKs are back",
    description: " ",
  },
  {
    original: "2022/aa_IMG.png",
    thumbnail: "2022/aa_IMG.png",
    title: "Thankful",
    description: " ",
  },
  {
    original: "2022/bb_IMG.png",
    thumbnail: "2022/bb_IMG.png",
    title: "Staying local for the holidays",
    description: " ",
  },
  {
    original: "2022/cc_IMG.png",
    thumbnail: "2022/cc_IMG.png",
    title: "Christmas walk",
    description: " ",
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
