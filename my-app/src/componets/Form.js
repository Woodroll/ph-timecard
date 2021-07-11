import React from 'react';
import {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import DayInputs from './DayInputs.js';


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }



// const useStyles = createStyles((theme) => {return ({
//   paper: {
//     marginTop: theme.spacing(7),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// })});


const Form = (props) => {
    // const classes = useStyles();
    const {timeCard, setTimeCard, daysOBJ, setDays, abvList} = props

    function handleChange(e) {
        e.persist();
        setTimeCard(prevTC => ({...prevTC, [e.target.name]: e.target.value }));
        //console.log(timeCard);
    }

    function handleWeekChange(e) {
        e.persist();
        setTimeCard(prevTC => ({...prevTC, [e.target.name]: e.target.value }));
        abvList.forEach((abv, i)=>{
            const dateSunday = new Date(Date.parse(`${e.target.value}T00:00:00`));             
            const date = new Date(dateSunday.setDate(dateSunday.getDate() - (6 - i)))
            const formatedDate = `${date.getMonth()+1}/${date.getDate()}`
            console.log(`i:${i}, date:${date}, fd:${formatedDate}`)
           
            setDays(prevDays => ({...prevDays, [`${abv}Date_es_:date`]  : formatedDate})) 
    })
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
    <Container component="main">
      <CssBaseline />
      <div className="classes.paper">
        <Typography component="h1" variant="h3">
          Time Card
        </Typography>
        <form className="classes.form" onSubmit={handleSubmit} onInput={handleChange} noValidate>

            <Grid container spacing={2}>
            
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                name="Name"
                value={timeCard? timeCard["Name"]:""}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Position"
                label="Position"
                name="Position"
                value={timeCard? timeCard["Position"]:""}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                //TODO: Sundays only???
                type="date"
                variant="outlined"
                required
                fullWidth
                name="Pay Week Ending"
                label="Pay Week Ending"
                id="PayWeekEnding"
                onChange = {handleWeekChange}
                value={timeCard? timeCard["Pay Week Ending"]:""}
                
                InputLabelProps={{
                    shrink: true,
                }}
              />
            </Grid>

            

            <DayInputs 
                daysOBJ={daysOBJ}
                setDays={setDays}
                abvList={abvList}/>

            </Grid> 
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="classes.submit"
            // onClick={e => console.log(e)}
          >
            Time Card
          </Button>

          


          <Grid container justify="flex-end">
            {/* <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
      {/* <Box mt={5}>
      </Box> */}
    </Container>
    )
}


export default Form
