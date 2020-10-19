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
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CardHeader />
      <CardBody />
    </div>
  )
}

export default Card
