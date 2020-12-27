<template>
 <div class="bytheme">
    <h1>{{msg}}</h1>
    <a>This component shows books by theme</a>
    <br>
    <br>
    <form @submit.prevent="handleSubmit(onSubmit)">
        <div>
        <select v-model="theme">
            <option disabled value="">Please select theme</option>
            <option>crime</option>
            <option>fiction</option>
            <option>biography</option>
        </select> 
    </div>
    <div>
      <br>
      <a>Theme selected: {{this.theme}}</a>
      <br>
      <br>
      <button type="submit" style = "background-color:white" @click = "onSubmit">Submit</button>
    </div>>
    </form>
    <div style = "color:GoldenRod">
        <ul>
            <li v-for = "book in books" :key = "book.isbn">
            Isbn: {{book['isbn']}}
            <br>
            Title: {{book['title']}}
            <br>
            Author: {{book['author']}}
            <br>
            Theme: {{book['theme']}}
            <br>
            Published At: {{book['publishedAt']}}
            <br>
            <br>
            </li>
        </ul>
    </div>
    <a href="http://localhost:8080/#/">Return to start page</a>
 </div>
</template>

<script>
 export default{
    name:'bytheme',
    data (){
        return{
        title:'ByTheme',
        msg: 'Theme Component',
        theme: '',
        books: [{isbn: '111-11',
            title: 'ExampleBook',
            author: 'ExampleAuthor',
            theme: 'crime',
            publishedAt: '2010'},
            {isbn: '111-22',
            title: 'ExampleBookTwo',
            author: 'ExampleAuthorTwo',
            theme: 'biograpy',
            publishedAt: '2010'},
            {isbn: '111-33',
            title: 'ExampleBookThree',
            author: 'ExampleAuthorThree',
            theme: 'fiction',
            publishedAt: '2012'}],
        crime: [{isbn: '111-11',
            title: 'ExampleBook',
            author: 'ExampleAuthor',
            theme: 'crime',
            publishedAt: '2010'}],
        biography: [{isbn: '111-22',
            title: 'ExampleBookTwo',
            author: 'ExampleAuthorTwo',
            theme: 'biograpy',
            publishedAt: '2010'}],
        fiction: [{isbn: '111-33',
            title: 'ExampleBookThree',
            author: 'ExampleAuthorThree',
            theme: 'fiction',
            publishedAt: '2012'}]
        }
    },
   mounted () {
        console.log('Component mounted.')
    },
    methods: {
        onSubmit: function(){
            alert("Theme has been chosen");
            if(this.theme === 'crime'){ //Row 91 to including 99 to be deleted when fetching real api
                this.books = this.crime;
            }
            if(this.theme === 'fiction'){
                this.books = this.fiction;
            }
            else{
                this.books = this.biography;
            }
            //this.getBooks(); use this one when fetching real api
        }
        /* getExample: function(){
            var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://localhost:8091/book/'+ this.theme
            fetch(proxyUrl + targetUrl)
            .then(blob => blob.json())
            .then(data => {
                this.books = [data]; //take away [] when expecting more than one result
                return data;
            })
            .catch(e => {
            console.log(e);
            return e;
        }); */
    }
}

</script>
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