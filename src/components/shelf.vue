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
        books: [{isbn: '111-11', title: 'firstBook', author: 'firstAuthor', theme: 'Crime', publishedAt: '2010'},
        {isbn: '222-22', title: 'secondBook', author: 'secondAuthor', theme: 'Biography', publishedAt: '2011'}]
        }
    },
   mounted () {
        console.log('Component mounted.')
    },
    methods: {
        getBooks: function(){
            alert("Books have been fetched");
            //this.getBooks();
        }
        /* getExample: function(){
            var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://localhost:8091/book'
            fetch(proxyUrl + targetUrl)
            .then(blob => blob.json())
            .then(data => {
                this.books = [data];
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
 
</style>