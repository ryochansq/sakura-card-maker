import React from 'react'
import { InputAdornment, TextField } from '@material-ui/core'

import { Store } from 'Store'

type Props = {
  item: keyof StudentInfo
  rows: number
  appendText?: string
}

const MyTextField: React.FC<Props> = ({ item, rows, appendText }) => {
  const [info, setInfo] = Store.useGlobalState(item)

  return (
    <TextField
      variant='outlined'
      size='small'
      fullWidth
      multiline={rows > 1}
      rows={rows}
      InputProps={{ endAdornment: <InputAdornment position='end'>{appendText || ''}</InputAdornment> }}
      value={info}
      onChange={(event) => setInfo(event.target.value as string)}
    />
  )
}

export default MyTextField
