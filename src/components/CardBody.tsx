import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Store } from 'Store'

const useStyles = makeStyles({
  body: {
    width: '100%',
    height: 694,
    display: 'flex',
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
    backgroundSize: 'cover',
    marginTop: 2,
  },
  left: {
    width: 470,
    height: 590,
    paddingLeft: 60,
    paddingTop: 100,
  },
  right: {
    width: 870,
    height: 630,
    paddingTop: 60,
  },
  icon: {
    width: 380,
    height: 380,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    lineHeight: 2,
  },
  empire: {
    marginTop: 64,
    marginLeft: 16,
    fontSize: 24,
    lineHeight: 1.3,
    letterSpacing: 2,
  },
  row: {
    padding: '7px 0',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 2,
    lineHeight: 1.2,
  },
  key: {
    width: 210,
    fontSize: 32,
  },
  value: {
    width: 600,
    fontSize: 48,
    color: '#333333',
  },
  ymd: {
    fontSize: 40,
    color: '#333333',
  },
  boomRow: {
    width: '100%',
    height: 120,
    whiteSpace: 'pre-wrap',
  },
  targetKey: {
    marginTop: 16,
    fontSize: 32,
    letterSpacing: 2,
    lineHeight: 1.2,
  },
  targetValue: {
    margin: '20px 0 0 60px',
    width: 760,
    height: 190,
    fontSize: 56,
    color: '#333333',
    fontFamily: 'TanukiMagic !important',
    letterSpacing: 2,
    lineHeight: 1.2,
    whiteSpace: 'pre-wrap',
  },
})

const Card: React.FC = () => {
  const [name] = Store.useGlobalState('name')
  const [year] = Store.useGlobalState('year')
  const [month] = Store.useGlobalState('month')
  const [date] = Store.useGlobalState('date')
  const [grade] = Store.useGlobalState('grade')
  const [gradeYear] = Store.useGlobalState('gradeYear')
  const [myBoom] = Store.useGlobalState('myBoom')
  const [target] = Store.useGlobalState('target')
  const [iconUrl] = Store.useGlobalState('iconUrl')
  const classes = useStyles()
  return (
    <div className={classes.body}>
      <div className={classes.left}>
        <div className={classes.icon}>
          <img src={iconUrl} width='100%' height='auto' alt='アイコン' />
        </div>
        <div className={classes.empire}>
          <div>有効期限</div>
          <div>2021.8.31</div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.row}>
          <div className={classes.key}>氏　　名</div>
          <div className={classes.value}>{name}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.key}>生年月日</div>
          <div className={classes.value}>
            {year} <span className={classes.ymd}>年</span> {month} <span className={classes.ymd}>月</span> {date} <span className={classes.ymd}>日</span>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.key}>学　　年</div>
          <div className={classes.value}>
            {`${grade} ${gradeYear} 年`}
          </div>
        </div>
        <div className={classes.boomRow}>
          <div className={classes.row}>
            <div className={classes.key}>マイブーム</div>
            <div className={classes.value}>{myBoom}</div>
          </div>
        </div>
        <div className={classes.targetKey}>今年の目標</div>
        <div className={classes.targetValue}>{target}</div>
      </div>
    </div>
  )
}

export default Card
