import React from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import "primeflex/primeflex.css";
import { Password } from "primereact/password";

const GeneralInfo = (props) => {
  return (
    <form>
      <div className="p-fluid p-formgrid p-grid"></div>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col">
          <label htmlFor="lastname6">Email</label>
          <InputText
            value={props.adresseMail}
            onChange={(e) => props.HandleEmail(e.target.value)}
            id="email"
            type="text"
          />
        </div>

        <div className="p-field p-col">
          <label htmlFor="password">Password</label>
          <Password
            onChange={(e) => props.HandlePassword(e.target.value)}
            inputId="password"
          />
        </div>
      </div>

      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col">
          <label htmlFor="firstname6">First name</label>
          <InputText
            onChange={(e) => props.HandleFirstName(e.target.value)}
            id="firstname6"
            type="text"
          />
        </div>
        <div className="p-field p-col">
          <label htmlFor="lastname6">Last name</label>
          <InputText
            onChange={(e) => props.HandleLastname(e.target.value)}
            id="lastname6"
            type="text"
          />
        </div>
      </div>

      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-12">
          <label htmlFor="address">Address</label>
          <InputTextarea
            onChange={(e) => props.HandleAdresse(e.target.value)}
            id="address"
            type="text"
            rows="4"
          />
        </div>
      </div>

      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col">
          <label htmlFor="icon">Date of Birth</label>
          <Calendar
            onChange={(e) => props.HandleBirthday(e.target.value)}
            id="icon"
            dateFormat="dd/mm/yy"
            showIcon
          />
        </div>
        <div className="p-field p-col">
          <label htmlFor="number">Phone number</label>
          <InputText
            onChange={(e) => props.HandleTel(e.target.value)}
            id="number"
            type="text"
          />
        </div>
      </div>
    </form>
  );
};

export default GeneralInfo;
