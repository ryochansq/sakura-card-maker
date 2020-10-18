import { createStore } from 'react-hooks-global-state'

const reducer = (state: State): State => state

const initialState: State = {
  name: '',
  year: '',
  month: '',
  date: '',
  grade: '中等部',
  gradeYear: '',
  myBoom: '',
  target: '',
  accessToken: {},
  iconUrl: '',
}

export const Store = createStore(reducer, initialState)
