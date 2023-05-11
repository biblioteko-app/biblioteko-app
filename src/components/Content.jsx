import React from 'react'
import {
  Grid,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Avatar,
} from '@mui/material'

const Content = () => {
  const profiles = [
    {
      name: 'Álex Micaela',
      title: 'Universitário',
      imageUrl: 'https://github.com/alexmof.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    },
    {
      name: 'Ana Beatriz',
      title: 'Universitário',
      imageUrl: 'https://github.com/beatriztruta.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    },
    {
      name: 'Ana Paula',
      title: 'Universitário',
      imageUrl: 'https://github.com/anapaaula.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    },
    {
      name: 'Ingrid Castro',
      title: 'Universitário',
      imageUrl: 'https://github.com/ingridjackeline.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    },
    {
      name: 'João Pedro',
      title: 'Universitário',
      imageUrl: 'https://github.com/pedroffeitosa.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    },
    {
      name: 'Junior José',
      title: 'Universitário',
      imageUrl: 'https://github.com/juniorjse.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    },
    {
      name: 'Laysa Santos',
      title: 'Universitário',
      imageUrl: 'https://github.com/laysasantos2.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    },
    {
      name: 'Leandro Grismino',
      title: 'Universitário',
      imageUrl: 'https://github.com/github.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    },
    {
      name: 'Leticia Calixto',
      title: 'Universitário',
      imageUrl: 'https://github.com/leticiagc.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    },
    {
      name: 'Mateus Rodrigues',
      title: 'Universitário',
      imageUrl: 'https://github.com/finalcontradiction.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    },
    {
      name: 'Ody Mendes',
      title: 'Universitário',
      imageUrl: 'https://github.com/Odyjmm.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    },
    {
      name: 'Vitor Emanuel',
      title: 'Universitário',
      imageUrl: 'https://github.com/vitoremanuellds.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    },
    {
      name: 'Marcus Ideão',
      title: 'Universitário',
      imageUrl: 'https://github.com/github.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    },
  ]

  return (
    <Grid
      container
      spacing={4}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        py: 10,
        px: 2,
      }}
    >
      {profiles.map((profile) => (
        <Grid item xs={12} sm={6} md={3} key={profile.name}>
          <Card sx={{ display: 'flex', flexDirection: 'row' }}>
            <Avatar
              alt={profile.name}
              src={profile.imageUrl}
              sx={{ width: 100, height: 100, borderRadius: '50%', mr: 2 }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {profile.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {profile.title}
              </Typography>
              <Typography variant="body2">{profile.comment}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Content
