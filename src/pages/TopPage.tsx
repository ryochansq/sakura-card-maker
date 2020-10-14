import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, CircularProgress, Grid, Link, Paper, Snackbar, Typography } from '@material-ui/core'
import { Twitter } from '@material-ui/icons'

import { getRequestToken } from 'api/twitter'

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
  const [isSnackOpen, setIsSnackOpen] = React.useState(false)
  const classes = useStyles()

  const onClick = async () => {
    setLoading(true)
    try {
      const response = await getRequestToken()
      window.location.href = response.data.authenticate_endpoint
    } catch {
      setIsSnackOpen(true)
      setLoading(false)
    }
  }

  return (
    <div>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      <Grid container justify='center'>
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item container justify='center'>
                <Typography variant='subtitle1'>自分の生徒証を作成できるサイトです！</Typography>
              </Grid>
              <Grid container item justify='center' alignItems='center' className={classes.buttonContainer}>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={onClick}
                  size='large'
                  disabled={loading}
                  className={classes.button}
                  startIcon={<Twitter />}
                >
                  Twitter認証して生徒証を作る
                </Button>
                {loading && <CircularProgress className={classes.loading} />}
              </Grid>
              <Grid item container justify='center'>
                <Typography variant='body2'>Twitter認証はアイコン取得と共有ツイートのためだけに使用します</Typography>
              </Grid>
              <Grid item container justify='center'>
                <Typography variant='subtitle1'>↓ サンプル ↓</Typography>
                <Grid item container justify='center'>
                  <img src={`${process.env.PUBLIC_URL}/sample.jpg`} width='70%' alt='sample' />
                </Grid>
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
      <Snackbar
        open={isSnackOpen}
        onClose={() => setIsSnackOpen(false)}
        message='エラーが発生しました。しばらく時間をおいて再度アクセスして下さい'
        autoHideDuration={5000}
      />
    </div>
  )
}

export default EditPage
