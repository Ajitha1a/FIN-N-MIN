import 'bootstrap/dist/css/bootstrap.min.css';
import { Controller, useForm } from "react-hook-form";
import '../App.css';
import '../StylesHomepage.css';
import bulb from '../images/group-14.png'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from 'react';
import axios from 'axios';
{/*
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const schema = yup.object().shape({
  name: yup
    .string("Enter your name")
    .typeError("Name name must be a alphbet")
    .required("name is required"),
  email: yup
    .string()
    .required("email is required")
    .matches(emailRegex, "email is not valid"),
    phoneno: yup
    .string()
    .required("mobile number is required")
    .matches(/^[6-9]\d{9}$/, "Phone number is not valid")
    .min(10, "too short")
    .max(10, "too long"),
});*/}
function Contact(){
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[phno, setPhno] = useState();
  const[msg, setMsg] =useState('');
  const[ datas,setDatas] = useState([]);

  
      
  const data={
    name : name,
    email : email,
    phno : phno,
    msg : msg,
}

var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;//email
var pattern =/^(?=[a-zA-Z0-9._]{4,10}$)(?!.*[_.]{2})[^_.].*[^_.]$/; //name
//var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var namerror=document.getElementById('namemessage');
var emailerror=document.getElementById('emailmessage');
var pherror=document.getElementById('phmessage');
var text=document.getElementById('textmessage');
  function usernamefn() { 
    setMsg(msg);
    if(!pattern.test(data.name)){
        //alert("username is required..");
        namerror.style.display = "block";
    } else namerror.style.display = "none";
    setMsg(msg);
  }
  const handlesubmit= () =>{
      
      if(!pattern.test(data.name)){
          //alert("username is required..");
          namerror.style.display = "block";
      }else
      if (!filter.test(data.email)) {
      //alert('email address is required');
          namerror.style.display = "none";
          emailerror.style.display = "block";
      }else
      if (!phoneno.test(data.phno)) {
          //alert('phone number is required');
          emailerror.style.display = "none";
          pherror.style.display = "block";
      }else
      if (msg == "") {
        pherror.style.display = "none";
        text.style.display = "block";
          return false;
      } else 
      text.style.display = "none";
      console.log(data);
      //setDatas((oldArray) => [...oldArray, data]);
      axios.post("https://sangeetha.npkn.net/fininmin",data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
      //clear();
  }
  const clear=()=>{
    setName('');
    setEmail("");
    setPhno('');
    setMsg('');
  }
  return (
    <div className='contact'>
      <h2 className='heading' style={{textAlign: 'center', marginBottom: '20px'}}>Con  tact Us</h2>
      <div className='contactRow'>
          <form>
            <div className='row-align-start'>
              <div>
                <div className="textFieldContainer">
                  <label className="label">
                    First Name <span className="mandatory">*</span>
                  </label>
                      <input 
                        type="text"
                        placeholder="Enter your name"
                        className="textField"
                        autoComplete="off"
                        value={name}
                        onChange={(event) => setName(event.target.value)}/><br/>
                        <p id="namemessage">Name is required</p>
                </div>
                <div className="textFieldContainer">
                  <label for="email" className="label">
                    Email ID <span className="mandatory">*</span>
                  </label>
                      <input
                        type="text"
                        id="email" 
                        placeholder="Enter your email ID"
                        className="textField"
                        autoComplete="off"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email ID"/><br/>
                        <p id="emailmessage">Enter a valid email</p>
                </div>
                <div className="textFieldContainer">
                  <label for="phnumber" className="label">
                    Phone Number <span className="mandatory">*</span>
                  </label>
                      <input
                        type="text"
                        id="phnumber"
                        placeholder="Enter your phone number"
                        className="textField"
                        autoComplete="off"
                        value={phno}
                        onChange={(event) => setPhno(event.target.value)} />
                        <p id="phmessage">Enter valid Phone Number</p>
                </div>
              </div>
              <div>
                <div className="textFieldContainer" style={{width: '500px !important'}}>
                  <label for="message" className="label">
                    Message <span className="mandatory">*</span>
                  </label>
                      <input
                        type="text"
                        id="message"
                        placeholder="Enter your message" rows={3}
                        className="textField, textArea"
                        autoComplete="off"
                        value={msg}
                        onChange={(event) => setMsg(event.target.value)} />
                        <p id="textmessage">Enter your message</p>
                </div>
              </div>
            </div>
            <div className='actionBtn'>
              <button type="submit" className='submitbutton' onClick={handlesubmit}>SUBMIT</button>
              <button className='cancelbutton' onClick={clear}>CANCEL</button>
            </div>
          </form>
        <div>
          <img src={bulb} className='bulb' />
        </div>
      </div>
    </div>
  );
}

export default Contact;