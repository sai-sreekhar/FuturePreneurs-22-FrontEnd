import React from "react";
import { useState } from "react";
import styles from "../styles/Dashboard.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function CardComponent({ heading, paragraph, teamId,round }) {
  const [map, setMap] = useState();
  const { data: session } = useSession();
  const router = useRouter();

  function handleNext() {
    console.log("hello");
    if (session) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/team/roundone/${teamId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessTokenBackend}`,
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("data");
          console.log(data.mapChoice);
          setMap(data.mapChoice)
          if(data.mapChoice == 1 && round === "round1"){
            window.location = '/beach'
          }
          if(data.mapChoice == 2 && round === "round1"){
            window.location = '/techPark'
          }
          if(data.mapChoice == 0 && round === "round1"){
            window.location = '/temple'
          }
          if(round==="round2"){
            window.location = '/round3'
          }
          if(round==="game"){
            window.location = '/game'
          }
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <>
      <div
        className={`${styles.col} ${styles.lg4} ${styles.md3} ${styles.xs2} ${styles.flex_stretch}  ${styles.cardbodyContainer}`}
      >
        <div
          className={`${styles.member_container} ${styles.border_gradient} `}
        >
          <div className={`${styles.centre_align} ${styles.bottom_margin}`}>
            <h4 className={styles.cardHeading}>{heading}</h4>
            <div className={styles.instructions}>{paragraph}</div>
          </div>
        </div>
        <div className={styles.start_btn}>
          <img
            src={"start.png"}
            width="290px"
            sizes="(max-width: 479px) 31vw, (max-width: 1919px) 145px, 290px"
            alt=""
            className={styles.image}
            style={{ display: "block" }}
            onClick={() => {
              handleNext();
            }}
          />
        </div>
      </div>
    </>
  );
}

export default CardComponent;