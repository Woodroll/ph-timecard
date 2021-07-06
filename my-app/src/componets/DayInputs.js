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

    function parseTime(time){
        return Number(time.slice(0,2)) + (Math.round(time.slice(3,5))/15)*25*.01
    }

    function calWeekHours() {
        let total = 0
        abvList.forEach(abv => {if(daysOBJ[`${abv}HOURS WORKED`]) {total += Number(daysOBJ[`${abv}HOURS WORKED`])}});
        console.log("week total:", total)
        setDays(prevDays => ({...prevDays, ["GRAND TOTALHOURS WORKED"]: total.toString() }));
    }


    function calcDayHours(abv) {
        let total = 0
        if (daysOBJ[`${abv}In`] && daysOBJ[`${abv}Out`]) {
            total = parseTime(daysOBJ[`${abv}Out`]) - parseTime(daysOBJ[`${abv}In`])
            if (daysOBJ[`${abv}In_2`] && daysOBJ[`${abv}Out_2`]) {
                total += parseTime(daysOBJ[`${abv}Out_2`]) - parseTime(daysOBJ[`${abv}In_2`])
                if (daysOBJ[`${abv}In_3`] && daysOBJ[`${abv}Out_3`]) {
                    total += parseTime(daysOBJ[`${abv}Out_3`]) - parseTime(daysOBJ[`${abv}In_3`])
                    if (daysOBJ[`${abv}In_4`] && daysOBJ[`${abv}Out_4`]) {
                        total += parseTime(daysOBJ[`${abv}Out_4`]) - parseTime(daysOBJ[`${abv}In_4`])
                    }
                }
            }        
        }
        console.log("total:", total);
        setDays(prevDays => ({...prevDays, [`${abv}HOURS WORKED`]: total.toString() }));
        calWeekHours()
    }

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
            
            <TextField
                label="Out"
                type="time"
                name={`${abv}Out${end}`}
                value={daysOBJ[`${abv}Out${end}`]}
                onChange={handleChange}
                onBlur={e => {calcDayHours(abv)}}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 1500, // 15 min
                }}
                sx={{ width: 150 }}
            />
        </div>            
        )
    }


    return (<div>
            {abvList.map((abv, i) => {
                return(<Grid>
                    <p>{abv} - {daysOBJ[`${abv}Date_es_:date`]}{daysOBJ[`${abv}HOURS WORKED`]? " - " + daysOBJ[`${abv}HOURS WORKED`]+" hrs.":""}</p>
                    {getTimeInput(abv, "")}
                    {getTimeInput(abv, "_2")}
                    {getTimeInput(abv, "_3")}
                    {getTimeInput(abv, "_4")}
                </Grid>)
            })}  
            </div>)
}
