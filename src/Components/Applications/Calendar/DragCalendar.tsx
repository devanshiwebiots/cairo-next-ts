import { CalenderInitialData } from "@/Data/Calendar";
import React, { Fragment, useEffect, useState } from "react";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import CalendarEvents from "./CalendarEvents";
import { Col } from "reactstrap";
import  FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { calenderEventClick } from "./CalenderFunction";

const DragCalendar = () => {
  const state = useState(CalenderInitialData)[0];

  useEffect(() => {
    let draggableEl = document.getElementById("external-events") as HTMLElement;
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: eventEl => {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
        };
      },
    });
  }, []);
  return (
    <Fragment>
        <CalendarEvents />
        <Col xl='9' md='8' className="box-col-12">
            <div className="demo-app-calendar" id='mycalendartest'>
                <FullCalendar initialView="dayGridMonth"
                headerToolbar = {{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                rerenderDelay= {10}
                eventDurationEditable = {false}
                editable = {true}
                droppable={true}
                plugins ={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                events={state.calendarEvents}
                eventClick={calenderEventClick}
                />
            </div>
        </Col>
    </Fragment>
  )
};

export default DragCalendar;
