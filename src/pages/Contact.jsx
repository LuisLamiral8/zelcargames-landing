import React, { useEffect, useState } from "react";
import styles from "./styles/contact.module.scss";
import Layout from "../components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const Contact = () => {
  const [emailInput, setEmailInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (isValidEmail(emailInput)) {
      axios
        .post(
          `https://hammerhead-app-i4xs5.ondigitalocean.app/zelcar/form/save`,
          { email: emailInput, description: descInput }
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
          setEmailInput("");
          setDescInput("");
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
        toast.error("We have already received your message!", {
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
    <Layout>
      <main className={styles.container}>
        <img
          loading="lazy"
          className={styles.overlayUp}
          src="/contact/overlay-up.png"
          alt=""
        />
        <img
          loading="lazy"
          className={styles.overlayDown}
          src="/contact/overlay-down.png"
          alt=""
        />
        <img
          loading="lazy"
          src="/contact/alufi.png"
          className={styles.alufi}
          alt=""
        />
        <div className={styles.main}>
          <div className={styles.separator}></div>
          <h3>Contact us</h3>
          <input
            type="text"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="your@email.com"
          />
          {/* <input type="textarea" placeholder="How can we help you?" /> */}
          <textarea
            placeholder="How can we help you?"
            value={descInput}
            onChange={(e) => setDescInput(e.target.value)}
          ></textarea>
          <button onClick={(e) => sendEmail(e)}>Send</button>
          <div className={styles.info}>
            <p>Or contact us through the following emails:</p>
            <p>ceo@secretforest.world</p>
            <p>c@zelcar.games</p>
          </div>
          <div className={styles.separator}></div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
