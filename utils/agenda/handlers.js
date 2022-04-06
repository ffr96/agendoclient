const DATA_STRING = 16;

export const buttonHandler = (type, ref, SetCurrentDate) => {
  switch(type) {
    case 'NEXT': 
      ref.next();
      break;
    case 'PREV': 
      ref.prev();
      break;
    case 'TODAY': 
      ref.today();
      break;
    default:  
      break;
  }

  SetCurrentDate(dateHandler(ref));
};

export const dateHandler = (ref) => {
  const date = ref.getDate()._date.toString().substring(0, DATA_STRING);
  let day, month;
  const year = date.substring(8, DATA_STRING);

  switch(date.substring(0,3)) {
    case 'Mon':
      day = 'Lunes';
      break;
    case 'Tue':
      day = 'Martes';
      break;
    case 'Wed':
      day = 'Miércoles';
      break;
    case 'Thu':
      day = 'Jueves';
      break;
    case 'Fri':
      day = 'Viernes';
      break;
    case 'Sat':
      day = 'Sábado';
      break;
    case 'Sun':
      day = 'Domingo';
      break;            
  }

  switch(date.substring(4,7)) {
    case 'Jan':
      month = 'Ene';
      break;
    case 'Apr':
      month = 'Abr';
      break;
    case 'Aug':
      month = 'Ago';
      break;
    case 'Dec':
      month = 'Dic';
      break;
    default: 
      month = date.substring(4,7);        
  }


  return `${day} ${month} ${year}`;
};