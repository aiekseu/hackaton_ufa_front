import React, {useState} from 'react'
import { Calendar, Views, momentLocalizer} from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";
import { changeEvent, changeChosenEvent} from './redux/EventSlice';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'
import { handleDelete } from './redux/ChipSlice';


const localizer = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(Calendar)

const MyCalendarConst = () => {
    const roomFilter = useSelector((state) => (state.roomFilter.room));
    const redEvents = useSelector((state) => (state.eventReducer.events));
    const personFilter = useSelector((state) => (state.personFilter.person));

    const dispatch = useDispatch();

    const handleChangeEvents = (newEvents) => {
        dispatch(changeEvent({events: newEvents}))
    }
 
      const [state, setState] = useState({
        displayDragItemInCell: true,
      })

  

  const handleDragStart = event => {
    setState({ draggedEvent: event })
  }

  const dragFromOutsideItem = () => {
    return state.draggedEvent
  }

  const onDropFromOutside = ({ start, end, allDay }) => {
    const { draggedEvent } = state

    const event = {
      id: draggedEvent.id,
      title: draggedEvent.title,
      start,
      end,
      allDay: allDay,
    }

    setState({ draggedEvent: null })
    moveEvent({ event, start, end })
  }

  const moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    //const { events } = state 0000000000000000000000000000000000000000000000000000000000000000000 Раскомментировать если нужно
    const events = redEvents

    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end, allDay }
        : existingEvent
    })

    handleChangeEvents(nextEvents);

  }

  const resizeEvent = ({ event, start, end }) => {
    //const { events } = state 0000000000000000000000000000000000000000000000000000000000000 Разкомментировать если нужно
    const events = redEvents

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    handleChangeEvents(nextEvents);
  }

  const handleChooseEvent = (newEvent) => {
    console.log("received obj");
    console.log(newEvent);
    var arr = redEvents.filter(event => isbetweenDates(event, newEvent.start) )
    if( arr.length == 0) {
      dispatch(changeChosenEvent({freeEvent: newEvent}))
    } else{
      console.log("занято")
    }
    
  }

  const newEvent = (_event) => {}

    const isbetweenDates = (event, dt) => {
      return (event.end.getDate() >= dt.getDate()) && (event.start.getDate() <= dt.getDate()) && (event.end.getMonth() >= dt.getMonth()) && (event.start.getMonth() <= dt.getMonth())  || (event.end >= dt && event.start <= dt)

    }
 
    const filterEvents = () => {
      var freeDays = [];
        //const returnedEvents = roomFilter == 0? redEvents : redEvents.filter(event => event.room === roomFilter)
//        const personFiltered = personFilter == ""?  returnedEvents: returnedEvents.filter(event => event.participants.includes(personFilter))
      
        for(var dt = new Date(); dt <= new Date(2021, 4, 30); dt.setDate(dt.getDate()+1)) {
          var arr = redEvents.filter(event => isbetweenDates(event, dt) )
          if( arr.length == 0) {
            freeDays.push({
              id: dt.getDate(),
              allDay: true,
              start:new Date(dt),
              end: new Date(dt),
              title: "Свободно",
              room: 0});
        }}
        return freeDays.concat(redEvents);
   
    }

    return (
      <DragAndDropCalendar
        selectable
        defaultDate={new Date()}
        localizer={localizer}
        events={filterEvents()}
        onEventDrop={moveEvent}
        resizable
        onEventResize={resizeEvent}
        onSelectSlot={newEvent}
        onDragStart={ e => {
          console.log("Clicked!")
          //console.log(e.target.event.event)
          handleChooseEvent(e.event)}}
        defaultView={Views.MONTH}
        popup={true}
        dragFromOutsideItem={
          state.displayDragItemInCell ? dragFromOutsideItem : null
        }
        onDropFromOutside={onDropFromOutside}
        handleDragStart={handleDragStart}
        style={{ height: "100vh" }}
        onClick={(e) => {
                          console.log("onClick")
                          //console.log(e.target.event.event)
                          handleChooseEvent(e.target.event)}}
        eventPropGetter={(event) => { const backgroundColor = event.room === 0 ? "#86C86F" : event.color; return { style: { backgroundColor } }; }}
      />
    )
    }

export default MyCalendarConst
