import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Stack from '@mui/material/Stack';
import FullScreenDialog from './VideoDialog';

const exercises = [
    {
        name: 'Goblet Squats',
        sets: 5,
        reps: 5,
        video: "https://www.youtube.com/embed/HB8QewGsIX4",
        equipment: 'dumbell'
    },
    {
        name: 'Band resisted Pushups',
        sets: 5,
        reps: 5,
        video: "https://www.youtube.com/embed/cOFwFzzLFWw",
        equipment: 'resistance band'
    },
    {
        name: 'One Arm row',
        sets: 4,
        reps: '10-12',
        video: "https://www.youtube.com/embed/edLIRbblDFg",
        equipment: 'dumbell'
    }
]



export default function DayOneList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 530, bgcolor: '#fff' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {exercises.map(i=> (
              <ListItem>
                  <Stack direction="row" spacing={2} alignItems="center">
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
