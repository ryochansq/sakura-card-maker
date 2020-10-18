import axios from 'axios'

axios.defaults.baseURL = 'https://dhvwqsfku5.execute-api.ap-northeast-1.amazonaws.com/dev'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export const getRequestToken = () => {
  return axios.get<GetRequestTokenResponse>('/request_token')
}

export const getAccessToken = (oauthToken: string, oauthVerifier: string) => {
  const body = {
    oauth_token: oauthToken,
    oauth_verifier: oauthVerifier,
  }
  return axios.post<GetAccessTokenResponse>('/access_token', body)
}

export const getIcon = (accessToken: object) => {
  const body = {
    access_token: accessToken,
  }
  return axios.post<GetIconResponse>('/icon', body)
}

export const tweet = (accessToken: object, image: string) => {
  const body = {
    access_token: accessToken,
    image,
  }
  return axios.post<GetIconResponse>('/tweet', body)
}
