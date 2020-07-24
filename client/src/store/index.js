import Vue from 'vue'
import Vuex from 'vuex'
import socket from '../config/socket'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rollResult: []
  },
  mutations: {
    login(state, name) {
      localStorage.setItem('username', name)
      socket.emit('login', name)
    },
    joinRoom(state, payload) {
      socket.emit('join-room', payload)
    },
    logout(state) {
      localStorage.clear()
    },
    createRoom(state, payload) {
      socket.emit('create-room', payload)
    },
    start(state, room) {
      socket.emit('start-game', room)
    }, rollResult(state, result) {
      state.rollResult.push(result)
    }
  },
  actions: {
  },
  getters: {
  }
})

