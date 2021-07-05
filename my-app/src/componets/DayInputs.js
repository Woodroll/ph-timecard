import React, {useEffect} from 'react';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import DateFns from 'date-fns';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import TimePicker from '@material-ui/lab/TimePicker';
import TextField from '@material-ui/core/TextField';

export default function DayInputs(props) {
    const {daysOBJ, setDays, abvList} = props

    console.log(daysOBJ);

    function hoursList(abv) {
        return [daysOBJ[`${abv}In`], daysOBJ[`${abv}Out`],
        daysOBJ[`${abv}In_2`], daysOBJ[`${abv}Out_2`],
        daysOBJ[`${abv}In_3`], daysOBJ[`${abv}Out_3`],
        daysOBJ[`${abv}In_4`], daysOBJ[`${abv}Out_4`],
        ]
    }

    function calcDayHours(abv) {
        let total = 0
        if (daysOBJ[`${abv}In`] !==undefined && daysOBJ[`${abv}Out`] !== undefined) {
            console.log("It was all true!")
            total = daysOBJ[`${abv}Out`] - daysOBJ[`${abv}In`]
        }
        const hours = Math.floor(total / 3600) % 24;
        console.log(hours);
    }

    useEffect(() => {calcDayHours("MON")}, [hoursList("MON")]);

    function handleChange(e, i) {
        e.persist();
        console.log("error:", e.target);
        setDays(prevDays => ({...prevDays, [e.target.name]: e.target.value }));
    }


    function getTimeInput(abv, end){
        return(<div>
            <Select
                variant="outlined"
                fullWidth
                id={`${abv}Type Reg Vac Sick Pers Hol${end}`}
                label="Type"
                name={`${abv}Type Reg Vac Sick Pers Hol${end}`}
                value={daysOBJ[`${abv}Type Reg Vac Sick Pers Hol${end}`]}
                onChange={handleChange}
            >
                <MenuItem value={"Reg"}>Reg</MenuItem>
                <MenuItem value={"Vac"}>Vac</MenuItem>
                <MenuItem value={"Sick"}>Sick</MenuItem>
                <MenuItem value={"Pers"}>Pers</MenuItem>
                <MenuItem value={"Hol"}>Hol</MenuItem>
            </Select>

            <TextField
                label="In"
                type="time"
                name={`${abv}In${end}`}
                value={daysOBJ[`${abv}In${end}`]}
                onChange={handleChange}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 1500, // 15 min
                }}
                sx={{ width: 150 }}
            />

            <TimePicker
                label="Out"
                value={daysOBJ[`${abv}Out${end}`]}
                onChange={(newValue) => {
                console.log(newValue)    
                setDays(prevDays => ({...prevDays, [`${abv}Out${end}`]: newValue.toLocaleTimeString('en-US')}));
            }}
            renderInput={(params) => <TextField {...params} />}
            />

        </div>            
        )
    }


    return (<div><LocalizationProvider dateAdapter={AdapterDateFns}>
            {abvList.map((abv, i) => {
                return(<Grid>
                    <p>{abv}-{daysOBJ[`${abv}Date_es_:date`]}</p>
                    {getTimeInput(abv, "")}
                    {getTimeInput(abv, "_2")}
                    {getTimeInput(abv, "_3")}
                    {getTimeInput(abv, "_4")}
                </Grid>)
            })}  
            </LocalizationProvider></div>)
}
