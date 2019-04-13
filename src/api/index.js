import axios from 'axios'

export const getTopicsList = function (params) {
  return axios.get('https://cnodejs.org/api/v1/topics', params)
}
