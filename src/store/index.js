import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    ///Array para pegar os dados vindo do todo
    todos:[],
    pacientes: [],
  },
  mutations: {
    // vai comitar o status do todos
    storeTodos(state,payload){
      state.todos= payload
    },

    storePacientes(state,paylod){
      state.pacientes=paylod
    }

  },
  actions: {
       //FOI FEITO O AJAX
    //PEGOU O STORE DO STORE INDEX
    //PEGOU O O JSON TODOS
    getTodos({commit}){
      return  axios.get('http://localhost:3000/todos')
      .then((response) => {

        commit('storeTodos', response.data)

      })

    }
  },
  getters: {
  },
  modules: {
  }
})
