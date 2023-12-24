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

function createArray(numberOfWeeks) {
  var arr = new Array(numberOfWeeks);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
  }
  return arr;
}

const weeksArray = createArray(12)

export default function WeekView() {
  const [week, setWeek] = React.useState('');
  const [renderWeek, setRenderWeek] = React.useState(true)

  const handleChange = (event) => {
    setWeek(event.target.value);
    setRenderWeek(true)
  };

  const renderWeekView = (value) => {
    if (value) {
      return (
        <WeekSet
          day1 = {exerciseMeta[`week${value}`].day1Exercises}
          day2 = {exerciseMeta[`week${value}`].day2Exercises}
          day3 = {exerciseMeta[`week${value}`].day3Exercises}
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
                {/* <Button variant="contained"
                    // onClick={renderDayView}
                >Day view</Button> */}
                <DayList
                    exercises={day1}
                />
            </Grid>
            <Grid item xs={4}>
                {/* <Button variant="contained" 
                    // onClick={renderDayView(day2)}
                    >Day view</Button> */}
                <DayList
                    exercises={day2}
                />
            </Grid>
            <Grid item xs={4}>
                {/* <Button variant="contained" 
                    // onClick={renderDayView(day3)}
                    >Day view</Button> */}
                <DayList
                    exercises={day3}
                />
            </Grid>
        </Grid>
        </React.Fragment>
      )
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Week</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={week}
          label="Week"
          onChange={handleChange}
        >
          {
            weeksArray.map(week => (
              <MenuItem value={week}>{week}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      {renderWeek ? renderWeekView(week) : null}
      {/* {renderWeekView(week)} */}
    </Box>
  );
}
