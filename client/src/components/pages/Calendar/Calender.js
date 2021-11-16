/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/ar-TN";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calender.scss";
import axios from "axios";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function Calender() {
  const [locales, setlocales] = useState([]);
  const [localizer, setlocalizer] = useState([]);
  const [events, setevents] = useState([]);
  const [Display, setDisplay] = useState(false);

  const GetEvent = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/events`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetEvent();
    setlocales({
      "en-US": enUS,
    });
  }, []);

  useEffect(() => {
    const localizer_arr = dateFnsLocalizer({
      format,
      parse,
      startOfWeek,
      getDay,
      locales,
    });
    setlocalizer(localizer_arr);
  }, [locales]);

  useEffect(() => {
    setevents([]);
  }, [localizer]);

  useEffect(() => {
    setDisplay(true);
  }, [events]);

  const eventStyleGetter = (event, start, end, isSelected) => {
    var color = "";
    switch (event.etat) {
      case "completed":
        color = "#00a383";
        break;
      case "pendeing":
        color = "#f53c56";
        break;

      case "on schedule":
        color = "#7764e4";
        break;

      default:
        break;
    }

    var style = {
      backgroundColor: color,
      color: "white",
      border: 1,
      fontSize: 15,
      fontWeight: "600",
    };
    return {
      style,
    };
  };

  return (
    <div className="container-perso">
      <div style={{ position: "relative" }}>
        {Display && (
          <Calendar
            eventPropGetter={eventStyleGetter}
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ minHeight: 750 }}
            onSelectEvent={(e) => showEvent(e)}
          />
        )}
      </div>
    </div>
  );
}

export default Calender;
