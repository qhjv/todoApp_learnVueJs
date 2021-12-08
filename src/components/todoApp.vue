<template>
    <div>
        <TodoForm/>
        <ul>
            <li
                v-for="todo in todos"
                :key="todo.id"
                :class="todo.completed ? 'completed' : ''"
            >
                {{todo.title}}
                <input
                    type="checkbox"
                    :checked="todo.completed"
                    @change="CHANGE_COMPLETE(todo.id)"
                />
                <button @click="deleteTodo(todo.id)">Xóa</button>
            </li>
        </ul>
    </div>
</template>

<script>
import TodoForm from './addToDo.vue'
import { mapMutations,mapGetters,mapActions } from 'vuex'
export default {
    name:"TodoApp",
    components: { TodoForm },
    mounted() {
        if (localStorage.getItem('todos')) {
            try {
                this.todos = JSON.parse(localStorage.getItem('todos'));
                console.log(this.todos)
            } catch(e) {
                localStorage.removeItem('todos');
            }
        }
    },
    computed: mapGetters(['todos', 'isAuthenticated']),
    methods: {
		...mapMutations(['CHANGE_COMPLETE']),
        ...mapActions(['deleteTodo'])
	}
}
</script>

<style>
    .completed{
        text-decoration: line-through;
    }
</style>