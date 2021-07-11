import React from 'react';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Stack from '@material-ui/core/Stack';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export default function DayInputs(props) {
    const {daysOBJ, setDays, abvList} = props

    console.log(daysOBJ);

    function DayColHead(props) {
        const {abv, daysOBJ} = props
        return (<>
            <Typography variant="body2" color="textSecondary" align="center">
                {abv}
                {" - "}
                {daysOBJ[`${abv}Date_es_:date`]}
            </Typography>
            <Typography>
                {daysOBJ[`${abv}HOURS WORKED`]? daysOBJ[`${abv}HOURS WORKED`]+" hrs.":" -- "}
            </Typography>
            </>
        );
    }


    function parseTime(time){
        console.log((Math.round(time.slice(3,5)/15))*25*.01)
        return Number(time.slice(0,2)) + (Math.round(time.slice(3,5)/15))*25*.01
    }

    function calWeekHours() {
        let total = 0
        abvList.forEach(abv => {if(daysOBJ[`${abv}HOURS WORKED`]) {total += Number(daysOBJ[`${abv}HOURS WORKED`])}});
        console.log("week total:", total)
        setDays(prevDays => ({...prevDays, ["GRAND TOTALHOURS WORKED"]: total.toString() }));
    }

    // const totals = [daysOBJ["MONHOURS WORKED"], daysOBJ["TUEHOURS WORKED"],daysOBJ["WEDHOURS WORKED"],
    // daysOBJ["THURHOURS WORKED"], daysOBJ["FRIHOURS WORKED"], daysOBJ["SATHOURS WORKED"], daysOBJ["SUNHOURS WORKED"],]

    function calcDayHours(abv) {
        console.log("Calc Ran!!!", abv)
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
        setDays(prevDays => ({...prevDays, [`${abv}HOURS WORKED`]: total.toString() }));
        console.log("total:", total);
        calWeekHours()
    }

    function handleChange(e) {
        //e.persist();
        setDays(prevDays => ({...prevDays, [e.target.name]: e.target.value }));
    }

    function getTimeInput(abv, end, key){
        return(<Grid item container mt={3} name={abv} key={key} id={abv} onClick={e => {calcDayHours(abv); calWeekHours();}} onBlur={e => {calcDayHours(abv); calWeekHours();}}>
            <Stack spacing={1}>
            <Select
                input={`${abv}Type Reg Vac Sick Pers Hol${end}`}
                variant="outlined"
                fullWidth
                id={`${abv}Type Reg Vac Sick Pers Hol${end}`}
                label={<InputLabel>Type</InputLabel>}
                id={`${abv}Type Reg Vac Sick Pers Hol${end}`}
                name={`${abv}Type Reg Vac Sick Pers Hol${end}`}
                value={daysOBJ[`${abv}Type Reg Vac Sick Pers Hol${end}`]}
                onChange={e => {handleChange(e)}}
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
                fullWidth
                name={`${abv}In${end}`}
                value={daysOBJ[`${abv}In${end}`]}
                onChange={handleChange}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 1500, // 15 min
                }}
                // sx={{ width: 150 }}
            />
            
            <TextField
                label="Out"
                type="time"
                fullWidth
                name={`${abv}Out${end}`}
                value={daysOBJ[`${abv}Out${end}`]}
                onChange={e => {handleChange(e)}}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 1500, // 15 min
                }}
                // sx={{ width: 150 }}
            />
   
        </Stack>    
        </Grid>            
        )
    }


    return (<Grid item xs={12} container alignItems="center">
            {abvList.map((abv, i) => {
                return(<Grid item sm={12/7} key={i} container spacing={0}>
                    <Grid item><DayColHead abv={abv} daysOBJ={daysOBJ}/></Grid>
                    {getTimeInput(abv, "", 1)}
                    {getTimeInput(abv, "_2", 2)}
                    {getTimeInput(abv, "_3", 3)}
                </Grid>)
            })}  
            </Grid>)
}
