import { bodyref } from "../bodyref";

export const parseSchedules = (data) => {
  const date = [];
  data?.map(patient => {
    patient.meeting?.map(meeting => {
      date.push({
        calendarId: meeting.meetingType,
        category: "time",
        location: meeting.meetingLocation,
        isVisible: true,
        title: patient.name + " " + patient.surname,
        state: meeting.meetingLocation,
        id: meeting._id,
        body: bodyref(patient.dni, patient.surname),
        start: meeting.inDate,
        end: meeting.outDate,
        dni: patient.dni,
      });
    });
  });
  console.log(date);
  return date;
};

export const parseMeeting = (meeting) => {
  const newMeeting = {
    calendarId: meeting.meetingType,
    category: "time",
    location: meeting.meetingLocation,
    isVisible: true,
    state: meeting.meetingLocation,
    id: meeting._id,
    start: meeting.inDate,
    end: meeting.outDate,
  };

  return newMeeting;
};