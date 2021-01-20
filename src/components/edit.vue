<template>
  <div class="edit">
    <h1>{{ msg }}</h1>
    <div>
      <h2 style = "color:black">Here you can edit a Book in the database:&nbsp;</h2>
    </div>
        <form @submit.prevent="handleSubmit(onSubmit)"> 
        <div>
            <br>
            <div class="row justify-content-center">
                <label>BookId:&nbsp;&nbsp;</label>
                    <input v-model="bookId" placeholder="Book ID required">
            </div>
            <br>
            <div class="row justify-content-center">
                <label>ISBN:&nbsp;&nbsp;</label>
                    <input v-model="isbn" placeholder="ISBN">
            </div>
            <br>
            <div class="row justify-content-center">
                <label>Title:&nbsp;&nbsp;</label>
                    <input v-model="title" placeholder="Title">
            </div>
            <br>
            <div class="row justify-content-center">
                <label>Author:&nbsp;&nbsp;</label>
                    <input v-model="author" placeholder="Author">
            </div>
            <br>
            <div class="row justify-content-center">
                <label>Theme:&nbsp;&nbsp;</label>
                    <select v-model="theme">
                        <option disabled value="">Please select type</option>
                        <option>crime</option>
                        <option>fiction</option>
                        <option>biography</option>
                    </select> 
            </div>
            <br>
            <div class="row justify-content-center">
              <button type="submit" style = "background-color:white" @click = "onSubmit">Submit</button>
            </div>
            <br>
        </div>
        </form>
    <div>
        <p>
          This book has been edited: 
           {{this.bookId}},
           {{this.isbn }},
           {{this.title}}, 
           {{this.author}}, 
           {{this.theme}} 
        </p>
    </div>
    <a href="http://localhost:8080/#/">Return to start page</a>
  </div>
</template>

<script>

export default {
  name: 'edit',
  data () {
    return {
      msg: 'Edit Book Component',
      bookId: '',
      isbn: '',
      title: '',
      author: '',
      theme: ''
    }
  },
  mounted () {
    console.log('Component mounted.')
  },
  methods: {
    onSubmit () {
      alert('Form has been submitted!');
      this.sendJson(); 
      this.bookId = '',
      this.isbn = ''; 
      this.title = '';
      this.author = '';
      this.theme = '';
    },
    sendJson() { 
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.getInputBody())
      };
      fetch('rest/book/put/'+ this.bookId, requestOptions)
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
        theme: this.theme
      };
    } 
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
  color: #0c0c0c;
}
</style>
