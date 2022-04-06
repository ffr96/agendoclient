function _getTimeTemplate(schedule, isAllDay) {
  var html = [];

  if (!isAllDay) {
    html.push("<strong>" + _getFormattedTime(schedule.start) + "</strong> ");
  }
  if (schedule.isPrivate) {
    html.push('<span class="calendar-font-icon ic-lock-b"></span>');
    html.push(" Private");
  } else {
    if (schedule.isReadOnly) {
      html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
    } else if (schedule.recurrenceRule) {
      html.push('<span class="calendar-font-icon ic-repeat-b"></span>');
    } else if (schedule.attendees.length) {
      html.push('<span class="calendar-font-icon ic-user-b"></span>');
    } else if (schedule.location) {
      html.push('<span class="calendar-font-icon ic-location-b"></span>');
    }
    html.push(" " + schedule.title);
  }

  return html.join("");
}

function _getFormattedTime(time) {
  const date = new Date(time);
  const h = date.getHours();
  const m = date.getMinutes();

  return `${h}:${m}`;
}

export const templates = {
  time: function (schedule) {
    return _getTimeTemplate(schedule, false);
  },
  popupEdit: function() {
    return 'Editar';
  },
  popupDelete: function() {
    return 'Eliminar';
  },
  allday: function() {
    let html = [];
    return html.join('');
  },
  popupStateFree: function() {
    return 'Colon';
  },
  popupStateBusy: function() {
    return 'CDU';
  },
  titlePlaceholder: function() {
    return 'Paciente';
  },
  locationPlaceholder: function() {
    return 'Telefono';
  },
  startDatePlaceholder: function() {
    return 'Ingreso';
  },
  endDatePlaceholder: function() {
    return 'Egreso';
  },
  popupSave: function() {
    return 'Guardar';
  },
  popupUpdate: function() {
    return 'Actualizar';
  },
};