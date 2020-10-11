import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import CardHeader from 'components/CardHeader'
import CardBody from 'components/CardBody'

const pink = '#E62588'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FEF3F8',
    borderRadius: 8,
    color: pink,
  },
})

const Card: React.FC = () => {
  // const [name] = Store.useGlobalState('name')
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
      <CardHeader />
      <CardBody />
    </div>
  )
}

export default Card
