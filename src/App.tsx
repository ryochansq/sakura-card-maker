import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, CircularProgress, Grid, Paper, Typography } from '@material-ui/core'
import html2canvas from 'html2canvas'

import Header from 'components/Header'
import Form from 'components/Form'
import TweetDialog from 'components/TweetDialog'
import Card from 'components/Card'

const useStyles = makeStyles({
  paper: {
    padding: '16px 8px',
  },
  buttonContainer: {
    padding: 32,
  },
  loading: {
    position: 'absolute',
  },
  card: {
    position: 'absolute',
    top: -2000,
    width: 1400,
    height: 900,
  },
})

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [src, setSrc] = React.useState('')
  const classes = useStyles()
  const card = React.useRef<HTMLDivElement>(null)
  const onClick = () => {
    if (card.current) {
      setLoading(true)
      html2canvas(card.current).then((canvas) => {
        setSrc(canvas.toDataURL())
        setLoading(false)
        setOpen(true)
      })
    } else {
      console.error('error')
    }
  }
  return (
    <div>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      <Header />
      <div ref={card} className={classes.card}>
        <Card />
      </div>
      <Grid container justify='center'>
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item container>
                <Typography variant='subtitle1'>以下の項目に答えて、自分の生徒証を作ろう！</Typography>
              </Grid>
              <Grid item container>
                <Form />
              </Grid>
              <Grid container item justify='center' alignItems='center' className={classes.buttonContainer}>
                <Button variant='contained' color='primary' onClick={onClick} size='large' disabled={loading}>
                  生徒証を作る
                </Button>
                {loading && <CircularProgress className={classes.loading} />}
              </Grid>
            </Grid>
            <TweetDialog src={src} open={open} setOpen={setOpen} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
