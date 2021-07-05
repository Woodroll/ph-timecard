import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import DayInputs from './DayInputs.js'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Form = (props) => {
    const classes = useStyles();
    const {timeCard, setTimeCard, setters, monday} = props

    function handleChange(e) {
        e.persist();
        setTimeCard(prevTC => ({...prevTC, [e.target.name]: e.target.value }));
        //console.log(timeCard);
    }

    function handleWeekChange(e) {
        e.persist();
        setTimeCard(prevTC => ({...prevTC, [e.target.name]: e.target.value }));
        setters.forEach((setter, i)=>{
            const dateSunday = new Date(Date.parse(`${e.target.value}T00:00:00`));             
            const date = new Date(dateSunday.setDate(dateSunday.getDate() - (6 - i)))
            const formatedDate = `${date.getMonth()}/${date.getDate()}`
            console.log(`i:${i}, date:${date}, fd:${formatedDate}`)
           
            setter(prevDay => ({...prevDay, [`${prevDay.abv}Date_es_:date`]  : formatedDate})) 
            console.log({...timeCard})
            console.log(monday)
    })
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} onInput={handleChange} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12}>
              <TextField
                type="date"
                // defaultValue="2017-05-24"
                variant="outlined"
                required
                fullWidth
                name="Pay Week Ending"
                label="Pay Week Ending"
                id="PayWeekEnding"
                onChange = {handleWeekChange}
                value={timeCard? timeCard["Pay Week Ending"]:""}
                sx={{ width: 220 }}
                InputLabelProps={{
                    shrink: true,
                }}
              />
            </Grid>
            <DayInputs Days={timeCard.Days}/>
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
            className={classes.submit}
            // onClick={e => console.log(e)}
          >
            Sign Up
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
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    )
}


export default Form
