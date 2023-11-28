'use strict';

const{ createApp } = Vue;

createApp({
  data() {
    return {
        list: [
            {
                listItem :[],
                newItem :'',
                done : false,
            },
        ],
    };
  },
  methods:{
    // aggiungiamo elementi alla lista 
    addItems(){

         if(this.list[0].newItem.trim() !==  null){
            this.list[0].listItem.push(this.list[0].newItem);
            console.log(this.list[0].listItem);
            this.list[0].newItem = '';
         }
    },
    // rimuovo elemento al click sulla 'x'
    removeItem(index){
        this.list[0].listItem.splice(index, 1);
    }
  },
}).mount('#app')