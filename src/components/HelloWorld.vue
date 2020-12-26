<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h1 style = "color:green">List of Books currently in the database:&nbsp;</h1>
    </div>
    <form @submit.prevent="handleSubmit(onSubmit)">
    <div>
      <select v-model="theme">
        <option disabled value="">Please select theme</option>
        <option>All themes</option>
        <option>Crime</option>
        <option>Fiction</option>
        <option>Biography</option>
      </select> 
    </div>
    <div>
      <a>Theme selected: {{ this.theme}}</a>
      <br>
      <button type="submit">Submit</button>
    </div>>
    </form>
    <!-- <div>
        <button style = "background-color:green" @click = "getAllBooks">ShowAll</button>
    </div> -->
      <br>
      <div style = "color:green">
        <ul>
          <li v-for = "book in books" :key = "book.isbn">
            Title: {{book['title']}}
            Author: {{book['author']}}
            Theme: {{book['theme']}}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World Component',
      books: [{isbn: '111-11', title: 'firstBook', author: 'firstAuthor', theme: 'Crime', publishedAt: '2010'},
        {isbn: '222-22', title: 'secondBook', author: 'secondAuthor', theme: 'Biography', publishedAt: '2011'}],
      // books: [{firstName: 'Test', lastName: 'Person', gender: 'some'}],
      theme: '',
      listByTheme: '',
      itemsInList: 'false'
    }
  },
  mounted () {
    console.log('Component mounted.')
  },
  methods: {
    onSubmit: function () {
      alert('Form has been submitted!') 
    }
    /* getAllBooks: function(){
          var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
          targetUrl = 'https://tools.learningcontainer.com/sample-json.json'
          fetch(proxyUrl + targetUrl)
          .then(blob => blob.json())
          .then(data => {
              this.books = [data];
              return data;
          })
          .catch(e => {
          console.log(e);
          return e;
          });

          const requestOptions = {
                  method: 'GET',
                  headers: { 'Content-Type': 'application/json' }
              };
          fetch('https://tools.learningcontainer.com/sample-json.json', requestOptions)
          .then(response => response.json())
          .then(data => {
              this.books = data
              console.log(this.books[0])
          }) */
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
