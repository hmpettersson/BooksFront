<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Welcome to the online Book Shelf!</h2>>
    <a href="http://localhost:8080/#/person">Go here to see an example with a public api</a>
    <br>
    <br>
    <a href="http://localhost:8080/#/shelf">Go here to see all books "on the shelf"</a>
    <br>
    <br>
    <a href="http://localhost:8080/#/bytheme">Go here to choose books by theme</a>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to the online Book Shelf!'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>