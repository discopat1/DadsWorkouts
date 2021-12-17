import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DayList from '../Day/DayList';
import exerciseMeta from '../Data/Data';
import Grid from '@mui/material/Grid';


export default function WeekView() {
  const [week, setWeek] = React.useState('');

  const handleChange = (event) => {
    setWeek(event.target.value);
  };

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
      {week === 1 && (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <DayList
                    exercises={exerciseMeta.week1.day1Exercises}
                />
            </Grid>
            <Grid item xs={4}>
                <DayList
                    exercises={exerciseMeta.week1.day2Exercises}
                />
            </Grid>
            <Grid item xs={4}>
                <DayList
                    exercises={exerciseMeta.week1.day3Exercises}
                />
            </Grid>
        </Grid>
      )}
      {week === 2 && (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <DayList
                    exercises={exerciseMeta.week2.day1Exercises}
                />
            </Grid>
            <Grid item xs={4}>
                <DayList
                    exercises={exerciseMeta.week2.day2Exercises}
                />
            </Grid>
            <Grid item xs={4}>
                <DayList
                    exercises={exerciseMeta.week2.day3Exercises}
                />
            </Grid>
        </Grid>
      )}
      {week === 3 && (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <DayList
                    exercises={exerciseMeta.week3.day1Exercises}
                />
            </Grid>
            <Grid item xs={4}>
                <DayList
                    exercises={exerciseMeta.week3.day2Exercises}
                />
            </Grid>
            <Grid item xs={4}>
                <DayList
                    exercises={exerciseMeta.week3.day3Exercises}
                />
            </Grid>
        </Grid>
      )}
    </Box>
  );
}
