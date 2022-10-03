import { useSession } from "next-auth/react";
import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "../../styles/MainQuiz.module.css";

import Loading from "../Loading";
const MainQuiz = ({ hrs, min, sec, startQuiz, TEAM_ID }) => {
  const { data: session } = useSession();
  const [useEffectTrigger, setUseEffectTrigger] = useState(false);

  const [teamData, setTeamData] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const { status } = useSession();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/user/team`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.accessTokenBackend}`,
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.error?.errorCode) {
          toast.error(`${data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }
        setTeamData(data.user);
        setIsLoading(false);
      })

      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, [useEffectTrigger, session]);

  return isLoading ? (
    <Loading></Loading>
  ) : (
    <div className={styles.boy}>
      <div className={styles.round_page}>
        <div className={styles.profile_div}>
          <div className={styles.starting}>
            <div className={styles.h1}>
              <h1 className={styles.heading}>Starting In</h1>
            </div>
            <div className={styles.btn}>
              <a href="#" className={`${styles.button_2} ${styles.w_button}`}>
                {hrs}:{min}:{sec}
              </a>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.profile_container}>
            {teamData?.teamId?.members?.map((team) => {
              return (
                <div className={styles.profile_card} key={team._id}>
                  <div className={styles.img}>
                    <img src={session.user.image} className={styles.image_2} />
                  </div>
                  <div className={styles.nam}>
                    <div className={styles.name}>
                      {team.firstName} {team.lastName}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.instructions_div}>
          <div className={styles.round}>
            <div className={styles.text_block}>Round Zero Instructions</div>
          </div>
          <div className={styles.round}>
            <div className={styles.text_block}>
              {" "}
              Read through all the instructions carefully as this will be vital
              for your performance in the quiz.
            </div>
          </div>
          <div className={styles.round_instruction}>
            <div className={styles.para}>
              <br />
              There will be no free navigation in the quiz, once you move to the
              next question, you cannot move back.
              <br />
              <br />
              If you are unable to solve all the questions in the given time
              period, answered questions will be auto saved and submitted.
              <br />
              <br />
              Marking scheme for multiple options correct: <br />
              <br />• If and only if all the correct options are selected,
              you'll be awarded 4 points.
              <br /> • If even one incorrect option is selected, the team will
              lose 1 point.
              <br />• No points will be awarded if the question is left
              unanswered.
              <br />
              <br />
              Marking scheme for Single options correct:
              <br /> • 4 points will be awarded if the correct option is
              selected.
              <br /> • Team will lose 1 point if any incorrect option is
              selected.
              <br /> • No points will be awarded if the question is left
              unanswered.
              <br />
              For descriptive type questions: you can type your answers. There
              is no word limit. You cannot leave the answer field empty.
              <br />
              For Match the following type questions: first select the question
              and then its corresponding answer. Both the entities will be
              highlighted with the same colour after this is done. Repeat the
              process for all the options in the question.
              <br />
              If you want to deselect your choice in Match the following type,
              click on that particular question.
              <br />
              To answer any question regarding a case study, read through the
              case study thoroughly.
              <br />
              You can use the "clear all" button, to deselect all the options
              incase you face any ambiguity.
              <br />
              Incase of any discrepancy, the team leader can text on the
              designated WhatsApp group.
              <br />
            </div>
          </div>
          <div className={styles.start_btn}>
            <img
              src="startbtn.png"
              width="290px"
              sizes="(max-width: 1919px) 145px, 290px"
              alt=""
              className={styles.image}
            />
            <a
              disabled={isLoading}
              className={`${styles.btn_txt} ${styles.w_button}`}
              style={{
                display: isLoading ? "none" : "block",
              }}
              onClick={() => {
                setIsLoading(true);
                startQuiz();
              }}
            >
              Start Quiz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainQuiz;
