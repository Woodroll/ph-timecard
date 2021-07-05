import React from 'react';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

export default function DayInputs(props) {
    const {Days} = props

    if (props.Days) {return (<Grid>
            <Grid><h3>Monday</h3></Grid>
              <Grid> 
                <Select
                    variant="outlined"
                    fullWidth
                    id="MONType Reg Vac Sick Pers Hol"
                    label="Type"
                    name="MONType Reg Vac Sick Pers Hol"
                    value="Reg"
                    // onChange={handleChange}
                >
                    <MenuItem value={"Reg"}>Reg</MenuItem>
                    <MenuItem value={"Vac"}>Vac</MenuItem>
                    <MenuItem value={"Sick"}>Sick</MenuItem>
                    <MenuItem value={"Pers"}>Pers</MenuItem>
                    <MenuItem value={"Hol"}>Hol</MenuItem>
                </Select>
              </Grid>
            </Grid>)
    } else { return (<div></div>)}
}
