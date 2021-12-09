<template>
    <form @submit="onSubmit" class="mt-10 flex justify-between">
		<input 
            class="border-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-sm pl-2 text-xs flex-1" 
            type="text" 
            v-model="title" 
            placeholder="new todo ..."
        />
		<input 
            class="ml-2 pr-6 pl-6 rounded-sm text-sm bg-purple-600 text-white cursor-pointer" 
            type="submit" 
            value="Add" 
        />
	</form>
</template>

<script>
import { mapActions } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default {
    name: 'TodoForm',
        data() {
            return {
                title: ''
            }
        },
        methods: {
            ...mapActions(['addTodo']), 
            onSubmit(event) {
                event.preventDefault()
                // console.log(this.title)
                this.addTodo({
                    id: uuidv4(),
                    title: this.title,
                    completed: false
                })
                this.title = ''
            }
        }
    }
</script>

<style>

</style>