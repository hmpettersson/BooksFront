<template>
 <div class="shelf">
    <h1>{{msg}}</h1>
    <a>This component shows all books "on the shelf"</a>
    <div>
        <br>
        <button style = "background-color:white" @click = "getBooks">Fetch Books</button>
    </div>
    <br>
    <div style = "color:blue">
        <ul>
            <li v-for = "book in books" :key = "book.isbn">
            BookId: {{book['bookId']}}
            <br>
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
    name:'shelf',
    data (){
        return{
        title:'Shelf',
        msg: 'Shelf Component',
        books: [{bookId: '11', isbn: '111-11', title: 'firstBook', author: 'firstAuthor', theme: 'Crime', publishedAt: '2010'}]
        }
    },
   mounted () {
        console.log('Component mounted.')
    },
    methods: {
        getBooks: function(){
            alert("Books have been fetched");
            this.getExample();
        },
        getExample: function(){
            fetch('/rest/book')
            .then(blob => blob.json())
            .then(data => {
                this.books = data;
                return data;
            })
            .catch(e => {
            console.log(e);
            return e;
            });
        }
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
