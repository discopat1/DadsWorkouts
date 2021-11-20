import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import exerciseMeta from '../Data/Data';
import DayList from './DayList';

export default function DayView() {
  const [day, setDay] = React.useState('');

  const handleChange = (event) => {
    setDay(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mt:8 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Day</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={day}
          label="Day"
          onChange={handleChange}
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
        </Select>
      </FormControl>
      {day === 1 && (
        <DayList
            exercises={exerciseMeta.day1Exercises}
        />
        )}
        {day === 2 && (
            <DayList
                exercises={exerciseMeta.day2Exercises}
            />
        )}
        {day === 3 && (
            <DayList
                exercises={exerciseMeta.day3Exercises}
            />
        )}
    </Box>
  );
}
