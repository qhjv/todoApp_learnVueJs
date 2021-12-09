<template>
    <form @submit="onSubmit" class="mt-10">
        <div class="flex justify-between h-8">
            <input 
                type="text" 
                v-model="title" 
                placeholder="Thêm mới..."
                :class="error? 'border-red-400 border-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-sm pl-2 text-xs flex-1' 
                : 'border-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-sm pl-2 text-xs flex-1'"
            />
            <input 
                class="ml-2 pr-6 pl-6 rounded-sm text-sm bg-purple-600 text-white cursor-pointer" 
                type="submit" 
                value="Thêm" 
            />
        </div>
        <p v-show="error" class="mt-[5px] text-xs text-red-400">Chưa điền thông tin !!!</p>
	</form>
</template>

<script>
import { mapActions } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default {
    name: 'TodoForm',
        data() {
            return {
                title: '',
                error:false,
            }
        },
        methods: {
            ...mapActions(['addTodo']), 
            onSubmit(event) {
                event.preventDefault()
                if(!this.title){
                    this.error = true
                }else{
                    this.error = false
                    this.addTodo({
                        id: uuidv4(),
                        title: this.title,
                        completed: false
                    })
                    this.title = ''
                }
            }
        }
    }
</script>

<style>

</style>