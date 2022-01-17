import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './StylesHomepage.css';
import bulb from './images/group-14.png'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
});

const Contact = (props) => {
  const { control, handleSubmit, setValue, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    reset();
  };
  const onError = (errors, e) => {
    console.log(errors, e);
  };

  return (
    <div className='contact'>
      <h2 className='heading' style={{textAlign: 'center', marginBottom: '20px'}}>Contact Us</h2>
      <div className='contactRow'>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className='row-align-start'>
              <div>
                <div className="textFieldContainer">
                  <label for="fname" className="label">
                    First Name <span className="mandatory">*</span>
                  </label>
                  <Controller 
                    control={control}
                    name="name"
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <input 
                        type="text"
                        id="fname"
                        placeholder="Enter your name"
                        className="textField"
                        autoComplete="off"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </div>
                <div className="textFieldContainer">
                  <label for="email" className="label">
                    Email ID <span className="mandatory">*</span>
                  </label>
                  <Controller
                    control={control}
                    name="email"
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <input
                        type="text"
                        id="email"
                        placeholder="Enter your email ID"
                        className="textField"
                        autoComplete="off"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </div>
                <div className="textFieldContainer">
                  <label for="phnumber" className="label">
                    Phone Number <span className="mandatory">*</span>
                  </label>
                  <Controller
                    control={control}
                    name="phoneno"
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <input
                        type="text"
                        id="phnumber"
                        placeholder="Enter your phone number"
                        className="textField"
                        autoComplete="off"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </div>
              </div>
              <div>
                <div className="textFieldContainer" style={{width: '500px !important'}}>
                  <label for="message" className="label">
                    Message <span className="mandatory">*</span>
                  </label>
                  <Controller
                    control={control}
                    name="message"
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <textarea
                        type="text"
                        id="message"
                        placeholder="Enter your message" rows={3}
                        className="textField, textArea"
                        autoComplete="off"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <div className='actionBtn'>
              <button type="submit" className='submitbutton'>SUBMIT</button>
              <button className='cancelbutton'>CANCEL</button>
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