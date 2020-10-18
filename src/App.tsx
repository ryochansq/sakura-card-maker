import React from 'react'
import { Backdrop, CircularProgress, Snackbar } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { Store } from 'Store'
import Router from 'Router'
import Header from 'components/Header'

const useStyles = makeStyles(() =>
  createStyles({
    backdrop: {
      zIndex: 9999,
    },
  })
)

const App: React.FC = () => {
  const [isBackdropOpen] = Store.useGlobalState('isBackdropOpen')
  const [isError, setIsError] = Store.useGlobalState('isError')
  const classes = useStyles()
  return (
    <div>
      <Header />
      <Router />
      <Backdrop className={classes.backdrop} open={isBackdropOpen}>
        <CircularProgress />
      </Backdrop>
      <Snackbar
        open={isError}
        onClose={() => setIsError(false)}
        message='エラーが発生しました。しばらく時間をおいて再度アクセスして下さい'
        autoHideDuration={5000}
      />
    </div>
  )
}

export default App
