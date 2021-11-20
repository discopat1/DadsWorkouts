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

export default function DayList(props) {
    const {
        exercises
    } = props
  return (
    <Box sx={{ width: '100%', maxWidth: 530, bgcolor: '#fff' }}>
      <nav aria-label="main mailbox folders">
        <List>
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