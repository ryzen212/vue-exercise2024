
<script setup>
import { ref } from 'vue' ; 

    const name = ref('john doe2');
    const status = ref('sd');
    const tasks = ['task1','task2','task3'];

    const toggleStatus = ()=>{
        name.value = 'aw';
        status.value = 'aw';
      }
   

</script>
<template>
<h1 @click="toggleStatus">{{ name }}</h1>
</template>


