import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, MenuItem, Select, Typography } from '@material-ui/core'

import { Store } from 'Store'
import MyTextField from 'components/MyTextField'

type ItemGridProps = {
  title: string
}

const ItemGrid: React.FC<ItemGridProps> = ({ children, title }) => {
  return (
    <Grid item xs={12}>
      <Grid container direction='row' alignItems='center'>
        <Grid item xs={12} sm={2}>
          <Typography variant='subtitle2'>{title}</Typography>
        </Grid>
        {children}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles({
  root: {
    padding: '8px',
  },
})

const Form: React.FC = () => {
  const [grade, setGrade] = Store.useGlobalState('grade')
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={2}>
      <ItemGrid title='名前'>
        <Grid item xs={12} sm={6}>
          <MyTextField item='name' rows={1} />
        </Grid>
      </ItemGrid>
      <ItemGrid title='生年月日'>
        <Grid item xs={4} sm={3}>
          <MyTextField item='year' rows={1} appendText='年' />
        </Grid>
        <Grid item xs={4} sm={2}>
          <MyTextField item='month' rows={1} appendText='月' />
        </Grid>
        <Grid item xs={4} sm={2}>
          <MyTextField item='date' rows={1} appendText='日' />
        </Grid>
      </ItemGrid>
      <ItemGrid title='学年'>
        <Select variant='outlined' margin='dense' value={grade} onChange={(event) => setGrade(event.target.value as '中等部' | '小等部')}>
          <MenuItem value='中等部'>中等部</MenuItem>
          <MenuItem value='小等部'>小等部</MenuItem>
        </Select>
        <Grid item xs={4} sm={2}>
          <MyTextField item='gradeYear' rows={1} appendText='年' />
        </Grid>
      </ItemGrid>
      <ItemGrid title='マイブーム'>
        <Grid item xs={12} sm={10}>
          <MyTextField item='myBoom' rows={2} />
        </Grid>
      </ItemGrid>
      <ItemGrid title='今年の目標'>
        <Grid item xs={12} sm={10}>
          <MyTextField item='target' rows={2} />
        </Grid>
      </ItemGrid>
    </Grid>
  )
}

export default Form
