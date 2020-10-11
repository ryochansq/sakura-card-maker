import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backStr: {
    position: 'absolute',
    backgroundColor: '#FEF3F8',
    opacity: 0.15,
  },
  backPair: {
    marginBottom: 8,
  },
  backStr1: {
    fontSize: 39,
    whiteSpace: 'nowrap',
    marginLeft: -32,
    marginBottom: 4,
  },
  backStr2: {
    fontSize: 39,
    whiteSpace: 'nowrap',
    marginLeft: -108,
  },
  backLogo: {
    position: 'absolute',
    width: 1400,
    height: 660,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.1,
  },
})

const Card: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.background}>
      <div className={classes.backLogo}>
        <div>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} width='580' height='580' alt='logo' />
        </div>
      </div>
      <div className={classes.backStr}>
        {[...Array(8)].map((_, i) => (
          <div className={classes.backPair} key={i}>
            <div className={classes.backStr1}>{[...Array(6)].map(() => 'Sakura Gakuin ')}</div>
            <div className={classes.backStr2}>{[...Array(6)].map(() => 'Sakura Gakuin ')}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
