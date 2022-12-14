import React from "react";
// import "./landingComponents.css";\
import styles from "../../styles/Landing.module.css";

import { Grid } from "@mui/material";
import yhills from "../../resources/sponsor/IMG_1109.PNG";
import insightone from "../../resources/sponsor/insightone2.png";
import simpliclarify from "../../resources/sponsor/SIMPLICLARIFY TITLE SPONSOR.png";
import SNLogo from "../../resources/sponsor/SN Logo.jpg";
import ventureCatalyst from "../../resources/sponsor/VentureCatalystsLogo.png";
import gsc from "../../resources/sponsor/GSC.jpeg";
import grabon from "../../resources/sponsor/GrabOn_highres_white_primary.png";
import Image from "next/image";
import Link from "next/link";

export function Section5() {
  return (
    <div className={styles.Sapling}>
      <h4 className={styles.ta_center} style={{ marginTop: "1rem" }}>
        Sponsors
      </h4>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <div className={styles.column}>
            <Link href="/" target="blank">
              <Image
                src={simpliclarify}
                className={styles.center}
                layout="responsive"
                alt="altimage"
              />
            </Link>
            {/* <br /> */}
            {/* <br /> */}
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={styles.column}>
            <Link href="https://www.grabon.in/" target="blank">
              <Image
                src={grabon}
                className={styles.center}
                layout="responsive"
                alt="altimage"
              />
            </Link>
            <br />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={styles.column}>
            <Link href="/" target="blank">
              <Image
                src={yhills}
                className={styles.center}
                layout="responsive"
                alt="altimage"
              />
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <Link href="/" target="blank">
              <Image
                src={insightone}
                className={styles.center}
                layout="responsive"
                alt="altimage"
              />
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={styles.column}>
            <Link href="/" target="blank">
              <Image
                src={SNLogo}
                className={styles.center}
                layout="responsive"
                alt="altimage"
              />
            </Link>
            {/* <br /> */}
            {/* <br /> */}
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={styles.column}>
            <Link href="/" target="blank">
              <Image
                src={ventureCatalyst}
                className={styles.center}
                layout="fill"
                alt="altimage"
              />
            </Link>
            <br />
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div className={styles.column}>
            <Link href="/" target="blank">
              <Image
                src={gsc}
                className={styles.center}
                layout="responsive"
                alt="altimage"
              />
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
