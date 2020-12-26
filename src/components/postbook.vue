<template>
  <div class="postbook">
    <h1>{{ msg }}</h1>
    <div>
      <h2 style = "color:black">Here you can add a new Book to the collection:&nbsp;</h2>
    </div>
        <form @submit.prevent="handleSubmit(onSubmit)"> 
        <div>
            <div class="row justify-content-center">
                <p style ="color:blue">Register a Book:</p>
            </div>
            <br>
            <div class="row justify-content-center">
                <label style="color:blue">ISBN:&nbsp;&nbsp;</label>
                    <input v-model="isbn" placeholder="ISBN">
            </div>
            <br>
            <div class="row justify-content-center">
                <label style="color:blue">Title:&nbsp;&nbsp;</label>
                    <input v-model="title" placeholder="Title">
            </div>
            <br>
            <div class="row justify-content-center">
                <label style="color:blue">Author:&nbsp;&nbsp;</label>
                    <input v-model="author" placeholder="Author">
            </div>
            <br>
            <div class="row justify-content-center">
                <label style="color:blue">Theme:&nbsp;&nbsp;</label>
                    <select v-model="theme">
                        <option disabled value="">Please select type</option>
                        <option>crime</option>
                        <option>fiction</option>
                        <option>biography</option>
                    </select> 
            </div>
            <br>
            <div class="row justify-content-center">
                <label style="color:blue">Published At:&nbsp;&nbsp;</label>
                    <input v-model="publishedAt" placeholder="Published At">
            </div>
            <br>
            <div class="row justify-content-center">
              <button type="submit" style = "background-color:pink" @click = "onSubmit">Submit</button>
            </div>
            <br>
        </div>
        </form>
    <div>
        <p>
          This book has been added: {{ this.isbn }},
           {{this.title}}, 
           {{this.author}}, 
           {{this.theme}}, 
           {{this.publishedAt}}
        </p>
    </div>
    <a href="http://localhost:8080/#/">Return to start page</a>
  </div>
</template>

<script>

export default {
  name: 'postbook',
  data () {
    return {
      msg: 'Post Book Component',
      isbn: '',
      title: '',
      author: '',
      theme: '',
      publishedAt: ''
    }
  },
  mounted () {
    console.log('Component mounted.')
  },
  methods: {
    onSubmit () {
      alert('Form has been submitted!');
      // this.sendJson(); //add this for fetching from public api
      this.isbn = ''; 
      this.title = '';
      this.author = '';
      this.theme = '';
      this.publishedAt = '';
    }
    /* sendJson() { //add for fetching from public api
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.getInputBody())
      };
      fetch('http://localhost:8091/book/post', requestOptions)
        .then(response => {
          if (response.status === 200) {
          return response.json();
          } else {
            throw new Error('Something went wrong on api server!');
          }
        })
        .then(response => {
          console.debug(response);
          }).catch(error => {
            console.error(error);
          }); 
    },
    getInputBody(){
      return {
        isbn: this.isbn, 
        title: this.title, 
        author: this.author,
        themer: this.theme,
        publishedAt: this.publishedAt
      };
    } */
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
