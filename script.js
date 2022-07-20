console.log('Vue ok');

Vue.config.devtools = true;

const app = new Vue({
    name: 'VueEmailList',
    el: '#root',
    data: {
        error: '',
        emails: [],
    },
    method: {},
    created(){
        for(let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
            this.emails.push(res.data.response);
        }).catch((err) => {
            this.error = 'Si è verificato un errore';
        })
        }
        console.log(this.emails);
    }

})

