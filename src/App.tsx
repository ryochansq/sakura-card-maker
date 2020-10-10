import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
// import html2canvas from 'html2canvas'

import Header from 'components/Header'
import Form from 'components/Form'

const useStyles = makeStyles({
  paper: {
    padding: '8px',
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
})

const App: React.FC = () => {
  const classes = useStyles()
  // setTimeout(() => {
  //   html2canvas(document.body).then(function (canvas) {
  //     document.body.appendChild(canvas)
  //   })
  //   console.info(document.body)
  // })
  return (
    <div className='App'>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      <Header />
      <Grid container justify='center'>
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={classes.paper}>
            <Typography variant='subtitle1'>以下の項目に答えて、自分の生徒証を作ろう！</Typography>
            <Form />
            <Button className={classes.button}>Hello Sakura Gakuin!!</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
