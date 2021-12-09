<template>
    <div>
        <TodoForm/>
        <ul class="mt-3 w-full">
            <li
                class="w-full flex justify-start items-center bg-gray-100 py-1 px-3 rounded-sm mt-1"
                v-for="todo in todos"
                :key="todo.id"
                :class="todo.completed ? 'completed bg-gray-100 text-gray-400' : ''"
            >
                <p :class="todo.completed ? 'line-through flex-1 text-sm' : 'flex-1 text-sm'">
                    {{todo.title}}
                </p>   
                <input
                    type="checkbox"
                    :checked="todo.completed"
                    @change="CHANGE_COMPLETE(todo.id)"
                />
                <button class="ml-2 px-2 rounded-sm bg-red-400 text-white cursor-pointer no-underline text-sm" @click="deleteTodo(todo.id)">Xóa</button>
            </li>
        </ul>
    </div>
</template>

<script>
import TodoForm from './AddTodo.vue'
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
    computed: mapGetters(['todos']),
    methods: {
		...mapMutations(['CHANGE_COMPLETE']),
        ...mapActions(['deleteTodo'])
	}
}
</script>

<style>
    
</style>