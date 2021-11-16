import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { RadioButton } from "primereact/radiobutton";
import { addEvent } from "../../../actions/event";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./radio.scss";

import {
  CCard,
  CContainer,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
} from "@coreui/react";
import InputTags from "src/components/InputTag/InputTag";

const NewEvent = ({ addEvent }) => {
  const [type, setType] = useState(null);
  const [StartDate, setStartDSate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [title, setTitle] = useState("");
  const [Adress, setAdress] = useState("");
  const [StartTime, setStartTime] = useState({
    hour: "00",
    minute: "00",
  });
  const [DescEvent, setDescEvent] = useState("");
  const SetTime_Start = (time) => {
    const hour = time.substring(0, 2);
    const minute = time.slice(-2);
    setStartTime({
      hour,
      minute,
    });
  };

  const [Data, setData] = useState([]);
  const [reprtedto, setreprtedto] = useState([]);

  useEffect(() => {
    Label();
  }, [Data]);

  const Label = () => {
    const arr = [];
    Data.forEach((el) => {
      arr.push({ label: el.name, value: el.name });
    });

    setreprtedto(arr);
  };

  //save Event
  const SaveEvent = async () => {
    const eventData = {
      title: title,
      type: type,
      adress: Adress,
      desc: DescEvent,
      start: StartDate,
      end: EndDate,
      start_time: StartTime,
      etat: "on sh",
    };
    addEvent(eventData);
  };

  //Uplode image

  const headerTemplate = (options) => {
    const { className, chooseButton, cancelButton } = options;

    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
        {cancelButton}
      </div>
    );
  };

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };

  const handleClick = (id) => {
    const input = document.getElementById(id);
    input.click();
  };

  const ClassInput = (data) => {
    if (type == data) return "p-field-radiobutton inputChecked";
    else return "p-field-radiobutton";
  };

  return (
    <CContainer lg>
      <CCard>
        <CCardHeader>New Event</CCardHeader>
        <CCardBody>
          <form>
            <CRow>
              <CCol>
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12">
                    <label htmlFor="">Title</label>

                    <InputText
                      className="input full"
                      value={title}
                      placeholder="Title"
                      type="text"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="p-field p-col-12">
                    <label htmlFor="">Description</label>
                    <InputTextarea
                      className="input full textarea-desc"
                      value={DescEvent}
                      placeholder="Description"
                      type="text"
                      onChange={(e) => setDescEvent(e.value)}
                    />
                  </div>
                  <div className="p-field p-col-12">
                    <label htmlFor="">Adress</label>
                    <InputTextarea
                      className="input full textarea-desc"
                      value={Adress}
                      placeholder="Adress"
                      type="text"
                      onChange={(e) => setAdress(e.value)}
                    />
                  </div>
                  <div className="p-field p-col-12">
                    <label htmlFor="">Image</label>
                    <FileUpload
                      name="demo[]"
                      url="https://primefaces.org/primereact/showcase/upload.php"
                      accept="image/*"
                      maxFileSize={1000000}
                      emptyTemplate={
                        <p className="p-m-0">
                          Drag and drop files to here to upload.
                        </p>
                      }
                      headerTemplate={headerTemplate}
                      chooseOptions={chooseOptions}
                      cancelOptions={cancelOptions}
                    />
                  </div>
                </div>
              </CCol>
              <CCol>
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12">
                    <label htmlFor=""> Community</label>
                    <InputTags options={reprtedto} />
                  </div>

                  <div className="p-field p-col-12">
                    <label htmlFor="">Select Type Event </label>
                    <div className="mt-2 mb-4">
                      <div
                        onClick={() => handleClick(1)}
                        className={ClassInput("Event")}
                      >
                        <div className="radio-title">
                          <label
                            htmlFor="type1"
                            className="p-radiobutton-label"
                          >
                            {" "}
                            Event
                          </label>
                          <RadioButton
                            id="1"
                            className="radiobutton"
                            inputId="type1"
                            name="type"
                            value="Event"
                            onChange={(e) => setType(e.value)}
                            checked={type === "Event"}
                          />
                        </div>

                        <p className="p-text-light">
                          Create an event and notify your colleagues. We'll add
                          this event to the company calendar.
                        </p>
                      </div>

                      <div
                        onClick={() => handleClick(2)}
                        className={ClassInput("Announcement")}
                      >
                        <div className="radio-title">
                          <label htmlFor="type2"> Announcement</label>
                          <RadioButton
                            id="2"
                            inputId="type2"
                            name="type"
                            value="Announcement"
                            onChange={(e) => setType(e.value)}
                            checked={type === "Announcement"}
                          />
                        </div>

                        <p className="p-text-light">
                          Share news, big announcements or ask a question.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CCol>
            </CRow>

            <div className="p-fluid p-formgrid p-grid">
              <CRow>
                <CCol>
                  <div className="p-field p-col">
                    <label htmlFor="">Start Event</label>

                    <Calendar
                      id="icon"
                      value={StartDate}
                      onChange={(e) => setStartDSate(e.value)}
                      dateFormat="dd/mm/yy"
                      showIcon
                    />
                  </div>
                </CCol>
                <CCol>
                  <div className="p-field p-col">
                    <label htmlFor="">End Event</label>

                    <Calendar
                      id="icon"
                      disabled={StartDate == ""}
                      value={EndDate}
                      onChange={(e) => {
                        if (StartDate == "") return;
                        setEndDate(e.value);
                      }}
                      dateFormat="dd/mm/yy"
                      showIcon
                    />
                  </div>
                </CCol>
                <CCol>
                  <div className="p-field p-col">
                    <label htmlFor="">Start At</label>

                    <input
                      onChange={(e) => SetTime_Start(e.target.value)}
                      className="input input-time form-control"
                      type="time"
                    />
                  </div>
                </CCol>
              </CRow>
            </div>

            <br />

            <Button
              onClick={() => {
                message.success("Processing complete!");
                SaveEvent();
              }}
            >
              ADD EVENT
            </Button>
          </form>
        </CCardBody>
      </CCard>
    </CContainer>
  );
};

NewEvent.propTypes = {
  addEvent: PropTypes.func.isRequired,
};

export default connect(null, { addEvent })(NewEvent);
