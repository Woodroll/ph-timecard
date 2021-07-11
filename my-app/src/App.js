import formPDF from './fillable.pdf';
import React, {useState, useEffect} from 'react';
import './App.css';
import SavePDF from './componets/FillerButton';
import Form from './componets/Form';
import '@fontsource/roboto';
import Days from './classes/Days'
import { StyledEngineProvider } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import RestoreIcon from '@material-ui/icons/Restore';
import ArchiveIcon from '@material-ui/icons/Archive';


function App() {

  const abvList = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"]
  const [daysOBJ, setDays] = useState(new Days(abvList))
  
  const [timeCard, setTimeCard] = useState({
    "Name" : undefined,
    "Position": undefined,
    "Pay Week Ending": undefined,
  });
  
  useEffect(() => {
    // getPDF()
    const data = localStorage.getItem("my-time-card"); 
    if (data) {
      setTimeCard(JSON.parse(data))
    };
    
    const daysData = localStorage.getItem("my-days"); 
    if (daysData) {
        setDays(JSON.parse(daysData))
    };

    }, [])

  useEffect(() => {
    localStorage.setItem("my-time-card", JSON.stringify(timeCard))
    localStorage.setItem("my-days", JSON.stringify(daysOBJ))
  })

  return (
    <StyledEngineProvider injectFirst>
    <div className="App">
      <div className="App-header">
        <SavePDF 
          pdf={formPDF}
          timeCard={timeCard}
          daysOBJ={daysOBJ}
          />
        <Form
        timeCard = {timeCard}
        setTimeCard = {setTimeCard}
        daysOBJ={daysOBJ}
        setDays={setDays}
        abvList={abvList}
        />

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={1}>
          <BottomNavigation
                showLabels
                // value={value}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
            >
            <BottomNavigationAction label={daysOBJ["GRAND TOTALHOURS WORKED"]?`  TOTAL HOURS:${daysOBJ["GRAND TOTALHOURS WORKED"]}`:""} />
            <SavePDF 
              pdf={formPDF}
              timeCard={timeCard}
              daysOBJ={daysOBJ}
            />
            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          </BottomNavigation>
        </Paper>



      </div>  
    </div>
    </StyledEngineProvider>
  );
}

export default App;
