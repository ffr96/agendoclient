import { parseMeeting } from "./parseSchedules";
import { url } from "../url";
import { bodyref } from "../bodyref";

export const createSchedule = (async (scheduleData, token, callAlert) => {

  const patientName = scheduleData.title.split(' ');
  if (patientName.length <= 1) {
    callAlert('Nombre y apellido requerido', 'WARNING', 5000);
    return null;
  }
  let name = patientName.shift();
  let surname = patientName.join(' ');
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    },
    body: JSON.stringify({
      name: name,
      surname: surname,
      dni: scheduleData.dni,
      inDate: String(scheduleData.start._date),
      outDate: String(scheduleData.end._date),
      location: scheduleData.state.toLowerCase(),
      type: scheduleData.calendarId,
      notes: 'aa'
    })
  };

  const res = await fetch(`${url}/${scheduleData.dni}`, options);

  if (res.ok) {
    const sch = await res.json();

    const schedule = {
      id: sch.meeting._id,
      calendarId: sch.meeting.meetingType,
      title: `${sch.name} ${sch.surname}`,
      start: sch.meeting.inDate,
      end: sch.meeting.outDate,
      category: "time",
      location: sch.meeting.meetingLocation,
      state: sch.meeting.meetingLocation,
      body: bodyref(sch.dni, sch.surname),
      dni: sch.dni,
      raw: sch.notes,
    };
    callAlert('Consulta agregada!', 'SUCCESS');
    return schedule;
  } else {
    callAlert('Error al crear consulta', 'ERROR');
    return null;
  }

});

export const deleteSchedule = async(dni, id, token, callAlert) => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`
      },
    };

    const res = await fetch(`${url}/${dni}/${id}`, options);
    if (res.ok) {
      callAlert('Consulta eliminada!', 'SUCCESS');
      return true;
    } else {
      callAlert('Error elimando consulta', 'ERROR');
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const updateSchedule = async (scheduleOld, changes, token, callAlert) => {
  if (changes.title || changes.dni) {
    callAlert('No se puede cambiar nombre ni dni', 'WARNING', 5000);
    return null;
  }
  const schedule = { ...scheduleOld, ...changes };
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    },
    body: JSON.stringify({
      name: schedule.title.split(' ')[0],
      surname: schedule.title.split(' ')[1],
      dni: schedule.dni,
      inDate: String(schedule.start._date),
      outDate: String(schedule.end._date),
      location: schedule.state.toLowerCase(),
      type: schedule.calendarId,
      notes: 'aa'
    })
  };

  const res = await fetch(`${url}/${schedule.dni}/${schedule.id}`, options);
  if (res.ok) {
    const schedule = await res.json();
    console.log(schedule);
    callAlert('Consulta actualizada!', 'SUCCESS');
    return parseMeeting(schedule.meeting);
  } else {
    callAlert('Error al actualizar consulta', 'ERROR');
  }
};