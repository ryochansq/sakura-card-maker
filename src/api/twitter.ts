import axios from 'axios'

export const getRequestToken = () => {
  return axios.get<GetRequestTokenResponse>('https://dhvwqsfku5.execute-api.ap-northeast-1.amazonaws.com/dev/request_token')
}
