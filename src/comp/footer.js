import * as React from 'react';

import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstaIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  const [color] = React.useState('primary');
  return (
    <Sheet
      variant="plain"
      color={color}
      invertedColors
      sx={{
        ...(color !== 'neutral' && {
          bgcolor: `${color}.100`,
        }),
        flexGrow: 1,
        p: 1,
        borderRadius: { xs: 0, sm: 'sm' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <IconButton variant="plain">
            <FacebookRoundedIcon sx={{ color: '#999999' }} />
        </IconButton>
        <IconButton variant="plain">
            <GitHubIcon sx={{ color: '#999999' }} />
        </IconButton>
        <IconButton variant="plain">
            <InstaIcon sx={{ color: '#999999' }} />
        </IconButton>
        </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 5,
        }}
      >
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '24px', '--ListItem-gap': '0px' }}
        >
           <ListItem nested sx={{ width: { xs: '100%', md: 140 } }}>
            <ListSubheader sx={{ fontWeight: 'x1', fontSize: '20px', color: '#333333' }}>Sitemap</ListSubheader>
              <ListItem>
                <ListItemButton sx={{ fontSize: '18px', color: '#999999' }}>Services</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ fontSize: '18px', color: '#999999'  }}>Blog</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ fontSize: '18px', color: '#999999'  }}>About</ListItemButton>
              </ListItem>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}