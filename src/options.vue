
<script>
export default{

data(){
  return{
    name:'john doe2',
    status:'sd',
    tasks:['task1','task2','task3']
  }

},
methods:{sd(){
      alert(this.name)
      this.status='ryzen'
  }}

}
</script>
<template>
 <h1 @click="sd">{{name}}</h1>
 <p v-if="status=='as'"> aas</p>
 <p v-else-if ="status === 'ryzen'"> ryzen</p>
 <p v-else> aas2</p>

 <h3>task</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

</template>


