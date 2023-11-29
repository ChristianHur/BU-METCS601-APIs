
const goodApp = Vue.createApp({   
    template: `
        <div><h1>Hello Pluto!</hl></div>
    `
}).mount("#good-app")

const badApp = Vue.createApp({  
    data(){
        return{
            message:"Hello Jupiter!"
        }
    },
    methods:{
        update(){
            this.message = "Wassup Earth!"
        },
        reset(){
            this.message = "Hello Jupiter!"
        }
    },
    template: `
        <div><h1 @mouseover="update" @mouseleave="reset">{{message}}</h123></div>
    `
}).mount("#bad-app")
