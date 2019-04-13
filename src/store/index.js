import Vue from 'vue'
import Vuex from 'vuex'
import { getTopicsList } from '@/api'

Vue.use(Vuex)

export const CLEAR_TOPICS = 'CLEAR_TOPICS' // 清空主题
export const GET_TOPICS = 'GET_TOPICS' // 获取主题

export const store = new Vuex.Store({
  state: {
    topics: [] // 主题
  },
  mutations: {
    [CLEAR_TOPICS] (state) {
      state.topics = []
    },
    [GET_TOPICS] (state, topics) {
      state.topics = topics
    }
  },
  actions: {
    async getAllTopics ({ commit }, payload) {
      const { data } = await getTopicsList(payload)
      data.success && commit(GET_TOPICS, data.data)
    }
  }
})
