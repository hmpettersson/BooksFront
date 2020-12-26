<template>
<div class="ShowBooks">
    <h1>Wellcome to all books</h1>
    <div>
        <h1 style = "color:green">This is ShowBooks Component:&nbsp;</h1>
    </div>
    <!-- <div>
        <button style = "background-color:green" @click = "getAllBooks">ShowAll</button>
    </div>
    <br>
    <div style = "color:green">
        <ul>
            <li v-for = "book in books" :key = "book.firstName">
                Title: {{book['firstName']}} 
                Author: {{book['lastName']}}
                Theme: {{book['gender']}}
            </li>
        </ul>
    </div> -->
</div>
</template>

<script>
export default {
    name: 'ShowBooks',
    data() {
        return{ 
            books:[{firstName: 'Show', lastName: 'Books', gender: 'female'},{firstName: 'A', lastName: 'B', gender: 'female'}],
        }
    },
    mounted() {
            console.log('Component mounted.')
    },
    methods: {
        /* getAllBooks: function(){
            const requestOptions = {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                };
            fetch('https://tools.learningcontainer.com/sample-json.json', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.books = data
                console.log(this.books[0])
            })
        } */
  }
}
</script>
