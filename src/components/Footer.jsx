import React, { useState } from "react";
import styles from "./styles/footer.module.scss";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const Footer = () => {
  const [emailInput, setEmailInput] = useState("");
  const [captchaState, setCaptchaState] = useState(false);

  function onChange(value) {
    setCaptchaState(true);
  }
  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (captchaState && isValidEmail(emailInput)) {
      axios
        .post(
          `https://starfish-app-licfp.ondigitalocean.app/zelcar/contact/save`,
          { email: emailInput }
        )
        .then(() => {
          toast.success("Thank you for sign in!", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          // setTimeout(() => {
          //   setModalKickstarter(true);
          // }, 1000);
          // setTimeout(() => {
          //   window.location.href =
          //     "https://www.kickstarter.com/projects/secretforest/secretforest";
          // }, 7500);
          // setFooterEmailInput("");
          // setHeaderEmailInput("");
          setEmailInput("");
        })
        .catch((error) => {
          console.error("Error al enviar el email:", error);
          toast.error("The email is registered.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    } else {
      if (captchaState == false) {
        toast.error("Please verify with captcha.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      if (isValidEmail(emailInput) == false || emailInput == "") {
        toast.error("The email is Wrong.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <footer className={styles.container}>
      <div className={styles.form}>
        <h3>Be the first to know about our latest releases and news.</h3>
        <input
          type="text"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          placeholder="your@email.com"
        />
        <ReCAPTCHA
          size="normal"
          className={styles.captcha}
          sitekey="6LcKs2MoAAAAANbEb8FgM_zGq-AZx2SegfCCegkn"
          onChange={onChange}
        />
        <button onClick={(e) => sendEmail(e)}>Send</button>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.info}>
        <div className={styles.infoLeft}>
          <p>Zelcar Games</p>
          <p>ceo@secretforest.world</p>
          <p>c@zelcar.games</p>
        </div>
        <div className={styles.infoMid}>
          <p>Office</p>
          <p>Zelcar Games LLC</p>
          <p>2201 Manaul Blvd NE,STE A</p>
          <p>Alburquerque, NM 87107 USA</p>
          <p>(430) 305-1445</p>
        </div>
        <div className={styles.infoRight}>
          <p>Terms & conditions</p>
          <p>Refund policy</p>
          <p>Privacy policy</p>
          <p>Copyright 2023 Zelcar Games LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
