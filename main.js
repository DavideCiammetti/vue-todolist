'use strict';

const{ createApp } = Vue;

createApp({
  data() {
    return {
        list: [
            {
                listItem :[],
                newItem :'',
                done : true,
            },
        ],
    };
  },
  methods:{
    // aggiungiamo elementi alla lista 
    addItems(){

         if(this.list[0].newItem !==  null){
            this.list[0].listItem.push(this.list[0].newItem);
            console.log(this.list[0].listItem);
            this.list[0].newItem = '';
         }
    }
  },
}).mount('#app')