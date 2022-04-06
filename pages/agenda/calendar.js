import { useRef, useState, useCallback, useEffect } from "react";
import TUICalendar from "@toast-ui/react-calendar";
import { calendars } from "../../utils/agenda/calendars";
import { url } from '../../utils/url';

import { createSchedule, deleteSchedule, updateSchedule } from "../../utils/agenda/events";
import { parseSchedules } from "../../utils/agenda/parseSchedules";
import { templates } from "../../utils/agenda/templates";
import useAuthStorage from "../../lib/useAuthStorage";
import { dateHandler } from "../../utils/agenda/handlers";
import CalendarTopBar from "../../components/calendarTopBar";
import Alert from "../../components/alert";
import { useAlert } from "../../lib/useAlert";

/**
 * State and Location share the same value. Location
 * is not directly edited on calls and instead shares the same
 * value as State. For now this is ok, but
 * TO DO: change icon and name from 
 * :location: Location to :phone: Phone. 
 */

const Cal = () => {
  const [data, SetData] = useState([]);
  const [currentDate, SetCurrentDate] = useState(null);
  const [viewType, SetViewType] = useState('week');
  const {msg, msgtype, timer, callAlert} = useAlert();

  const storage = useAuthStorage();
  const user = storage.getAccessToken();
  const cal = useRef(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${user?.token}`
      }
    };

    const fetchAndSetDates = async() => {
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        const schedules = parseSchedules(data);
        SetData(schedules);
      } catch(e) {
        console.log('cant access dates');
        //callAlert('Error al obtener info. de consultas', 'ERROR', 5000);
      }

    };
    fetchAndSetDates();
    SetCurrentDate(dateHandler(cal.current.calendarInst));
  },[user?.token]);

  const onClickSchedule = useCallback((e) => {
    const { calendarId, id } = e.schedule;
    const el = cal.current.calendarInst.getElement(id, calendarId);

    console.log(e, el.getBoundingClientRect());
  }, []);

  const onBeforeCreateSchedule = useCallback(async(scheduleData) => {
    const schedule = await createSchedule(scheduleData, user?.token, callAlert);
    if (schedule != null) {
      cal.current.calendarInst.createSchedules([schedule]);
    }
  }, [user?.token, callAlert]);

  const onBeforeDeleteSchedule = useCallback(async(res) => {
    console.log(res);

    const { id, calendarId, dni } = res.schedule; 
    const deleted = await deleteSchedule(dni, id, user?.token, callAlert);
    if (deleted) {
      cal.current.calendarInst.deleteSchedule(id, calendarId);
    }
    
  }, [user?.token, callAlert]);

  const onBeforeUpdateSchedule = useCallback(async(e) => {
    console.log(e);

    let { schedule, changes } = e;
    
    const newMeeting = await updateSchedule(schedule, changes, user?.token, callAlert);
    changes = {...changes, id: newMeeting.id};
    
    if (newMeeting != null) {
      cal.current.calendarInst.updateSchedule(
      schedule.id,
      schedule.calendarId,
      changes
      );
    }
    

  }, [user?.token, callAlert]);
  
  return(
    <>
      <CalendarTopBar  
        cal={cal} 
        SetViewType={SetViewType} 
        SetCurrentDate={SetCurrentDate} 
        currentDate={currentDate}
      />
      {msg && <Alert message={msg} type={msgtype} timer={timer}/>}
      
      <TUICalendar
        ref={cal}
        taskView={false}
        scheduleView={['time']}
        calendars={calendars}
        useCreationPopup={true}
        useDetailPopup={true}
        view={viewType}
        template={templates}
        schedules={data}
        month={{
          daynames: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
        }}
        week={{
          daynames: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
          hourStart: 7,
          hourEnd: 23
        }}
        onClickSchedule={onClickSchedule}
        onBeforeCreateSchedule={onBeforeCreateSchedule}
        onBeforeDeleteSchedule={onBeforeDeleteSchedule}
        onBeforeUpdateSchedule={onBeforeUpdateSchedule}
      />
    </>
  );
};

export default Cal;