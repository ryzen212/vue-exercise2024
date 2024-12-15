
<script setup>
import { ref , onMounted} from 'vue' ; 

   const newTask = ref('sw');
const tasks = ref([]);
    const addTask = ()=>{
        if(newTask.value.trim() !== ''){
            tasks.value.push(newTask.value)
            newTask.value='s';
        }
    }
    const deleteTask = (index)=>{
        tasks.value.splice(index, 1); // 2nd parameter means remove one item only
    }
    onMounted(async()=>{

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos')
                const data = await response.json();
                tasks.value = data.map((task) => task.title);
            } catch (error) {
                console.log('error'+error)
            }   
    })
</script>
<template>
    <form @submit.prevent="addTask">
        <label for="newTask"> Add Task</label>
        <input type="text" name="newTask" v-model="newTask" id="newTask">
            <button type="submit">Submits</button>
    </form>

    <ul>
        <li v-for="(task,index) in tasks" :key="task">
            <span>{{ task }}</span>
            <button @click="deleteTask(index)">delete</button>
        </li>
    </ul>
</template>
