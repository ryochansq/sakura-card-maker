/// <reference types="react-scripts" />

type StudentInfo = {
  name: string
  year: string
  month: string
  date: string
  grade: '中等部' | '小等部'
  gradeYear: string
  myBoom: string
  target: string
}

type Other = {
  accessToken: object
  iconUrl: string
  isBackdropOpen: boolean
  isError: boolean
}

type State = StudentInfo & Other

type GetRequestTokenResponse = {
  authenticate_endpoint: string
}

type GetAccessTokenResponse = {
  access_token: object
}

type GetIconResponse = {
  icon: string
}
