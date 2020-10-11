import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Store } from 'Store'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFDDEE',
    borderRadius: 8,
  },
  test: {
    fontSize: 100,
  },
})

const Card: React.FC = () => {
  const [name] = Store.useGlobalState('name')
  // const [year] = Store.useGlobalState('year')
  // const [month] = Store.useGlobalState('month')
  // const [date] = Store.useGlobalState('date')
  // const [grade] = Store.useGlobalState('grade')
  // const [gradeYear] = Store.useGlobalState('gradeYear')
  // const [myBoom] = Store.useGlobalState('myBoom')
  // const [target] = Store.useGlobalState('target')
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.test}>{name}</div>
    </div>
  )
}

export default Card
