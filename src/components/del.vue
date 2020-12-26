<template>
<div class="del">
    <h1>{{msg}}</h1>
    <div>
        <h2 style = "color:red">Enter the book id for the book you want to delete:&nbsp;</h2>
    </div>
    <br>
    <div style = "color:red">
        <input v-model = "theId" placeholder="Book ID">
        <button style = "background-color:red" @click = "onSubmit">Delete Book</button>
        <br> 
    </div>
    <div>
        <p>Book with id {{ this.theId }} will be deleted.</p>
    </div>
    <a href="http://localhost:8080/#/">Return to start page</a>
</div>
</template>

<script>
export default {
    name: 'del',
    data() {
        return{
            msg: 'Delete Component', 
            theId:''
        }
    },
    mounted() {
            console.log('Component mounted.')
    },
    methods: {
        onSubmit: function(){
            //this.deletePerson() Use this for when you send a delete request to real api
            alert('Book with ID ' + this.theId + ' has been deleted.')
            this.theId = ''
        } /*,
        deletePerson: function(){
            const requestOptions = {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
            };
            fetch('http://localhost:8091/book/delete/' + this.theId, requestOptions)
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
        }*/
    }
}

</script>
