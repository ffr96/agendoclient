import { Box } from "./basics/Box";
import { Separator } from "./separator";
import { Button } from "./basics/Button";
import { Dropdown } from "./dropdown";
import { Text } from "./basics/Text";
import { buttonHandler } from "../utils/agenda/handlers";

const CalendarTopBar = ({cal, SetViewType, SetCurrentDate, currentDate}) => {
  return (
    <Box css={{flexDirection: 'column'}}>
      <Button onClick={() => buttonHandler('TODAY', cal.current.calendarInst, SetCurrentDate)}> Hoy </Button>
      <Separator data-orientation='horizontal'/>
      <Box style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
        <Button onClick={() => buttonHandler('PREV', cal.current.calendarInst, SetCurrentDate)}> Atras </Button>
        <Dropdown title={'Tipo de Vista'} content={
          <Box css={{flexDirection:'column'}}>
            <Button onClick={() => SetViewType('week')}>Semana</Button>
            <Button onClick={() => SetViewType('month')}>Mes</Button>
            <Button onClick={() => SetViewType('day')}>Dia</Button>            
          </Box> 
        }/>
        <Button onClick={() => buttonHandler('NEXT', cal.current.calendarInst, SetCurrentDate)}> Avanzar </Button>
      </Box>
        <Text css={{textAlign: 'center', fontStyle: 'italic', color: '$green'}}>Fecha: {currentDate}</Text>
  </Box>
  );
};

export default CalendarTopBar;