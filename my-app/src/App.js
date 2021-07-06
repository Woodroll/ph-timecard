import formPDF from './fillable.pdf';
import React, {useState, useEffect} from 'react';
import './App.css';
import SavePDF from './componets/FillerButton';
import Form from './componets/Form';
import '@fontsource/roboto';
import Days from './classes/Days'

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
      <header className="App-header">
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
      </header>  
    </div>
  );
}

export default App;
