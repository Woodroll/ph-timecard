import formPDF from './fillable.pdf';
import React, {useState, useEffect} from 'react';
import './App.css';
import SavePDF from './componets/FillerButton';
import Save from './componets/Save';
import Form from './componets/Form';
import '@fontsource/roboto';
import Days from './classes/Days'

import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArchiveIcon from '@material-ui/icons/Archive';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';


function App() {
  const [updatedPDF, setUpdatedPDF] = useState(0);

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
    <div className="App">
      <body className="App-header">
        <SavePDF 
          pdf={formPDF}
          updatedPDF={updatedPDF}
          setUpdatedPDF={setUpdatedPDF}
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

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={10000}>
          <BottomNavigation
                showLabels
                // value={value}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
            >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <SavePDF 
              pdf={formPDF}
              updatedPDF={updatedPDF}
              setUpdatedPDF={setUpdatedPDF}
              timeCard={timeCard}
              daysOBJ={daysOBJ}
            />
            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          </BottomNavigation>
        </Paper>



      </body>  
    </div>
  );
}

export default App;
