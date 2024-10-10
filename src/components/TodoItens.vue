<template>
    <div class="space-y-2">
        <!--PEGA TODAS A INFORMAÇÕES VINDA STORE E IMPRIME NA TELA-->
        <todo-item
        v-for="todo in $store.state.todos"
        :key="todo.id"
        :todo="todo"
         />
      
     
    </div>
</template>
<script>

import TodoItem from './TodoItem.vue';


export default {
    components: { TodoItem }
}
</script>