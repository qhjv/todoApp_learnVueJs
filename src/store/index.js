import { createStore } from 'vuex'

export const store = createStore({
  	state: {
		todos: localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[]
	},
	getters: {
		todos: state => state.todos,
	},
    actions: {
        addTodo({ commit }, newTodo){
            commit('ADD_TODO', newTodo)
        },
        deleteTodo({ commit }, todoId) {
			commit('DELETE_TODO', todoId)
		},
	},
	mutations: {
		CHANGE_COMPLETE(state, todoId) {
			state.todos.map(todo => {
				if (todo.id === todoId) todo.completed = !todo.completed
				return todo
			})
            const parsed = JSON.stringify(state.todos);
            localStorage.setItem('todos', parsed);
		},
        ADD_TODO(state, newTodo) {
			state.todos.unshift(newTodo)
            const parsed = JSON.stringify(state.todos);
            localStorage.setItem('todos', parsed);
		},
        DELETE_TODO(state, todoId) {
			state.todos = state.todos.filter(todo => todo.id !== todoId)
            const parsed = JSON.stringify(state.todos);
            localStorage.setItem('todos', parsed);
		},
	}
})
