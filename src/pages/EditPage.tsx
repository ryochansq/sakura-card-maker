import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button,Dialog, DialogContent, DialogActions, Grid, Link, Paper, Typography } from '@material-ui/core'
import html2canvas from 'html2canvas'
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'

import { Store } from 'Store'
import Form from 'components/Form'
import TweetDialog from 'components/TweetDialog'
import Card from 'components/Card'
import { getAccessToken, getIcon } from 'api/twitter'

type Query = {
  oauth_token: string
  oauth_verifier: string
}

const useStyles = makeStyles({
  paper: {
    padding: '16px 8px',
  },
  buttonContainer: {
    padding: 32,
  },
  card: {
    position: 'absolute',
    top: -3000,
    width: 1342,
    height: 900,
  },
  button: {
    textTransform: 'none',
  },
})

const EditPage: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [confirming, setConfirming] = React.useState(false)
  const [src, setSrc] = React.useState('')
  const [, setAccessToken] = Store.useGlobalState('accessToken')
  const [, setIconUrl] = Store.useGlobalState('iconUrl')
  const [isBackdropOpen, setIsBackdropOpen] = Store.useGlobalState('isBackdropOpen')
  const [, setIsError] = Store.useGlobalState('isError')
  const classes = useStyles()
  const card = React.useRef<HTMLDivElement>(null)
  const location = useLocation()
  const history = useHistory()

  React.useEffect(() => {
    const init = async () => {
      try {
        const parsed = queryString.parse(location.search) as Query
        const oauthToken = parsed.oauth_token
        const oauthVerifier = parsed.oauth_verifier
        const tokenResponse = await getAccessToken(oauthToken, oauthVerifier)
        setAccessToken(tokenResponse.data.access_token)
        const iconResponse = await getIcon(tokenResponse.data.access_token)
        const url = iconResponse.data.icon
        setIconUrl(url)
      } catch {
        setIsError(true)
        history.push('/')
      }
    }
    init()
  }, [location, setAccessToken, setIconUrl, setIsError, history])

  const confirm = () => {
    window.scrollTo(0, 0)
    setConfirming(true)
  }

  const onClick = () => {
    setConfirming(false)
    if (card.current) {
      setIsBackdropOpen(true)
      html2canvas(card.current, { scrollX: -window.scrollX, scrollY: -window.scrollY }).then((canvas) => {
        setSrc(canvas.toDataURL())
        setOpen(true)
        setIsBackdropOpen(false)
      })
    } else {
      setIsError(true)
    }
  }
  return (
    <div>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      <div ref={card} className={classes.card}>
        <Card />
      </div>
      <Grid container justify='center'>
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item container>
                <Typography variant='subtitle1'>以下を入力して、自分の生徒証を作ろう！</Typography>
              </Grid>
              <Grid item container>
                <Form />
              </Grid>
              <Grid container item justify='center' alignItems='center' className={classes.buttonContainer}>
                <Button variant='contained' color='primary' onClick={confirm} size='large' disabled={isBackdropOpen} className={classes.button}>
                  生徒証を作成する
                </Button>
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
            <TweetDialog src={src} open={open} setOpen={setOpen} />
            <Dialog open={confirming}>
              <DialogContent>
                <Typography variant='subtitle1'>生徒証を作成しますか？</Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={()=>setConfirming(false)}>キャンセル</Button>
                <Button
                  onClick={onClick}
                  variant='contained'
                  color='primary'
                  size='large'
                >
                  作成する
                </Button>
              </DialogActions>
            </Dialog>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default EditPage
