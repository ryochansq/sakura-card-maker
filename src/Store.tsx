import { createStore } from 'react-hooks-global-state'

const reducer = (state: StudentInfo): StudentInfo => state

const initialState: StudentInfo = {
  name: '',
  year: '',
  month: '',
  date: '',
  grade: '中等部',
  gradeYear: '',
  myBoom: '',
  target: '',
}

export const Store = createStore(reducer, initialState)
