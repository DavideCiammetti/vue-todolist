'use strict';

const{ createApp } = Vue;

createApp({
  data() {
    return {
        list: [
            {
                'text': 'comprare pasta',
                'done': true,
            }, {
                'text': 'comprare pane',
                'done': true,
            }, {
                'text': 'comprare latte',
                'done': true,
            }, {
                'text': 'comprare uova',
                'done': true,
            },
        ],
    };
  },
}).mount('#app')