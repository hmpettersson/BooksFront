<template>
 <div class="person">
    <h1>{{msg}}</h1>
    <a>This component fetches info in Json format from a public api:</a>
    <div>
        <br>
        <button style = "background-color:white" @click = "getPerson">Fetch Example</button>
    </div>
    <br>
    <div style = "color:GoldenRod">
        <ul>
            <li v-for = "person in persons" :key = "person.firstName">
            First Name: {{person['firstName']}}
            <br>
            Last Name: {{person['lastName']}}
            </li>
        </ul>
    </div>
    <a href="http://localhost:8080/#/">Return to start page</a>
 </div>
</template>
<script>
 export default{
  name:'person',
    data (){
        return{
        title:'Person',
        msg: 'Person Component',
        persons: [{firstName: 'Example', lastName:'Example'}]
        }
    },
   mounted () {
        console.log('Component mounted.')
    },
    methods: {
        getPerson: function(){
            this.getExample();
        },
        getExample: function(){
            var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://tools.learningcontainer.com/sample-json.json'
            fetch(proxyUrl + targetUrl)
            .then(blob => blob.json())
            .then(data => {
                this.persons = [data];
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