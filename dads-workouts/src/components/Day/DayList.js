import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import FullScreenDialog from './VideoDialog';

export default function DayList(props) {
    const {
        exercises
    } = props
    // need resuable function for super sets
    const warmup = [
      {
        name: 'Warm up education reference',
        sets: 0,
        reps: '0',
        video: "https://www.youtube.com/embed/E81GN-3A8XM?si=mAINxekJaCjmRQFm",
        equipment: 'Miscellaneous'
      },
      {
        name: 'Full body follow along Option 1',
        sets: 1,
        reps: 'Follow video',
        video: "https://www.youtube.com/embed/dBYjU7iBpck?si=VvIjM_TdBMUFuSZI",
        equipment: 'Miscellaneous'
      },
      {
        name: 'Full body follow along Option 2',
        sets: 1,
        reps: 'Follow video',
        video: "https://www.youtube.com/embed/HhHsLvIO6t4?si=tzo2cuYDQHpHoFJb",
        equipment: 'None'
      },
      {
        name: 'Full body follow along Option 3',
        sets: 1,
        reps: 'Follow video',
        video: "https://www.youtube.com/embed/1e528F0pYPg?si=6A-2I_PIpJOYBTMO",
        equipment: 'None'
      },
      {
        name: 'Lock 5 Stability',
        sets: 1,
        reps: 'Follow video',
        video: "https://www.youtube.com/embed/JYBSXAlFhwE?si=hXdjOF33uxrgyvBH",
        equipment: 'None'
      },
      {
        name: 'Lock Shoulder Big 3',
        sets: 1,
        reps: 'Follow video',
        video: "https://www.youtube.com/embed/oOGZlSlugNE?si=OTvwCmuQyW6TF7Fv",
        equipment: 'None or light dumbells'
      }
    ]
  return (
    <Box sx={{ width: '100%', maxWidth: 530, bgcolor: '#fff' }}>
      <nav aria-label="main mailbox folders">
        <List>
        <Typography variant='h5' color='primary'>Warmup Sets</Typography>
        {warmup.map(i=> (
              <ListItem>
                  <Stack direction="row" spacing={2} alignItems="center" justifyContent='space-between'>
                  <ListItemText primary={i.name}  secondary={i.equipment}/>
                  <ListItemText primary={i.sets} secondary={Object.keys(i)[1]}/>
                  <ListItemText primary='X' />
                  <ListItemText primary={i.reps} secondary={Object.keys(i)[2]}/>
                  <FullScreenDialog 
                  exercise={i.name}
                  link={i.video}
                  />
                  </Stack>
              </ListItem>
          ))}
          <Typography variant='h5' color='primary'>Work Sets</Typography>
          {exercises.map(i=> (
              <ListItem>
                  <Stack direction="row" spacing={2} alignItems="center" justifyContent='space-between'>
                  <ListItemText primary={i.name}  secondary={i.equipment}/>
                  <ListItemText primary={i.sets} secondary={Object.keys(i)[1]}/>
                  <ListItemText primary='X' />
                  <ListItemText primary={i.reps} secondary={Object.keys(i)[2]}/>
                  <FullScreenDialog 
                  exercise={i.name}
                  link={i.video}
                  />
                  </Stack>
              </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}