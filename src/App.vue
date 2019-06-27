<template>
  <div id="app">
    <h1 id='title'>{{getdata()}} JS HELPERS</h1>
<ul id='items'>
  <li v-for="(podatak,index) in podaci" :key="index">
        {{podatak}}
  </li>
  </ul>
   <button @click="StyleFont">Style font</button>
   <button @click="StyleName">Style color</button>
  <button @click="changetitle">Change Title</button>
  <button @click="changecolor">Switch bg color</button>
    <button @click="getborder">Get list border</button>
      <button @click="listbg">Get list bg</button>




  <h3>Ukupna suma: {{sum(podaci)}} KM</h3>
  <h3>Najskuplji artikal kosta:  {{bigestprice(podaci)}} KM</h3>
  <h3>Najeftiniji artikal kosta: {{lowestprice(podaci)}} KM</h3>


  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     podaci:{}
    }
  },
  methods:{
    getdata(){
      this.axios.get('https://output.jsbin.com/jahiwibisi.json')
      .then((response)=>{
        this.podaci=response.data
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
