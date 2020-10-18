import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const pink = '#E62588'

const useStyles = makeStyles({
  header: {
    width: '100%',
    height: 160,
    display: 'flex',
  },
  logo: {
    marginLeft: 70,
  },
  logoJp: {
    fontSize: 60,
    paddingTop: 56,
    letterSpacing: -2,
  },
  logoEn: {
    fontSize: 32,
    marginTop: 8,
    marginLeft: 16,
    letterSpacing: 4,
  },
  titleJp: {
    fontSize: 72,
    marginLeft: 'auto',
    paddingTop: 64,
    marginRight: 16,
    letterSpacing: 110,
  },
  titleEn: {
    width: '100%',
    height: 44,
    fontSize: 44,
    lineHeight: 1,
    paddingRight: 44,
    letterSpacing: 40,
    textAlign: 'end',
    marginBottom: -8,
  },
  border: {
    width: '100%',
    height: 8,
    color: pink,
    backgroundColor: pink,
    margin: 0,
  },
})

const CardHeader: React.FC = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.logo}>
          <div className={classes.logoJp}>さくら学院 父兄</div>
          <div className={classes.logoEn}>Sakura Gakuin Fukei</div>
        </div>
        <div className={classes.titleJp}>生徒証</div>
      </div>
      <div className={classes.titleEn}>Student Card</div>
      <hr className={classes.border} />
    </div>
  )
}

export default CardHeader
