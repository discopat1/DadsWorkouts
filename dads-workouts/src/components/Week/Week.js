import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DayList from '../Day/DayList';
import exerciseMeta from '../Data/Data';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


export default function WeekView() {
  const [week, setWeek] = React.useState('');
  const [renderWeek, setRenderWeek] = React.useState(true)

  const handleChange = (event) => {
    setWeek(event.target.value);
    setRenderWeek(true)
  };

  const renderWeekView = (value) => {
    if (value===1) {
        return (
            <WeekSet
                day1={exerciseMeta.week1.day1Exercises}
                day2={exerciseMeta.week1.day2Exercises}
                day3={exerciseMeta.week1.day3Exercises}
            />
        )
        } else if (value === 2) {
       return (
            <WeekSet
                day1={exerciseMeta.week2.day1Exercises}
                day2={exerciseMeta.week2.day2Exercises}
                day3={exerciseMeta.week2.day3Exercises}
            />
        )
       } else if (value === 3) {
       return (
            <WeekSet
            day1={exerciseMeta.week3.day1Exercises}
            day2={exerciseMeta.week3.day2Exercises}
            day3={exerciseMeta.week3.day3Exercises}
            />
        )
       } else if (value === 4) {
        return (
            <WeekSet
            day1={exerciseMeta.week4.day1Exercises}
            day2={exerciseMeta.week4.day2Exercises}
            day3={exerciseMeta.week4.day3Exercises}
            />
        )
        }
  }

  

  function WeekSet(props) {

    const {
        day1,
        day2,
        day3
    } = props

    const renderDayView = () => {
      setRenderWeek(false)
      return(
        <DayList
            exercises={day1}
        />
      )
    }

      return (
        <React.Fragment>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Button variant="contained"
                    // onClick={renderDayView}
                >Day view</Button>
                <DayList
                    exercises={day1}
                />
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" 
                    // onClick={renderDayView(day2)}
                    >Day view</Button>
                <DayList
                    exercises={day2}
                />
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" 
                    // onClick={renderDayView(day3)}
                    >Day view</Button>
                <DayList
                    exercises={day3}
                />
            </Grid>
        </Grid>
        </React.Fragment>
      )
  }
  console.log('render week:', renderWeek)
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Week</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={week}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
        </Select>
      </FormControl>
      {renderWeek ? renderWeekView(week) : null}
      {/* {renderWeekView(week)} */}
    </Box>
  );
}
