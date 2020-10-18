import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Dialog, DialogContent, DialogActions, Grid } from '@material-ui/core'
import { Twitter } from '@material-ui/icons'

import { Store } from 'Store'

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
  const [isBackdropOpen, setIsBackdropOpen] = Store.useGlobalState('isBackdropOpen')
  const [isError, setIsError] = Store.useGlobalState('isError')
  const classes = useStyles()

  const cancel = () => {
    setOpen(false)
  }

  const tweet = () => {
    setIsBackdropOpen(true)
    try {
    } catch {
      setIsError(true)
    }
    setIsBackdropOpen(false)
    setOpen(false)
  }
  return (
    <Dialog open={open} disableBackdropClick>
      <DialogContent>
        <img src={src} width='100%' alt='生徒証画像' />
      </DialogContent>
      <DialogActions>
        <Grid container justify='center' alignItems='center' spacing={2} direction='row-reverse'>
          <Grid item>
            <Button onClick={tweet} variant='contained' color='primary' size='large' className={classes.button} startIcon={<Twitter />}>
              Twitterで共有
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={cancel}>キャンセル</Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  )
}

export default TweetDialog
