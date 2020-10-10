import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header: React.FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>さくら学院 生徒証メーカー（開発中）</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
