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

type TokenAndIcon = {
  accessToken: object
  iconUrl: string
}

type State = StudentInfo & TokenAndIcon

type GetRequestTokenResponse = {
  authenticate_endpoint: string
}

type GetAccessTokenResponse = {
  access_token: object
}

type GetIconResponse = {
  icon: string
}
