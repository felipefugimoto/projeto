<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

      <todo-spinner v-if="loding" />

      <template v-else>

        <todo-form-add />

        <todo-itens />

        <todo-empty />

      </template>


    </div>
  </div>
  <!--/ Content -->
</template>

<script>

import TodoFormAdd from '@/components/TodoFormAdd.vue';
import TodoSpinner from '@/components/TodoSpinner.vue';
import TodoItens from '@/components/TodoItens.vue';
import TodoEmpty from '@/components/TodoEmpty.vue';




export default {
  components: { TodoFormAdd, TodoSpinner, TodoItens, TodoEmpty },
  name: "App",

  data() {
    return {
      loding: false

    }
  },
  created() {

    this.loding = true
    
    this.$store.dispatch('getTodos').finally(()=>{
      this.loding=false
    });


  },

};
</script>
