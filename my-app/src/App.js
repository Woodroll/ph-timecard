import logo from './logo.svg';
import formPDF from './fillable.pdf';
import React, {useState, useEffect} from 'react';
import './App.css';
import SavePDF from './componets/FillerButton';
import Form from './componets/Form';
import '@fontsource/roboto';
import { PDFDocument } from 'pdf-lib';
import Day from './classes/Day'
import Days from './classes/Days'

function App() {
  const [updatedPDF, setUpdatedPDF] = useState(0);

  const [form, setForm] = useState();
  // const [timeCard, setTimeCard] = useState();
  
  // async function getPDF () {
  //   const url = formPDF;
  //   const formPdfBytes = await fetch(url, {headers:{"Content-Type":"application/pdf"}})
  //     .then(res => {return (res.arrayBuffer())});
      
  //   const pdfDoc = await PDFDocument.load(formPdfBytes);
  //   const pdfForm = await pdfDoc.getForm()
  //   setForm(pdfForm)
  //   console.log(pdfForm)
  //   const feildNames = await pdfForm.getFields().map(f => f.getName());
  //   setTimeCard(prevTC => {feildNames.forEach(name => ({...prevTC, [name] : undefined}))});
  //   console.log(timeCard)
  //   } 


  const [monday, setMon] = useState(new Day("MON"));
  const [tuesday, setTue] = useState(new Day("TUE"));
  const [wednesday, setWed] = useState(new Day("WED"));
  const [thursday, setThur] = useState(new Day("THUR"));
  const [friday, setFri] = useState(new Day("FRI"));
  const [saturday, setSat] = useState(new Day("SAT"));
  const [sunday, setSun] = useState(new Day("SUN"));

  const abvList = ["MON", "TUES", "WED", "THUR", "FRI", "SAT", "SUN"]
  const [daysOBJ, setDays] = useState(new Days(abvList))
  
  const [timeCard, setTimeCard] = useState({
    "Name" : undefined,
    "Position": undefined,
    "Pay Week Ending": undefined,
  });

  const setters = [setMon, setTue, setWed, setThur, setFri, setSat, setSun]
  const days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]

  // const setDays = (Sunday) =>  {
  //   const dateSunday = new Date(Date.parse('${Sunday}T00:00:00'))
  //   for (let index = 7; index > 0; index = index - 1){

  //   }}
  const myDay = new Day("SUN","2021-07-04")
  myDay.num2 = 10
  console.log(`num 2:${myDay["num2"]}, Hours worked: ${myDay.calcHours()}`)
  const myDate = new Date(Date.parse("2021-07-04T00:00:00"))
  myDate.setDate(myDate.getDate() - 6)
  const sDate = myDate.toLocaleString('en-us', {  weekday: 'short' }).toUpperCase()
  console.log(timeCard.Days?"True":"Fal")
  
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SavePDF 
          pdf={formPDF}
          updatedPDF={updatedPDF}
          setUpdatedPDF={setUpdatedPDF}
          timeCard={timeCard}
          />
        <Form
        timeCard = {timeCard}
        setTimeCard = {setTimeCard}
        setters={setters}
        days={days}
        daysOBJ={daysOBJ}
        setDays={setDays}
        abvList={abvList}
        />
      </header>  
    </div>
  );
}

export default App;
