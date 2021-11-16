import React from "react";
import { CRow, CCard, CCardBody, CContainer, CCol } from "@coreui/react";
import { Button } from "primereact/button";

import Lottie from "react-lottie-player";
import event from "../../../assets/animation/event.json";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <CContainer lg>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm={10}>
              <Lottie
                loop
                animationData={event}
                play
                style={{ width: 200, height: 200 }}
              />
              <h4>Events</h4>
              <p>
                Here are all the employees at your company,including terminated
                ones.
              </p>
              <hr
                style={{
                  color: "danger",
                  backgroundColor: "primary",
                  height: 5,
                }}
              />
            </CCol>
            <CCol sm={2}>
              <Link to="/event/newEvent">
                <Button
                  label="New Event"
                  icon="pi pi-plus"
                  iconPos="left"
                ></Button>
              </Link>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CContainer>
  );
};

export default Events;
