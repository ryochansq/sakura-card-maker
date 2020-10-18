import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Link, Paper, Typography } from '@material-ui/core'
import { Twitter } from '@material-ui/icons'

import { Store } from 'Store'
import { getRequestToken } from 'api/twitter'

const useStyles = makeStyles({
  paper: {
    padding: '16px 8px',
  },
  buttonContainer: {
    padding: 32,
  },
  button: {
    textTransform: 'none',
  },
})

const EditPage: React.FC = () => {
  const [isBackdropOpen, setIsBackdropOpen] = Store.useGlobalState('isBackdropOpen')
  const [, setIsError] = Store.useGlobalState('isError')
  const classes = useStyles()

  const onClick = async () => {
    setIsBackdropOpen(true)
    try {
      const response = await getRequestToken()
      window.location.href = response.data.authenticate_endpoint
    } catch {
      setIsError(true)
    }
    setIsBackdropOpen(false)
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
                  disabled={isBackdropOpen}
                  className={classes.button}
                  startIcon={<Twitter />}
                >
                  Twitter認証して生徒証を作る
                </Button>
              </Grid>
              <Grid item container justify='center'>
                <Typography variant='body2'>Twitter認証はアイコン取得と共有ツイートのためだけに使用します</Typography>
              </Grid>
              <Grid item container justify='center'>
                <Typography variant='subtitle1'>↓ サンプル ↓</Typography>
                <Grid item container justify='center' alignItems='center'>
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
    </div>
  )
}

export default EditPage
