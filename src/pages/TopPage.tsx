import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, CircularProgress, Grid, Link, Paper, Typography } from '@material-ui/core'

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
  button: {
    textTransform: 'none',
  },
})

const EditPage: React.FC = () => {
  const [loading, setLoading] = React.useState(false)
  const classes = useStyles()

  const onClick = () => {}

  return (
    <div>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      <Grid container justify='center'>
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item container>
                <Typography variant='subtitle1'>以下を入力して、自分の生徒証を作ろう！</Typography>
              </Grid>
              <Grid container item justify='center' alignItems='center' className={classes.buttonContainer}>
                <Button variant='contained' color='primary' onClick={onClick} size='large' disabled={loading} className={classes.button}>
                  Twitter連携して生徒証を作成する
                </Button>
                {loading && <CircularProgress className={classes.loading} />}
              </Grid>
              <Grid item container justify='center'>
                <Typography variant='caption'>Twitter連携はアイコン取得と共有ツイートのために使用します</Typography>
              </Grid>
              <Grid item container justify='flex-end'>
                <Typography variant='caption'>
                  Created by{' '}
                  <Link href='https://twitter.com/ryochan_metal' target='_blank'>
                    @ryochan_metal
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default EditPage
