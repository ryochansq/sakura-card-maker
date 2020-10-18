import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Dialog, DialogContent, DialogActions, Grid, Typography } from '@material-ui/core'
import { Twitter } from '@material-ui/icons'

import { Store } from 'Store'
import { tweet } from 'api/twitter'

type Props = {
  src: string
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const useStyles = makeStyles({
  button: {
    textTransform: 'none',
  },
})

const TweetDialog: React.FC<Props> = ({ src, open, setOpen }) => {
  const [complete, setComplete] = React.useState(false)
  const [accessToken] = Store.useGlobalState('accessToken')
  const [isBackdropOpen, setIsBackdropOpen] = Store.useGlobalState('isBackdropOpen')
  const [, setIsError] = Store.useGlobalState('isError')
  const classes = useStyles()

  const close = () => {
    setOpen(false)
    setComplete(false)
  }

  const onClickTweet = async () => {
    setIsBackdropOpen(true)
    try {
      // await tweet(accessToken, src)
      setIsError(true)

      setComplete(true)
    } catch {
      setIsError(true)
    }
    setIsBackdropOpen(false)
  }
  return (
    <Dialog open={open} disableBackdropClick>
      <DialogContent>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item>
            <img src={src} width='100%' alt='生徒証画像' />
          </Grid>
          <Grid item>
            <Typography variant='subtitle1'>{complete ? 'ツイートしました！' : 'ツイートして共有しよう！'}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container justify='center' alignItems='center'>
          {complete ? (
            <Button onClick={close} variant='contained' color='primary' size='large'>
              OK
            </Button>
          ) : (
            <Grid container justify='center' alignItems='center' spacing={2} direction='row-reverse'>
              <Grid item>
                <Button
                  onClick={onClickTweet}
                  variant='contained'
                  color='primary'
                  size='large'
                  disabled={isBackdropOpen}
                  className={classes.button}
                  startIcon={<Twitter />}
                >
                  Twitterで共有
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={close}>キャンセル</Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </DialogActions>
    </Dialog>
  )
}

export default TweetDialog
